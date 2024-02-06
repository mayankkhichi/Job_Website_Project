import React from 'react'
import Box from './Box'

function HomePart() {
  return (
    <div className=' h-[400px] w-full' >
      <ul className='flex overflow-x-clip flex-wrap'>
      <li> <Box> </Box> </li>
      <li> <Box></Box></li>
      <li> <Box></Box></li>
      <li> <Box></Box></li>
      <li> <Box></Box></li>
      
      </ul>
      
    </div>
  )
}

export default HomePart
