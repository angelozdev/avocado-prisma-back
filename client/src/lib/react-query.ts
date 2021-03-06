import { QueryClient } from "react-query";
import { createWebStoragePersistor } from "react-query/createWebStoragePersistor-experimental";
import { persistQueryClient } from "react-query/persistQueryClient-experimental";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: 1000 * 60 * 60,
    },
  },
});

// const persistor = createWebStoragePersistor({ storage: window.sessionStorage });

// persistQueryClient({
//   queryClient: client,
//   persistor,
//   maxAge: 1000 * 60 * 60, // 1 hour
// });

export default client;
