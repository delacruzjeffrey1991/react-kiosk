// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl } from 'react-intl'

const SendBtcPage = (props) => {
  const { messages } = props.intl
  const { handleGotoDone } = props
  return (
    <div>
      <div className="jumbo">
        <div className="jumbo-left qr-code" />
        <div className="jumbo-center qr-code">
          <div className="jumbo-title">{messages.sendToQr}</div>
          <div id="qrcode" style={{ backgroundColor: 'white', paddingTop: 20, paddinBottom: 20, width: 300, margin: 'auto' }} >
            <img alt="qr code" src="http://qrcode.meetheed.com/images/qr_code_url.png" />
          </div>
          <div style={{ marginTop: 10 }} id="qr-code" />
        </div>
        <div className="jumbo-right qr-code" />
      </div>
      <div className="button-container">
        <div role="button" tabIndex={0} onClick={() => handleGotoDone()} className="button">
          {messages.gotCash}
        </div>
      </div>
    </div>
  )
}

SendBtcPage.propTypes = {
  intl: PropTypes.object.isRequired,
  handleGotoDone: PropTypes.func.isRequired,
}

export default injectIntl(SendBtcPage)
