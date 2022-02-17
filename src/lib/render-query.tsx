import { ApolloError, QueryResult } from '@apollo/client';
import { FC, ReactElement } from 'react';

export const renderer = <T extends QueryResult>(
  result: T,
  uis: {
    Loading: FC;
    Error: FC<{ error: ApolloError }>;
    Data: FC<{ data: NonNullable<T['data']> }>;
  }
): ReactElement => {
  return result.loading ? (
    <uis.Loading />
  ) : result.error ? (
    <uis.Error error={result.error} />
  ) : (
    <uis.Data data={result.data} />
  );
};
