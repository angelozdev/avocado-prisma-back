import { useNavigate } from "@tanstack/react-location";
import { Routes } from "../routes/routes";

function Page404() {
  const navigate = useNavigate();
  return (
    <div>
      <span>404</span>
      <button onClick={() => navigate({ to: Routes.AVO_LIST })}>
        Go to home
      </button>
    </div>
  );
}

export default Page404;
