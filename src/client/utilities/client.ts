import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

console.log(`${process.env.NEXT_DOMAIN}/graphql`);

const client = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  link: createHttpLink({
    uri: `${process.env.NEXT_URL}/graphql`,
    credentials: 'same-origin',
    // headers: {
    //   cookie: req.header('Cookie'),
    // },
  }),
  cache: new InMemoryCache(),
});

export default client;
