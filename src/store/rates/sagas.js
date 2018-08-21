import { all, apply, take, put, call, fork, race } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'
import * as actions from './actions'

function watchMessages(socket) {
  return eventChannel((emit) => {
    socket.on('rates-set', (rates) => {
      emit({ type: actions.RATES_SET, payload: rates })
    })

    return () => {
      socket.close()
    }
  })
}

function* externalListener(socketChannel) {
  while (true) {
    const action = yield take(socketChannel)
    yield put(action)
  }
}

function* internalListener(socket) {
  while (true) {
    yield take(actions.RATES_GET)
    yield apply(socket, socket.emit, ['rates-get'])
  }
}

export function* flow(socketApi) {
  while (true) {
    const socket = yield call(socketApi.connect)
    const socketChannel = yield call(watchMessages, socket)

    const { cancel } = yield race({
      task: all([call(externalListener, socketChannel), call(internalListener, socket)]),
      cancel: take('STOP_WEBSOCKET'),
    })

    if (cancel) {
      socketChannel.close()
    }
  }
}

export default function* ({ socketApi }) {
  yield fork(flow, socketApi)

  // Is it hacky workaround?
  yield fork(internalListener, socketApi)
}
