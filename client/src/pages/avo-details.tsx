import { Navigate, useMatch } from "@tanstack/react-location";
import { AvoDetails, Splash, Wrapper } from "../components";
import { useGetAvoByIdQuery } from "../generated/graphql";
import { graphqlClient } from "../lib";
import { __DEV__ } from "../utils/assertions";

function AvoDetailsPage() {
  const { params } = useMatch();
  const id = parseInt(params.id);
  if (isNaN(id)) {
    if (__DEV__) throw new Error("[AVO-LIST] Invalid id");
    return <Navigate to="/" />;
  }

  const { data, isLoading } = useGetAvoByIdQuery(graphqlClient, { id });

  if (isLoading) return <Splash />;

  return (
    <main>
      <Wrapper size="sm">
        {data?.GetAvoById && <AvoDetails {...data.GetAvoById} />}
      </Wrapper>
    </main>
  );
}

export default AvoDetailsPage;
