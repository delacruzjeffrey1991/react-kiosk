import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl } from 'react-intl'

const ExchangeRate = ({ intl, rates }) => {
  const { messages } = intl
  return (
    <div className="header-left-text" id="pricing">
      <div className="blue">{messages.live}</div>
      {rates.map(rate => <div key={rate}>{rate}</div>)}
    </div>
  )
}

ExchangeRate.propTypes = {
  intl: PropTypes.object.isRequired,
  rates: PropTypes.array.isRequired,
}

export default injectIntl(ExchangeRate)
