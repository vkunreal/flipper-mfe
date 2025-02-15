import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import authRoutes from "mfe_auth/Router";

const routes = [
  {
    path: "/",
    element: <MainPage />,
  },
  ...authRoutes,
];

export const router = createBrowserRouter(routes);
