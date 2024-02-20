import React from 'react'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Home from './Components/Home/Home.jsx'
import {Outlet} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
import "./App.css"
function App() {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
