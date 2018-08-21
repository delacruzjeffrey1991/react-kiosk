// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl } from 'react-intl'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Row , Col } from 'react-bootstrap'


const Screen = styled.div `
  width: 1280px;
  height: 1024px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`


const SmsPage = (props) => {
  const { messages } = props.intl
  return (
    <Screen>
      <div className="body container">
        <Row style={{ height:'30px',marginTop:'20px',display:'flex' }}>
          <div className="sms-left-top">&nbsp;</div>
          <div className="sms-center-top jumbo-title" style={{top:'0',flex:'5'}}>
                {messages.enterSms}
            </div>
          <div className="sms-right-top">&nbsp;</div>
        </Row>

        <Row style={{display:'flex'}}>
         <Col md={7} className="sms-left-bottom" style={{flex:'3',display:'flex',flexDirection: 'column'}}>
                <div style={{flex:'12'}}>
                    <div className="number-entry" id="sms-code">
                        <div className="title-text">{messages.smsNumberPad}</div>
                        <div style={{display: 'inline-block'}}>
                            <select style={{height:'40px',marginLeft: '10px',fontSize: '20px',backgroundSize: '150px 50px' ,fontSize: '30px' , lineHeight: '45px'}} id="countryCodes"></select>
                        </div>
                        <input className="show-currency" style={{display: 'inline-block',width:'250px'}} id="sms-number"/>
                    </div>

                    <div className="number-entry" id="access-code-text" style={{marginTop: '50px',display: 'none'}}>
                        <div className="title-text" id="second">{messages.codeReceived}</div>
                        <input className="show-currency" id="sms-verification" style={{marginLeft: '10px',width:'200px'}}/>
                    </div>
                    <div id="errorMessage" style={{marginTop: '30px',color:'red'}}></div>
                </div>
                <div className="smart-empty-button" style={{flex:'1'}} id="clear-all">{messages.clearAll.split(" ")[0]}<span
                        className="small-text">{messages.clearAll.split(" ")[1]}</span></div>
          </Col>

          <Col md={5} className="sms-right-bottom" style={{flex:'2'}}>
                <div className="container" style={{margin: '14px 0 -12px 40px',display: 'inline-block'}} >
                    <Row>
                        <Col md={4}> <input type="button" data-tag="1" value="1" className="phone-pad-button"/> </Col> 
                        <Col md={4}><input type="button" data-tag="2" value="2" className="phone-pad-button"/></Col>
                        <Col md={4}><input type="button" data-tag="3" value="3" className="phone-pad-button"/></Col>
                    </Row>
                    <Row>
                        <Col md={4}><input type="button" data-tag="4" value="4" className="phone-pad-button"/></Col> 
                        <Col md={4}><input type="button" data-tag="5" value="5" className="phone-pad-button"/></Col> 
                        <Col md={4}><input type="button" data-tag="6" value="6" className="phone-pad-button"/></Col> 
                    </Row>
                    <Row>
                       <Col md={4}> <input type="button" data-tag="7" value="7" className="phone-pad-button"/></Col> 
                       <Col md={4}> <input type="button" data-tag="8" value="8" className="phone-pad-button"/></Col> 
                       <Col md={4}> <input type="button" data-tag="9" value="9" className="phone-pad-button"/></Col> 
                    </Row>
                    <Row>
                        <Col md={4}><input type="button" value="+" data-tag="+" id="plus-button" className="phone-pad-button"/></Col>
                        <Col md={4}><input type="button" data-tag="0" value="0" className="phone-pad-button"/></Col>
                    </Row>
                    <Row style={{display: 'flex'}}>
                        <Col md={6}><input type="button" data-tag="←" value="←" className="phone-pad-button wide-button"/></Col>
                       <Col md={6}> <input type="button" data-tag="SEND" value={messages.send} className="phone-pad-button wide-button send-background"/></Col>
                    </Row>
                </div>
            </Col>
        </Row>



      </div>
    </Screen>
  )
}

SmsPage.propTypes = {
  intl: PropTypes.object.isRequired,
}

export default injectIntl(SmsPage)
