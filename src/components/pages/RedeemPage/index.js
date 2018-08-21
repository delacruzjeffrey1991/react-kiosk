import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl } from 'react-intl'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Webcam from 'react-webcam'

const Videos = styled.div`
  width: 834px;
  display: flex;
  top: 280px ;
`

const ScanVideo = styled.video `
  width: 377px;
`

const LiveVideo = styled.div `
  flex: 1;
  border: 3px solid #768594;
  margin-left: 35px;
  height: 280px;
  overflow: hidden;
`
const RedeemPage = (props) => {
  const { messages } = props.intl
  const { handleCapture, cameraRef } = props
  return (
    <div>
      <div className="jumbo">
        <div className="jumbo-left" />
        <div className="jumbo-center">
          <div className="jumbo-title">{messages.scanVoucher}</div>
          <Videos>
            <div className="demo-video">
              <ScanVideo autoplay muted loop>
                <source src="../../video/coi-scan-wallet.mp4" type="video/mp4" />
              </ScanVideo>
            </div>
            <LiveVideo>
              <Webcam
                audio={false}
                height={350}
                ref={cameraRef}
                screenshotFormat="image/jpeg"
                width={350}
              />
              <button onClick={handleCapture}>Capture photo</button>
            </LiveVideo>
          </Videos>
        </div>
        <div className="jumbo-right" />
      </div>

      <div className="button-container">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="button cancel" id="cancel-operation">
            {messages.cancelOperation.split(' ')[0]}
            <span className="small-text">{messages.cancelOperation.split(' ')[1]}</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

RedeemPage.propTypes = {
  intl: PropTypes.object.isRequired,
  handleCapture: PropTypes.func,
  cameraRef: PropTypes.func,
}

export default injectIntl(RedeemPage)
