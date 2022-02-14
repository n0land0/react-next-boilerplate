import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { FC } from 'react';

import { ApolloProvider } from '../lib/apollo-client';

const App: FC<AppProps> = ({
  Component,
  pageProps: { initialApolloState, ...pageProps },
}: AppProps) => {
  return (
    <ApolloProvider initialState={initialApolloState || {}}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default App;
