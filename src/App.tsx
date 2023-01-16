import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <ul className={'navigation'}>
        <li>
          <Link to="01">01</Link>
        </li>
        <li>
          <Link to="02">02</Link>
        </li>
        <li>
          <Link to="03">03</Link>
        </li>
        <li>
          <Link to="04">04</Link>
        </li>
        <li>
          <Link to='05'>05</Link>
        </li>
        <li>
          <Link to='06'>06</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default App;
