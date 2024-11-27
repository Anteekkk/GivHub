import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App page="Home"/>
  },
  {
    path:"/login",
    element:<App page = "login" />
  },
  {
    path:"/dash",
    element:<App page="dash"/>
  },
  {
    path:"/register",
    element:<App page="register"/>
  },
  {
    path:"/profile",
    element:<App page="profile"/>
  }
],{future: {
  v7_skipActionErrorRevalidation: true, // Add the future flag here
},
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
