export const CONFIG_GET = 'CONFIG_GET'

export const configGet = () => ({
  type: CONFIG_GET,
})

export const CONFIG_SET = 'CONFIG_SET'

export const configSet = payload => ({
  type: CONFIG_SET,
  payload,
})
