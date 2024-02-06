import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Login from "./Components/Login/Login.jsx"
import MainJobs from "./Components/Jobs/MainJobs.jsx"

const router=createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    children:[
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:"AllJobs",
        element:<MainJobs></MainJobs>,
      },
      {
        path:"Login",
        element:<Login></Login>,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
