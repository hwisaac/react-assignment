import React from "react";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ul className={"navigation"}>
        <li>
          <Link to="01">01</Link>
        </li>
        <li>
          <Link to="02">02</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default App;
