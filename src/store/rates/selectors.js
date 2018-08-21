export const initialState = {
  // token: null,
}

// export const getToken = (state = initialState) => state.token || initialState.token
export const getParam = (state = initialState, param) => state[param] || initialState[param]
