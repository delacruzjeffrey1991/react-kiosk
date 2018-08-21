import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Layout } from 'components'
import { configGet } from 'store/actions'

class LayoutContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(configGet())
  }

  render() {
    return <Layout {...this.props} />
  }
}

export default connect()(LayoutContainer)
