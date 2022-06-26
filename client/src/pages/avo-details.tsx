import { Navigate, useMatch } from "@tanstack/react-location";
import { AvoDetails, Splash, Wrapper } from "../components";
import { useGetAvoByIdQuery } from "../generated/graphql";

function AvoDetailsPage() {
  const { params } = useMatch();
  const id = parseInt(params.id);
  if (isNaN(id)) return <Navigate to="/" />;

  const { data, isLoading } = useGetAvoByIdQuery(
    { id },
    { staleTime: Infinity }
  );

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
