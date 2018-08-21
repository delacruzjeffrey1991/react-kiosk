// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl } from 'react-intl'
import { Link } from 'react-router-dom'

const HomePage = (props) => {
  const { messages } = props.intl
  return (
    <div>
      <div className="jumbo">
        <div className="jumbo-left" />
        <div className="jumbo-center" style={{ flex: 4 }}>
          <div className="jumbo-title"><span className="orange-b" /> bitcoin ATM</div>
          <div id="welcome-message" className="jumbo-msg" style={{ paddingTop: 40 }}>{messages.welcome} <br />{messages.howCanWeHelp}</div>
          <div id="customer-message" className="jumbo-msg" style={{ paddingTop: 40 }}>{messages.ifHaveCustCode}</div>
        </div>
        <div className="jumbo-right" />
      </div>
      <div className="button-container">
        <Link to="/sms" style={{ textDecoration: 'none' }}>
          <div className="button" id="buy">
             Buy<span className="small-text">bitcoin</span>
           </div>
        </Link>
        <Link to="/sell" style={{ textDecoration: 'none' }}>
          <div className="button" id="sell">
            Sell<span className="small-text">bitcoin</span>
          </div>
        </Link>
        <Link to="/redeem" style={{ textDecoration: 'none' }}>
          <div className="button" id="redeem">
            Redeem<span className="small-text">voucher</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

HomePage.propTypes = {
  intl: PropTypes.object.isRequired,
}

export default injectIntl(HomePage)
