import { take, put, call, fork } from 'redux-saga/effects'
import api from 'services/api'
import * as actions from './actions'
import saga, * as sagas from './sagas'

describe('createConfig', () => {
  const data = { title: 'test' }

  it('calls success', () => {
    const generator = sagas.createConfig(data)
    expect(generator.next().value).toEqual(call(api.post, '/configs', data))
    expect(generator.next(data).value).toEqual(put(actions.configCreateSuccess(data)))
  })

  it('calls failure', () => {
    const generator = sagas.createConfig(data)
    expect(generator.next().value).toEqual(call(api.post, '/configs', data))
    expect(generator.throw('test').value).toEqual(put(actions.configCreateFailure('test')))
  })
})

describe('readConfigList', () => {
  it('calls success', () => {
    const data = [1, 2, 3]
    const generator = sagas.readConfigList({ _limit: 1 })
    expect(generator.next().value).toEqual(call(api.get, '/configs', { params: { _limit: 1 } }))
    expect(generator.next(data).value).toEqual(put(actions.configListReadSuccess(data)))
  })

  it('calls failure', () => {
    const generator = sagas.readConfigList({ _limit: 1 })
    expect(generator.next().value).toEqual(call(api.get, '/configs', { params: { _limit: 1 } }))
    expect(generator.throw('test').value).toEqual(put(actions.configListReadFailure('test')))
  })
})

test('watchConfigCreateRequest', () => {
  const payload = { data: 1 }
  const generator = sagas.watchConfigCreateRequest()
  expect(generator.next().value).toEqual(take(actions.CONFIG_CREATE_REQUEST))
  expect(generator.next(payload).value).toEqual(call(sagas.createConfig, ...Object.values(payload)))
})

test('watchConfigListReadRequest', () => {
  const payload = { params: { _limit: 1 } }
  const generator = sagas.watchConfigListReadRequest()
  expect(generator.next().value).toEqual(take(actions.CONFIG_LIST_READ_REQUEST))
  expect(generator.next(payload).value).toEqual(call(sagas.readConfigList, ...Object.values(payload)))
})

test('saga', () => {
  const generator = saga()
  expect(generator.next().value).toEqual(fork(sagas.watchConfigCreateRequest))
  expect(generator.next().value).toEqual(fork(sagas.watchConfigListReadRequest))
})
