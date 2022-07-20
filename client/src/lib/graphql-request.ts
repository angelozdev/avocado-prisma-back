import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient(import.meta.env.VITE_ENDPOINT, {
  headers: {
    "Content-Type": "application/json",
    "Allow-Control-Allow-Origin": "*",
  },
});

export default client;
