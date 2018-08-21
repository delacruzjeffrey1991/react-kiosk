import React from 'react'
import PropTypes from 'prop-types'

const Body = ({ children }) => (
  <div className="body" style={{ width: '100%' }}>
    {children}
  </div>
)

Body.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Body
