import { initialState } from './selectors'
import { USER_SET_AMOUNT } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_SET_AMOUNT:
      return {
        ...state,
        amount: action.amount,
      }
    default:
      return state
  }
}
