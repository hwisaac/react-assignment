import React from "react";
import { Link, Outlet } from "react-router-dom";

function App() {
  const solsNum = 20;
  const arr = new Array(solsNum).fill(NaN).map((v, i) => i + 1);
  return (
    <div className='App'>
      <ul className={"navigation"}>
        {arr.map((el, index) => (
          <li key={index}>
            <Link to={`${index + 1}`.padStart(2, "0")}>
              {`${index + 1}`.padStart(2, "0")}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

export default App;
