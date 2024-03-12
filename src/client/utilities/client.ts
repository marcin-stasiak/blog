import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  link: createHttpLink({
    uri: `${process.env.APP_URL || location.origin}/graphql`,
    credentials: 'same-origin',
    // headers: {
    //   cookie: req.header('Cookie'),
    // },
  }),
  cache: new InMemoryCache(),
});

export default client;
