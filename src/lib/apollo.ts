import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4rqoiy41grk01yy4da1bogb/master',
  cache: new InMemoryCache()
})