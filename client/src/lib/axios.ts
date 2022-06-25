import axios from "axios";
import type { QueryFunction } from "react-query";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function graphqlFetcher<TData, TVariables>(
  query: string,
  variables?: TVariables
) {
  const queryFunction: QueryFunction<TData, [string, TVariables]> = async ({
    signal,
  }) => {
    const { data } = await axios.post<{ data: TData }>(
      import.meta.env.VITE_ENDPOINT,
      { query, variables },
      {
        signal,
        headers: {
          "Content-Type": "application/json",
          "Allow-Control-Allow-Origin": "*",
        },
      }
    );
    await sleep(1000);
    return data.data;
  };

  return queryFunction;
}
