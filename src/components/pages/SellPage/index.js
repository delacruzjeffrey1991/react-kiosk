// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { injectIntl } from 'react-intl'
import { Link } from 'react-router-dom'

import ControlButtons from './ControlButtons'


const Video = styled.div`
  top: 220px;
  display: flex;

`
const AmountWithdraw = styled.div`
  flex: 1;
  margin-right: 20px;
  height: 282px;
  overflow: hidden;
  font-weight: 200;
  text-align: left;
  font-style: italic;
  font-size: 20px;
`

const ShowCurrency = styled.div `
  height: 90px;
  width: 500px;
  background-image: url("../../img/currency-field.png");
  background-size: 383px 103px;
  background-repeat: no-repeat;
  text-align: center;
  padding-top: 30px;
  color: #39424e;
  font-weight: 700;
  font-size: 40px;
`
const TitleText = styled.div `
  padding-left: 10px;
`

const ShowMax = styled.div `
  color: #39424e;
  font-weight: 500;
  font-size: 11px;
  position: relative;
  top: -29px;
  left: 20px;
`

const SellPage = (props) => {
  const { messages } = props.intl
  const { gotoNext, currentLimit, recycle, amount, inBitcoin, maxAmount, plusMinusAmount } = props
  const showSellButton = () => {
    return amount !== 0 ? (
      <div role="button" tabIndex={0} className="button" onClick={() => gotoNext('send')}>
        {messages.sellNow.split(' ')[0]}<span className="small-text">{messages.sellNow.split(' ')[1]}</span>
      </div>
    ) : ''
  }

  return (
    <div>
      <div className="jumbo">
        <div className="jumbo-left" />
        <div className="jumbo-center">
          <div className="jumbo-title">{messages.maxWithdraw} </div>
          <Video>
            <AmountWithdraw>
              <TitleText>
                {messages.ccyToWithdraw} <span style={{ paddingLeft: 10 }} >Current limit = {currentLimit}</span>
              </TitleText>
              <ShowCurrency>${amount}</ShowCurrency>
              <ShowMax>{messages.maxAvail}: <span >${maxAmount}</span></ShowMax>
              <TitleText style={{ paddingTop: 0 }}>{messages.bitcoinToSend}</TitleText>
              <ShowCurrency>Ƀ{inBitcoin}</ShowCurrency>
            </AmountWithdraw>

            <ControlButtons recycle={recycle} plusMinusAmount={plusMinusAmount} />

          </Video>
        </div>
        <div className="jumbo-right" />
      </div>
      <div className="button-container">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="button">
            {messages.cancelOrder.split(' ')[0]}
            <span className="small-text">{messages.cancelOrder.split(' ')[1]}</span>
          </div>
        </Link>
        {showSellButton()}
      </div>
    </div>
  )
}

SellPage.propTypes = {
  intl: PropTypes.object.isRequired,
  currentLimit: PropTypes.number.isRequired,
  recycle: PropTypes.array,
  amount: PropTypes.number,
  inBitcoin: PropTypes.number,
  maxAmount: PropTypes.number,
  plusMinusAmount: PropTypes.func,
  gotoNext: PropTypes.func,

}

export default injectIntl(SellPage)
