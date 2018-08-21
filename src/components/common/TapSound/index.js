import React from 'react'
import PropTypes from 'prop-types'
import withTapSound from '../withTapSound'

const TapSound = ({ children, ...other }) => React.cloneElement(React.Children.only(children), other)

TapSound.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withTapSound(TapSound)
