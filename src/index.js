import React from 'react'
import ReactDOM from 'react-dom'

import Routes from './routes'
import { BrowserRouter as Router } from 'react-router-dom'

import { ApolloProvider } from '@apollo/react-hooks'
import apolloClient from './utils/ApolloClient'

import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <Router>
        <Routes />
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
