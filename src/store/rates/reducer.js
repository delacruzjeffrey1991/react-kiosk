import { initialState } from './selectors'
import { RATES_SET } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case RATES_SET:
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state
  }
}
