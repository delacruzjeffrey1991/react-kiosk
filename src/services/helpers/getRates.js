import fx from 'money'

const getRates = (rates, markup, fiatCurrency, mode = 0) => {
  const ratesArray = []
  fx.rates = rates
  fx.base = 'USD'

  for (let q = 0; q < fiatCurrency.length; q += 1) {
    const rate = fx.convert(1, { to: fiatCurrency[q], from: 'BTC' })
    const withFee = ((rate) * (1 + markup)).toFixed(2)
    if (mode === 0) {
      ratesArray.push(`\u0E3F1 = ${withFee} ${fiatCurrency[q]}`)
    } else {
      ratesArray.push({ BTC: withFee, currency: fiatCurrency[q] })
    }
  }
  return ratesArray
}

export default getRates
