import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
    ],
  },
]);

export default router;
