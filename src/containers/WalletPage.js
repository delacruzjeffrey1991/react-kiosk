import React, { Component } from 'react'
import { WalletPage } from 'components'

class WalletPageContainer extends Component {
  state = {
    cameraRef: null,
  }

  handleCapture = () => {
    const imageSrc = this.state.cameraRef.getScreenshot()
    console.log('capture', imageSrc)
  }

  render() {
    return (
      <WalletPage
        cameraRef={this.state.cameraRef}
        handleCapture={this.handleCapture}
        {...this.props}
      />
    )
  }
}

export default WalletPageContainer