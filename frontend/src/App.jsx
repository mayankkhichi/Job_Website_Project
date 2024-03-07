import React from 'react'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Home from './Components/Home/Home.jsx'
import {Outlet} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
import { NavigationProvider } from "./Components/store/NavigationConext.jsx";
import "./App.css"
import axios from 'axios'
axios.defaults.baseURL = "http://localhost:4000";
function App() {
  return (
    <NavigationProvider>
      <Header />
      <Outlet />
      <Footer />
    </NavigationProvider>
  )
}

export default App
