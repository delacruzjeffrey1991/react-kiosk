import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import { push } from 'react-router-redux'
import { HomePage } from 'components'

class HomePageContainer extends Component {
  static defaultPropTypes = {
    socket: undefined,
  }

  static propTypes = {
    socket: PropTypes.object,
    dispatch: PropTypes.func.isRequired,
  }

  // componentWillMount() {
  //   const { socket, dispatch } = this.props
  //   // if (socket === undefined || socket.disconnected) {
  //   //   dispatch(push('/loading'))
  //   // }
  // }

  render() {
    return <HomePage {...this.props} />
  }
}

export default connect()(HomePageContainer)
