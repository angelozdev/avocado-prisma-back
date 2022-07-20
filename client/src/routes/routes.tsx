import { Route, Navigate } from "@tanstack/react-location";
import { AvoListPage, AvoDetailsPage, Page404 } from "../pages";

export enum Routes {
  AVO_LIST = "/",
  AVO_DETAILS = "/avos/:id",
}

const routes: Route[] = [
  {
    path: "/",
    element: <AvoListPage />,
  },
  {
    path: "avos",
    children: [
      {
        path: "/",
        element: <Navigate to="/" />,
      },
      {
        path: ":id",
        element: <AvoDetailsPage />,
      },
    ],
  },
  {
    element: <Page404 />,
  },
];

export default routes;
