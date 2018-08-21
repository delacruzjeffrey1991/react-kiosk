import React, { Component } from 'react'
import { RedeemPage } from 'components'

class RedeemPageContainer extends Component {
  state = {
    cameraRef: null,
  }

  handleCapture = () => {
    // const imageSrc = this.state.cameraRef.getScreenshot()
  }

  render() {
    return (
      <RedeemPage
        cameraRef={this.state.cameraRef}
        handleCapture={this.handleCapture}
        {...this.props}
      />
    )
  }
}

export default RedeemPageContainer
