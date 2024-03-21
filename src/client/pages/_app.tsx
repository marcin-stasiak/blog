import type { AppProps } from 'next/app';

import '../styles/globals.css';

import client from '../utilities/client';
import { ApolloProvider } from '@apollo/client';
import { NextUIProvider } from '@nextui-org/react';
import {useRouter} from 'next/navigation';
import Layout from '../components/layout';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  return (
    <ApolloProvider client={client}>
      <NextUIProvider className="flex flex-col justify-between min-h-screen" navigate={router.push}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    </ApolloProvider>
  )
}

export default App;