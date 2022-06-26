import { Route, Navigate } from "@tanstack/react-location";
import { AvoListPage, AvoDetailsPage } from "../pages";

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
    element: <div>404</div>,
  },
];

export default routes;
