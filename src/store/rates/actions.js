export const RATES_GET = 'RATES_GET'

export const ratesGet = () => ({
  type: RATES_GET,
})

export const RATES_SET = 'RATES_SET'

export const ratesSet = payload => ({
  type: RATES_SET,
  payload,
})
