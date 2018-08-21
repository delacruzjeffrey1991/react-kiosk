export const initialState = {
  amount: 0,
}

export const getAmount = (state = initialState) => state.amount || initialState.amount
