import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Login from "./Components/Login/Login.jsx"
import MainJobs from "./Components/Jobs/MainJobs.jsx"
import Register from "./Components/Login/Register.jsx"
import CompanyLogin from './Components/Login/CompanyLogin.jsx'
import CompanyRegister from './Components/Login/CompanyRegister.jsx'
import StudentProfile from './Components/StudentProfile/StudentProfile.jsx'
import CompanyProfile from './Components/Profile/CompanyProfile/CompanyProfile.jsx'
import Hr from './Components/HrPanel/Hr.jsx'

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
      {
        path:"register",
        element:<Register></Register>
      },
      {
        path:"CompanyLogin",
        element:<CompanyLogin></CompanyLogin>
      },
      {
        path:"CompanyRegister",
        element:<CompanyRegister></CompanyRegister>
      },
      {
        path:"StudentProfile",
        element:<StudentProfile></StudentProfile>
      },
      {
        path:"AllJobs/CompanyProfile",
        element:<CompanyProfile></CompanyProfile>
      },
      {
        path:"Hr",
        element:<Hr></Hr>
      },{
        path:"user",
        element:<StudentProfile></StudentProfile>
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
