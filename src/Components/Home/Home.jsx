import React from 'react'
import Search from './Search.jsx'
import HomePart from './HomePart.jsx'
import style from './Home.module.css'


function Home() {
  return (
    
 <div className={style.Main}>
  {/**JOB LINES COMPONENTS */}
  
  
      
        
   
         <Search></Search>
       
       
        

        <div className='flex     w-[75%] overflow-auto '>
            <HomePart></HomePart>
        </div>
  </div>

  )
}

export default Home
