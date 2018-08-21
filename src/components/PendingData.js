import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { Redirect, withRouter } from 'react-router-dom'
import { fromConfig } from 'store/selectors'

class PendingData extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
    atmActive: PropTypes.number,
  }

  static defaultprops = {
    atmActive: 0,
  }

  render() {
    const { atmActive, location, route } = this.props

    if (
      ((atmActive === 0 || atmActive === undefined) && location.pathname === '/loading') ||
      (atmActive === 1 && location.pathname !== '/loading') ||
      (atmActive === 2 && location.pathname === '/configure')
    ) {
      return renderRoutes(route.routes)
    } else if (
      atmActive === 2 &&
      location.pathname !== '/configure'
    ) {
      return (<Redirect to={{ pathname: '/configure', state: { from: location } }} />)
    } else if (
      atmActive === 1 &&
      location.pathname === '/loading'
    ) {
      return (<Redirect to={{ pathname: '/', state: { from: location } }} />)
    }

    return (<Redirect to={{ pathname: '/loading', state: { from: location } }} />)
  }
}

const mapStateToProps = state => ({
  atmActive: fromConfig.getParam(state, 'AtmActive'),
})

export default withRouter(connect(mapStateToProps)(PendingData))
