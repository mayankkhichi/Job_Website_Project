import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Login from "./Components/LoginRegister/Login.jsx"
import MainJobs from "./Components/Jobs/MainJobs.jsx"
import Register from "./Components/LoginRegister/Register.jsx"
import CompanyLogin from './Components/LoginRegister/CompanyLogin.jsx'
import CompanyRegister from './Components/LoginRegister/CompanyRegister.jsx'
import StudentProfile from './Components/UserPanel/StudentProfile.jsx'
import Hr from './Components/HrPanel/Hr.jsx'
import JobProfile from './Components/Jobs/JobDetails/JobProfile.jsx'

const rout=createBrowserRouter([
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
        path:"/AllJobs/apply",
        element:<JobProfile></JobProfile>
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
    <RouterProvider router={rout}></RouterProvider>
  </React.StrictMode>,
)
