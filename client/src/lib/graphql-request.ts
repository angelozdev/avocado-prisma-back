import { GraphQLClient } from "graphql-request";

const token = localStorage.getItem("token");
const client = new GraphQLClient(import.meta.env.VITE_ENDPOINT, {
  headers: {
    "Content-Type": "application/json",
    "Allow-Control-Allow-Origin": "*",
    Authorization: token ? `Bearer ${token}` : "",
  },
});

export default client;
