import { QueryClient } from "react-query";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: 1000 * 60 * 60,
    },
  },
});

export default client;
