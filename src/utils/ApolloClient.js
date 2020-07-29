// prettier-ignore
import { ApolloClient, InMemoryCache, ApolloLink } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('jwt');
  return {
    headers: {
      ...headers,
      authorization: token ? 'Bearer ' + localStorage.getItem('jwt') : '',
    },
  };
});

const link = ApolloLink.from([authLink, httpLink]);

const cache = new InMemoryCache();
cache.writeData({
  data: {
    jwt: localStorage.getItem('jwt'),
    //currentUser: localStorage.getItem('currentUser'),
  },
});

const apolloClient = new ApolloClient({
  link,
  cache,
});

export default apolloClient;
