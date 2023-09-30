import React from 'react'
import ReactDOM from 'react-dom/client'
 
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} 
from "react-router-dom";
import Root from './components/Root.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Register/>
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
