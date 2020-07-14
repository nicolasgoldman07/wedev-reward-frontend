import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { resolvers, typeDefs } from './resolvers/resolvers';

import './index.css';

const cache = new InMemoryCache();
const apolloClient = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: 'http://localhost:3001/graphql',
    // prettier-ignore
    headers: { authorization: "Bearer " + localStorage.getItem('jwt') }
  }),
  typeDefs,
  resolvers,
});

cache.writeData({
  data: {
    jwt: localStorage.getItem('jwt'),
    currentUser: localStorage.getItem('currentUser'),
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <Router>
        <Routes />
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
