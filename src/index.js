import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, Redirect } from 'react-router'
import { BrowserRouter, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import Application from './Application'
import registerServiceWorker from './registerServiceWorker'
import './styles/main.css'
import routes from './routes'
import configureStore from './stores'
import { ME } from 'CONSTANTS'
import { firestoreInit } from 'api-services/firebase'

import { initApplication } from 'actions'

firestoreInit().then(() => {
  const initialState = {}
  const store = configureStore(initialState)
  store.dispatch(initApplication())

  const favLink = localStorage.getItem('favLink')
  const redirectTo = favLink ? favLink : ME

  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Application>
          <Switch>
            {routes.map(v => <Route {...v} key={v.name} />)}
            <Redirect from="/" to={redirectTo} />
          </Switch>
        </Application>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  )
})

registerServiceWorker()
