import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Homework01 from "./homework/01";
import Homework02 from "./homework/02";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: "01",
    element: <Homework01 />,
  },
  {
    path: "02",
    element: <Homework02 />,
  },
]);

export default router;
