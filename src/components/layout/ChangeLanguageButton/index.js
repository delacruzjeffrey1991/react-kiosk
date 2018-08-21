import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl } from 'react-intl'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'


const ChangeLanguageButton = ({ intl, location }) => {
  if (location.pathname === '/language') return null
  return (
    <Link to="/language" id="change-language" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'row' }}>
      <div style={{ flex: 2, marginLeft: 10 }}><img alt={intl.locale} src={`/img/flags/${intl.locale}-flag.png`} /></div>
      <div className="header-right-text" style={{ flex: 9, display: 'inline-block' }}>Change Language</div>
      {/* <div style={{ flex: 9, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      &lt;!&ndash;<div className="header-right-text" style={{ flex: 1 }}>Current Language: English</div>&ndash;&gt;
    </div> */}
    </Link>
  )
}

ChangeLanguageButton.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
}

export default injectIntl(withRouter(ChangeLanguageButton))
