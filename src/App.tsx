import { RouterProvider } from "react-router-dom";
import { FC } from "react";
import router from "./router";

const App: FC = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
