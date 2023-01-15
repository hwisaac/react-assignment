import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Homework01 from "./homework/01";
import Homework02 from "./homework/02";
import Homework03 from "./homework/03";
import Homework04 from "./homework/04";
import Homework05 from "./homework/05";
import Homework06 from "./homework/06";

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
  {
    path: "03",
    element: <Homework03 />,
  },
  {
    path: "04",
    element: <Homework04 />,
  },
  {
    path: "05",
    element: <Homework05 />,
  },
  {
    path: "06",
    element: <Homework06 />,
  },
]);

export default router;
