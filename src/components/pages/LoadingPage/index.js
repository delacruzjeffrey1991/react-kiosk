// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl } from 'react-intl'

const LoadingPage = () => (
  <div>
    <div className="jumbo">
      <div className="jumbo-left" />
      {/* <!--Show this if we do know which camera is facing forward--> */}
      <div className="jumbo-center" id="camera-known" style={{ display: 'block' }}>
        <div className="jumbo-title"><span className="orange-b" /> bitcoin ATM</div>
        <div className="jumbo-msg">Kiosk is currently in Maintenance mode please check back later</div>
      </div>
      <div className="jumbo-right" />
    </div>
  </div>
)


LoadingPage.propTypes = {
  intl: PropTypes.object.isRequired,
}

export default injectIntl(LoadingPage)
