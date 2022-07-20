import { Link, useNavigate } from "@tanstack/react-location";
import { Wrapper } from "../components";
import { Routes } from "../routes/routes";

function Page404() {
  return (
    <Wrapper full>
      <span>
        We are lost. <Link to={Routes.AVO_LIST}>Go to home</Link>
      </span>
    </Wrapper>
  );
}

export default Page404;
