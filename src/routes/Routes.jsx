import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home";
import { AboutMe } from "../pages/AboutMe";
import { Cv } from "../pages/Cv";
import { Proyects } from "../pages/Proyects";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/aboutme",
        element: <AboutMe />,
      },
      {
        path: "/cv",
        element: <Cv />,
      },
      {
        path: "/proyects",
        element: <Proyects />,
      },
    ],
  },
]);
