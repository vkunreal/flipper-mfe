import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";

const MainPage = () => {
  return <h1>Main Page</h1>;
};

const AboutPage = () => {
  return <h1>About Page</h1>;
};

const router = createBrowserRouter([
  { path: "/home", element: <MainPage /> },
  { path: "/about", element: <AboutPage /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
