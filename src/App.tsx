import { RouterProvider } from "react-router-dom";
import { FC } from "react";
import { Button } from "antd";
import router from "./router";

const App: FC = () => {
  return (
    <RouterProvider router={router}>
      <Button>Button</Button>
    </RouterProvider>
  );
};

export default App;
