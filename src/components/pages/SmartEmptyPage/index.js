// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl } from 'react-intl'

const SmartEmptyPage = () => {
  return (
    <div>
      <div className="jumbo">
        <div className="jumbo-left" />
        <div className="jumbo-center widest-est" style={{ flex: 25 }}>
          <div className="jumbo-title">
            <span className="orange-b" style={{ marginRight: '15px' }} />bitcoin ATM - Emptying Payout
          </div>
          <div id="non-switch" className="non-switch-empty-type jumbo-title" style={{ marginTop: '60px' }}>There is nothing to Empty from the ATM at this time</div>
          <div id="switch">
            <div className="switch-empty-type" style={{ display: 'inline-block' }}>
              <span className="smart-empty-text big" id="currentEmptyTypeText" />
              <span className="smart-empty-text">switch to </span>
              <div className="smart-empty-button" id="emptyTypeToggle">Leaving</div>
              <span className="smart-empty-text"> Notes in Payout</span>
            </div>
          </div>
          <div id="ccylist" style={{ display: 'none' }} />
          <div className="jumbo-msg" />
        </div>
        <div className="jumbo-right" />
      </div>
      <div className="button-container">
        <div className="switch-empty-type button" id="smartempty">Empty All Notes</div>
        <div className="button" id="cancelbutton">Back to Admin</div>
      </div>
    </div>
  )
}

SmartEmptyPage.propTypes = {
  intl: PropTypes.object.isRequired,
}

export default injectIntl(SmartEmptyPage)
