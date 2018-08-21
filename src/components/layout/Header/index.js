import React from 'react'
import { ChangeLanguageButton } from 'components'
import { ExchangeRate } from 'containers'

const Header = () => (
  <div className="header" >
    <div className="header-left" id="request" style={{ height: 80 }}>
      <ExchangeRate />
    </div>
    <div className="header-center" style={{ height: 80 }}><img alt="ChainBytes" src="/img/logos/ChainBytes-logo.png" />
    </div>
    <div className="header-right" style={{ height: 80 }} id="change">
      <ChangeLanguageButton />
    </div>
  </div>
)

export default Header
