import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

import Home from "../views/Home";
import NotFound from "../views/404";

const Edit = lazy(() => import("../views/Edit"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/edit",
    element: <Edit />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

export default router;
