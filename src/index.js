/* eslint-disable no-underscore-dangle */
// https://github.com/diegohaz/arc/wiki/Example-app
import 'react-hot-loader/patch'
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider, updateIntl } from 'react-intl-redux'
import { ConnectedRouter, push } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import da from 'react-intl/locale-data/da'
import ja from 'react-intl/locale-data/ja'
import hu from 'react-intl/locale-data/hu'
import io from 'socket.io-client'

import configureStore from 'store/configure'
import api from 'services/api'
import SocketAPI from 'services/socketAPI'
import App from 'components/App'
import languages from 'languages'
import { socketUrl } from 'config'

addLocaleData([...en, ...da, ...ja, ...hu])

const socketApi = new SocketAPI()
const history = createHistory()
const store = configureStore({}, { api: api.create(), socketApi }, history)
const socket = io.connect(socketUrl)
store.dispatch(updateIntl({
  locale: 'en-US',
  messages: languages['en-US'],
}))

socket.on('connect', () => {
  store.dispatch(push('/'))
})

socket.on('disconnect', () => {
  store.dispatch({ type: 'RESET_STATE' })
  store.dispatch(updateIntl({
    locale: 'en-US',
    messages: languages['en-US'],
  }))
  store.dispatch(push('/loading'))
})

const renderApp = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
)

const root = document.getElementById('app')
render(renderApp(), root)

if (module.hot) {
  module.hot.accept('components/App', () => {
    require('components/App')
    render(renderApp(), root)
  })
}
