import { MakeGenerics, useNavigate, useSearch } from "@tanstack/react-location";
import React from "react";
import { useQueryClient } from "react-query";
import {
  AvoItem,
  AvoList,
  AvoListPlaceholder,
  Pagination,
  Wrapper,
} from "../components";
import { useGetAvosQuery, OrderBy, OrderDirection } from "../generated/graphql";
import { graphqlClient } from "../lib";

const AVOS_PER_PAGE = 4;
const MINUTE = 60 * 1000;
const defaultFilter = {
  limit: AVOS_PER_PAGE,
  offset: 0,
  orderBy: OrderBy.Price,
  orderDirection: OrderDirection.Desc,
};

type Params = MakeGenerics<{
  Search: {
    page: number;
  };
}>;

function AvoListPage() {
  const { page: pageFromParams } = useSearch<Params>();
  const navigate = useNavigate<Params>();
  const queryClient = useQueryClient();
  const [page, setPage] = React.useState(pageFromParams || 1);
  const { data = { GetAvos: [] }, isLoading } = useGetAvosQuery(
    graphqlClient,
    {
      filter: {
        ...defaultFilter,
        offset: (page - 1) * AVOS_PER_PAGE,
      },
    },
    { staleTime: MINUTE }
  );

  const hasNextPage = !(data.GetAvos.length < AVOS_PER_PAGE);

  React.useEffect(() => {
    const nextOffset = page * AVOS_PER_PAGE;

    const prefetchNextAvos = () => {
      const filter = { ...defaultFilter, offset: nextOffset };
      queryClient.prefetchQuery(useGetAvosQuery.getKey({ filter }), {
        queryFn: useGetAvosQuery.fetcher(graphqlClient, { filter }),
      });
    };

    prefetchNextAvos();
    navigate({ search: { page } });
  }, [page]);

  return (
    <main>
      <Wrapper>
        <h1>Avos</h1>

        {isLoading && <AvoListPlaceholder count={AVOS_PER_PAGE} />}
        <AvoList>
          {data.GetAvos.map((avo) => {
            if (!avo) return null;
            return <AvoItem key={avo.id} avo={avo} />;
          })}
        </AvoList>

        {!isLoading && !data.GetAvos.length && (
          <p>No avos found. Please try again later.</p>
        )}
        <Pagination
          hasNextPage={hasNextPage}
          page={page}
          onPageChange={setPage}
        />
      </Wrapper>
    </main>
  );
}

export default AvoListPage;
