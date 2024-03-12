import type { AppProps } from 'next/app';

import '../styles/globals.css';

import client from '../utilities/client';
import { ApolloProvider } from '@apollo/client';
import { NextUIProvider } from '@nextui-org/react';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </ApolloProvider>
  )
}

export default App;