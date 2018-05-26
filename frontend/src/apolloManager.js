import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

export const getClient = () => new ApolloClient({
  link: new HttpLink({
    uri: '/api'
  }),
  cache: new InMemoryCache({
    dataIdFromObject: (object) => object.id,
    addTypename: true,
  }),
});
