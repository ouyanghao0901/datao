import { createBrowserRouter } from "react-router-dom";

import Home from "../views/Home";
import NotFound from "../views/404";
import Edit from "../views/Edit";

// const Edit = lazy(() => import("../views/Edit"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Edit />,
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
