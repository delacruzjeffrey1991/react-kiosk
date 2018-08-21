import { all, apply, take, put, call, fork, race } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'
import * as actions from './actions'

function watchMessages(socket) {
  return eventChannel((emit) => {
    socket.on('config-set', (config) => {
      emit({ type: actions.CONFIG_SET, payload: config })
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
    yield take(actions.CONFIG_GET)
    yield apply(socket, socket.emit, ['config-get'])
  }
}

function* flow(socketApi) {
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
  // Is it hacky workaround?
  yield fork(internalListener, socketApi)

  yield fork(flow, socketApi)
}
