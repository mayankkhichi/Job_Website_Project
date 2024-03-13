import React, { useEffect } from 'react'
import Search from './Search.jsx'
import HomePart from './HomePart.jsx'
import style from './Home.module.css'
import Slidesshow from './Slide/Slideshow.jsx'
import axios from 'axios'
import { useContext } from 'react'
import { AllFunction } from '../store/Store.jsx'





function Home() {
  axios.defaults.withCredentials = true;
  const { handleAuth ,userAuth} = useContext(AllFunction);
  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      axios.get("/").then((res) => {
        console.log(res.data);
        if (res.data.Status === "Success") {
          if (res.data.type === "user") {
            handleAuth("user", true)
          }
          else if (res.data.type === "hr") {
            handleAuth("hr", true);
            window.location.href = "/hr";
          }
        }
      });
    }
  },[]);
  return (
    <>   
    <br/> 
        <Slidesshow></Slidesshow>
 <div className={style.Main}>
  {/**JOB LINES COMPONENTS */}
  <div className="flex  flex-col lg:flex-row ">
  
         
         <Search></Search>
         <div className="pt-5">
           
           <h1 className={style.H1}>Here You Can </h1>
           <h2 className={style.H2}>Find The Job</h2>
          
           </div>
           </div>
     
        <div className='flex w-[95%] ml-[5%] overflow-auto '>
            <HomePart></HomePart>
        </div>
  </div>
  </>

  )
}

export default Home
