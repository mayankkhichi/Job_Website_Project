import React from 'react'
import Box from './Box'





function HomePart() {
  const index=1;
  return (
    
    <div className=' h-[400px]' >
      <ul className='flex  flex-wrap '>
      <li> <Box type="FRESHER" index={index}> </Box> </li>
      <li> <Box type="EXPERIENCE" index={index+1}></Box></li>
      <li> <Box type="WEB DEVELOPER" index={index+2}></Box></li>
      <li> <Box type="POST GRADUATION" index={index+3}></Box></li>
      
      
      </ul>
      
    </div>
  )
}

export default HomePart
