// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl } from 'react-intl'
import { Link } from 'react-router-dom'

const CashDispensePage = (props) => {
  const { messages } = props.intl
  return (
    <div>
      <div className="jumbo">
        <div className="jumbo-left" />
        <div className="jumbo-center">
          <div className="jumbo-title">{messages.dispensing}</div>
          <p id="wallet" />
        </div>
        <div className="jumbo-right" />
      </div>
      <div className="button-container">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="button cancel" id="got-cash">
            {messages.gotCash.split(' ')[0]}
            <span className="small-text">{messages.gotCash.split(' ')[1]}</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

CashDispensePage.propTypes = {
  intl: PropTypes.object.isRequired,
}

export default injectIntl(CashDispensePage)
