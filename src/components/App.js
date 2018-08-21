import React from 'react'
import { Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import Helmet from 'react-helmet'
import routes from '../routes'

const App = () => {
  return (
    <div>
      <Helmet titleTemplate="ChainBytes">
        <title>ChainBytes</title>
        <meta name="description" content="ChainBytes" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:site_name" content="ChainBytes" />
        <meta property="og:image" content="https://arc.js.org/thumbnail.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="icon" href="icon.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Ubuntu:300,300i,400,400i,500,500i,700,700i" />
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/kiosk.css" />
      </Helmet>
      <Switch>
        {renderRoutes(routes)}
      </Switch>
    </div>
  )
}

export default App
