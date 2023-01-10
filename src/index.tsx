import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from "./App";
import Home from './Pages/Home';
import Products from './Pages/Products';


const router = createBrowserRouter([
  {path: '/', element: <App/>,
  children : [
  {index:true, path: '/', element:<Home/>},
  {path:'/products', element: <Products/>}
    ]
  },
])

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
