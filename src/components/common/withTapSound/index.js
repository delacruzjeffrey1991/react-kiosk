import React, { Component } from 'react'
import PropTypes from 'prop-types'

const withTapSound = (WrappedComponent) => {
  class WithTapSound extends Component {
    static propTypes = {
      onClick: PropTypes.func,
    }

    constructor(props) {
      super(props)
      // not to reinitialize on each click
      this.audio = new Audio('./audio/tap.mp3')
    }

    handleOnClick = () => {
      this.audio.play()
      if (this.props.onClick !== undefined) {
        this.props.onClick()
      }
    }

    render() {
      const { onClick, ...other } = this.props

      return <WrappedComponent onClick={this.handleOnClick} {...other} />
    }
  }

  WithTapSound.displayName = `WithSubscription(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`

  return WithTapSound
}

export default withTapSound
