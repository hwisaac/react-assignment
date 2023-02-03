import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Homework01 from "./homework/01";
import Homework02 from "./homework/02";
import Homework03 from "./homework/03";
import Homework04 from "./homework/04";
import Homework05 from "./homework/05";
import Homework06 from "./homework/06";
import Homework07 from "./homework/07";
import Homework08 from "./homework/08";
import Homework09 from "./homework/09";
import Homework10 from "./homework/10";
import Homework11 from "./homework/11";
import Homework12 from "./homework/12";
import Homework13 from "./homework/13";
import Homework14 from "./homework/14";
import Homework15 from "./homework/15";
import Homework16 from "./homework/16";
import Homework17 from "./homework/17";
import Homework18 from "./homework/18";

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
  {
    path: "07",
    element: <Homework07 />,
  },
  {
    path: "08",
    element: <Homework08 />,
  },
  {
    path: "09",
    element: <Homework09 />,
  },
  {
    path: "10",
    element: <Homework10 />,
  },
  {
    path: "11",
    element: <Homework11 />,
  },
  {
    path: "12",
    element: <Homework12 />,
  },
  {
    path: "13",
    element: <Homework13 />,
  },
  {
    path: "14",
    element: <Homework14 />,
  },
  {
    path: "15",
    element: <Homework15 />,
  },
  {
    path: "16",
    element: <Homework16 />,
  },
  {
    path: "17",
    element: <Homework17 />,
  },
  {
    path: "18",
    element: <Homework18 />,
  },
]);

export default router;
