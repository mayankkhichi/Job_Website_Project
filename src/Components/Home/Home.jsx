import React from 'react'
import Search from './Search.jsx'
import HomePart from './HomePart.jsx'


function Home() {
  return (
    
 <div className="flex flex-wrap flex-row  stricky">
  {/**JOB LINES COMPONENTS */}
  
  
      
        
       <div className='w-[30%] relative flex-wrap'>
         <Search></Search>
         </div>
         
        

        <div className='w-[65%]  relative  flex h-full p-5 overflow-auto flex-wrap'>
            <HomePart></HomePart>
        </div>
  </div>

  )
}

export default Home
