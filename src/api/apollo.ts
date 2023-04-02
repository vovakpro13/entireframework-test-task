import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://test-task.entireframework.com/cms/graphql",
  cache: new InMemoryCache(),
});

export default client;
