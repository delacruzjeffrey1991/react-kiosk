import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { TapSound } from 'components'

const ButtonGroup = styled.div`
  flex: 1;
  display: flex;
  margin-left: 35px;
  height: 282px;
  font-weight: 200;
  text-align: center;
  font-style: italic;
  font-size: 20px;
  padding-top: 35px;
`

const LeftGroup = styled.div `
  width: 122px;
  flex: 1;
  text-align: right;
  padding-right: 15px;
`

const ControlButtons = (props) => {
  const { recycle, plusMinusAmount } = props

  return (
    <ButtonGroup>
      {recycle.map((recyc) => {
        return (
          <LeftGroup key={recyc.Note}>
            <TapSound onClick={() => plusMinusAmount(recyc.Note, 'plus')}>
              <button className="finger-button" style={{ width: 145 }} >+{recyc.Note}</button>
            </TapSound>
            <TapSound onClick={() => plusMinusAmount(recyc.Note, 'minus')}>
              <button className="finger-button" style={{ width: 145 }}>-{recyc.Note}</button>
            </TapSound>
          </LeftGroup>
        )
      })}
    </ButtonGroup>
  )
}

ControlButtons.propTypes = {
  recycle: PropTypes.array.isRequired,
  plusMinusAmount: PropTypes.func,
}

export default ControlButtons
