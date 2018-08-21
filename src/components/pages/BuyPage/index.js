// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { injectIntl } from 'react-intl'
import styled from 'styled-components'
import { Link } from 'react-router-dom'



class BuyPage extends Component {


  render(){
    const { messages } = this.props.intl
    return (
      <div>
        <div className="jumbo">
        <div className="jumbo-left" ></div>
        <div className="jumbo-center wide">
          <div className="jumbo-title"><span className="orange-b"></span> bitcoin ATM</div>
          <div className="jumbo-msg top"> {messages.selectBuyRange}</div>
          <BuyRangeButton intl={this.props.intl}/>
        </div>
        <div className="jumbo-right"></div>
        </div>


        <div className="button-container">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div className="button" id="go-back">
              {messages.goBack.split(' ')[0]}
              <span className="small-text">{messages.goBack.split(' ')[1]}</span>
            </div>
          </Link>
        </div>
      </div>  
    )
  }

}  

const BuyRangeButton = (props) => {
  const {messages} = props.intl
  return (
    <div>
      <div className="range-group">
        <div className="range-button" id="range-0">{messages.lessThan}<span className="range1"></span></div>
        <div className="range-button" id="range-1">{messages.from}<span className="range1"></span>{messages.to}<span className="range2"></span></div>
        <div className="range-button" id="range-2">{messages.above}<span className="range2"></span></div>
     </div>
    </div>   
  )
}


BuyPage.propTypes = {
  intl: PropTypes.object.isRequired
}

export default injectIntl(BuyPage)



