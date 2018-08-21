import { initialState } from './selectors'
import { CONFIG_SET } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case CONFIG_SET:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}
