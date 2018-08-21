import React, { Component } from 'react'
import { push } from 'react-router-redux'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromConfig } from 'store/selectors'
import { getRates } from 'services/helpers'
import { userSetAmount } from 'store/actions'

import { SellPage } from 'components'

const recyclingSampleData = [
  { Note: 5, Count: 0, Recycling: false, Ccy: 'USD' },
  { Note: 10, Count: 0, Recycling: false, Ccy: 'USD' },
  { Note: 10, Count: 0, Recycling: false, Ccy: 'USD' },
  { Note: 20, Count: 5, Recycling: true, Ccy: 'USD' },
  { Note: 100, Count: 10, Recycling: true, Ccy: 'USD' },
]

class SellPageContainer extends Component {

  static defaultPropTypes = {
    fiatCurrency: undefined,
    limit1: undefined,
    limit2: undefined,
    limit3: undefined,
    recycle: undefined,
    recycling: undefined,
    rates: undefined,
    markup: undefined,
  }

  static propTypes = {
    fiatCurrency: PropTypes.string,
    limit1: PropTypes.number,
    limit2: PropTypes.number,
    limit3: PropTypes.number,
    level: PropTypes.number,
    recycle: PropTypes.array,
    recycling: PropTypes.array,
    rates: PropTypes.object,
    markup: PropTypes.number,
    dispatch: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      amount: 0,
      inBitcoin: 0,
      page: 'sell',
    }
  }

  getCurrentLimit = (low, mid, high, level) => {
    switch (level) {
      case 1:
        return low
      case 2:
        return mid
      case 3:
        return high
      default:
        return low
    }
  }

  calcMaxAmount = (stocks) => {
    return stocks.reduce((a, b) => a + (Number(b.Note) * Number(b.Count)), 0) || 0
  }

  plusMinusAmount = (a, type) => {
    const { amount } = this.state
    const { rates, markup, fiatCurrency, recycling } = this.props
    const maxAmount = this.calcMaxAmount(recycling || [])
    const subTotalAMount = (type === 'plus') ? amount + a : amount - a
    const totalAmount = (subTotalAMount < 0) ? 0 : subTotalAMount
    if (totalAmount <= maxAmount && totalAmount >= 0) {
      const ratesArray = getRates(rates, markup / 100, fiatCurrency.split(',') || 'USD', 1) || []
      const ratesObj = ratesArray[0] || {}
      const bitCoinToSell = ((1 / ratesObj.BTC) * totalAmount).toFixed(7) * 1
      this.setState({ amount: totalAmount, inBitcoin: bitCoinToSell })
    }
  }

  gotoNext = () => {
    const { dispatch } = this.props
    const { amount } = this.state
    dispatch(userSetAmount(amount))
    dispatch(push('/send-btc'))
  }

  render() {
    const { amount, inBitcoin, page } = this.state
    const { level, limit1, limit2, limit3, recycle, recycling } = this.props
    const maxAmount = this.calcMaxAmount(recycling || [])
    const currentLimit = this.getCurrentLimit(limit1, limit2, limit3, level)
    return <SellPage page={page} gotoNext={this.gotoNext} plusMinusAmount={this.plusMinusAmount} currentLimit={currentLimit} recycle={recycle} maxAmount={maxAmount} amount={amount} inBitcoin={inBitcoin} />
  }
}

const mapStateToProps = (state = {}) => ({
  markup: fromConfig.getParam(state, 'Markup'),
  fiatCurrency: fromConfig.getParam(state, 'Fiatcurrency'),
  limit1: fromConfig.getParam(state, 'Limit1'),
  limit2: fromConfig.getParam(state, 'Limit2'),
  limit3: fromConfig.getParam(state, 'Limit3'),
  level: fromConfig.getParam(state, 'AML_KYC'),
  recycle: JSON.parse(fromConfig.getParam(state, 'Recycle')),
  recycling: recyclingSampleData,
  rates: state.rates,
})

export default connect(mapStateToProps)(SellPageContainer)
