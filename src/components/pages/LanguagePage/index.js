import React from 'react'
import PropTypes from 'prop-types'

const LanguagePage = ({ onLanguageChangeClick }) => (
  <div>
    <div className="jumbo">
      <div className="jumbo-left" />
      <div className="jumbo-center">
        <div className="jumbo-title">Select your language</div>
        <div className="jumbo-msg" style={{ paddingTop: 0 }}>
          <div className="range-group">
            <div className="range-button" id="da-DK" onClick={() => onLanguageChangeClick('da-DK')} role="button" tabIndex="0">Danish</div>
            <div className="range-button" id="en-US" onClick={() => onLanguageChangeClick('en-US')} role="button" tabIndex="0">English (US)</div>
            <div className="range-button" id="hu-HU" onClick={() => onLanguageChangeClick('hu-HU')} role="button" tabIndex="0">Hungarian</div>
            <div className="range-button" id="ja-JP" onClick={() => onLanguageChangeClick('ja-JP')} role="button" tabIndex="0">Japanese</div>
          </div>
        </div>
      </div>
      <div className="jumbo-right" />
    </div>

    <div className="footer">
      <div className="info">For support, please call: 1-415-466-2945 or  send email to: support@chainbytes.com</div>
    </div>
  </div>
)

LanguagePage.propTypes = {
  onLanguageChangeClick: PropTypes.func.isRequired,
}

export default LanguagePage
