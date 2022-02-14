import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';

type Cache = Record<string, unknown>;
export type InitialState = Record<string, unknown>;

let apolloClient: ApolloClient<Cache>;

const createApolloClient = (): ApolloClient<Cache> => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: '', // database connection here
      credentials: 'same-origin',
      headers: {
        Authorization: '', // this may be a different format depending on the API
      },
    }),
    cache: new InMemoryCache({}),
  });
};

export const initializeApollo = (
  initialState: InitialState = {}
): ApolloClient<Cache> => {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    const existingCache = _apolloClient.extract();
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  if (typeof window === 'undefined') {
    return _apolloClient;
  }

  if (!apolloClient) {
    apolloClient = _apolloClient;
  }

  return _apolloClient;
};
