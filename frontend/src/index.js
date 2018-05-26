import React, { Fragment } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'

import * as apolloManager from './apolloManager'
import Home from './pages/Home/Home'
import styles from './index.css'

const rootReducer = () => ({})

const store = createStore(rootReducer, applyMiddleware(thunk))

const apolloClient = apolloManager.getClient()

render((
  <ApolloProvider client={apolloClient}>
    <Provider store={store}>
      <Router>
        <Fragment>
          <header className={styles.header}>
            <Link to="/">The Seed</Link>
          </header>
          <div className={styles.content}>
            <Route exact path="/" component={Home} />
          </div>
        </Fragment>
      </Router>
    </Provider>
  </ApolloProvider>
), document.getElementById('root'))
