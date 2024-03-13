import React from 'react'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import {Outlet} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
import { NavigationProvider } from "./Components/store/NavigationConext.jsx";
import "./App.css"
import axios from 'axios'
import FunctionProvider from './Components/store/Store.jsx'
axios.defaults.baseURL = "http://localhost:4000";
function App() {
  return (
    <FunctionProvider>
      <Header/>
      <Outlet/>
      <Footer/>
    </FunctionProvider>
  )
}

export default App
