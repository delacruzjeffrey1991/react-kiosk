export const initialState = {
}

export const getParam = (state = initialState, param) => state[param] || initialState[param]
