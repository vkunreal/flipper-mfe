import { createBrowserRouter } from "react-router-dom";
import { AuthPage } from "../pages/AuthPage";

const routes = [{ path: "/auth", element: <AuthPage /> }];

export const router = createBrowserRouter(routes);

export default routes;
