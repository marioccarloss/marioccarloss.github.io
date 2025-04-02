import { ApolloClient, createHttpLink, DefaultOptions, ErrorPolicy, InMemoryCache, FetchPolicy } from "@apollo/client";

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache' as FetchPolicy,
    errorPolicy: 'ignore' as ErrorPolicy,
  },
  query: {
    fetchPolicy: 'no-cache' as FetchPolicy,
    errorPolicy: 'all' as ErrorPolicy,
  },
};

const cache = new InMemoryCache({
  resultCaching: false,
});

const link = createHttpLink({
  uri: `${process.env.REACT_APP_API_URL}`,
});

const client = new ApolloClient({
  link,
  cache,
  defaultOptions,
});

export default client;
