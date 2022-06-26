import React from "react";
import {
  AvoItem,
  AvoList,
  AvoListPlaceholder,
  Pagination,
  Wrapper,
} from "../components";
import { useGetAvosQuery, OrderBy, OrderDirection } from "../generated/graphql";

const AVOS_PER_PAGE = 4;

function AvoListPage() {
  const [page, setPage] = React.useState(1);
  const { data = { GetAvos: [] }, isLoading } = useGetAvosQuery(
    {
      filter: {
        limit: AVOS_PER_PAGE,
        offset: (page - 1) * AVOS_PER_PAGE,
        orderBy: OrderBy.Price,
        orderDirection: OrderDirection.Desc,
      },
    },
    { staleTime: Infinity }
  );

  const hasNextPage = !(data.GetAvos.length < AVOS_PER_PAGE);

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
        <Pagination hasNextPage={hasNextPage} onPageChange={setPage} />
      </Wrapper>
    </main>
  );
}

export default AvoListPage;
