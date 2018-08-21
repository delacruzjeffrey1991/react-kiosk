import React from 'react'
import PropTypes from 'prop-types'
import { renderRoutes } from 'react-router-config'
import { Header, Body, Footer } from 'components'

const Layout = ({ route }) => (
  <div className="screen">
    <Header />
    <Body>
      {renderRoutes(route.routes)}
    </Body>
    <Footer />
  </div>
)

Layout.propTypes = {
  route: PropTypes.object.isRequired,
}

export default Layout
