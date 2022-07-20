import { Route, Navigate } from "@tanstack/react-location";
import { AvoListPage, AvoDetailsPage, Page404, LoginPage } from "../pages";

export enum Routes {
  AVO_LIST = "/",
  AVO_DETAILS = "/avos/:id",
  LOGIN = "/login",
}

const routes: Route[] = [
  {
    path: "/",
    element: <AvoListPage />,
  },
  {
    path: Routes.LOGIN,
    element: <LoginPage />,
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
