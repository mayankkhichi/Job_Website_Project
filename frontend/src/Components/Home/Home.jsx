import React from 'react'
import Search from './Search.jsx'
import HomePart from './HomePart.jsx'
import style from './Home.module.css'
import Slidesshow from './Slide/Slideshow.jsx'


function Home() {
  return (
    <>   
    <br/> 
        <Slidesshow></Slidesshow>
 <div className={style.Main}>
  {/**JOB LINES COMPONENTS */}
  
         
         <Search></Search>
     
        <div className='flex     w-[95%] overflow-auto '>
            <HomePart></HomePart>
        </div>
  </div>
  </>

  )
}

export default Home
