import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ratesGet } from 'store/actions'
import { fromConfig } from 'store/selectors'
import { ExchangeRate } from 'components'
import { getRates } from 'services/helpers'

class ExchangeRateContainer extends Component {
  static defaultPropTypes = {
    markup: undefined,
    fiatCurrency: undefined,
    rates: undefined,
  }

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    fiatCurrency: PropTypes.string,
    markup: PropTypes.number,
    rates: PropTypes.object,
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(ratesGet())
  }

  render() {
    const { rates, markup, fiatCurrency } = this.props
    // Do not render component if some configs are missing
    if (Object.keys(rates).length === 0 || !markup || !fiatCurrency) return null

    const ratesArray = getRates(rates, markup / 100, fiatCurrency.split(',') || 'USD')
    return <ExchangeRate rates={ratesArray} />
  }
}

const mapStateToProps = (state = {}) => ({
  markup: fromConfig.getParam(state, 'Markup'),
  fiatCurrency: fromConfig.getParam(state, 'Fiatcurrency'),
  rates: state.rates,
})

export default connect(mapStateToProps)(ExchangeRateContainer)
