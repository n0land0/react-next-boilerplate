import '../styles/globals.css';

import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { FC } from 'react';

import { ApolloProvider } from '../lib/apollo-client';

const App: FC<AppProps> = ({
  Component,
  pageProps: { initialApolloState, ...pageProps },
}: AppProps) => {
  return (
    <ChakraProvider>
      <ApolloProvider initialState={initialApolloState || {}}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ChakraProvider>
  );
};

export default App;
