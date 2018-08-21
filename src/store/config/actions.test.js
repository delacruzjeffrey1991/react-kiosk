import * as actions from './actions'

test('configCreateRequest', () => {
  expect(actions.configCreateRequest({ title: 'test' })).toEqual({
    type: actions.CONFIG_CREATE_REQUEST,
    data: { title: 'test' },
  })
})

test('configCreateSuccess', () => {
  expect(actions.configCreateSuccess({ id: 1, title: 'test' })).toEqual({
    type: actions.CONFIG_CREATE_SUCCESS,
    detail: { id: 1, title: 'test' },
  })
})

test('configCreateFailure', () => {
  expect(actions.configCreateFailure('error')).toEqual({
    type: actions.CONFIG_CREATE_FAILURE,
    error: 'error',
  })
})

test('configListReadRequest', () => {
  expect(actions.configListReadRequest({ fields: 'test' })).toEqual({
    type: actions.CONFIG_LIST_READ_REQUEST,
    params: { fields: 'test' },
  })
})

test('configListReadSuccess', () => {
  expect(actions.configListReadSuccess([1, 2, 3])).toEqual({
    type: actions.CONFIG_LIST_READ_SUCCESS,
    list: [1, 2, 3],
  })
})

test('configListReadFailure', () => {
  expect(actions.configListReadFailure('error')).toEqual({
    type: actions.CONFIG_LIST_READ_FAILURE,
    error: 'error',
  })
})
