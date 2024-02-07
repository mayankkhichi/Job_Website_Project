import React from 'react'

function Search() {
  return (
  
    <div className=" border-solid border-4 p-3 m-5 rounded-xl  bg-slate-200 shadow-xl md:h-[400px] lg:h-[300px] xl:h-[350px] md:w-1/2 lg:w-1/3 xl:w-1/4">


  <h1 className='text-4xl md:text-3xl lg:text-2xl xl:text-4xl font-bold flex justify-center '><h1>Search Job Here!</h1></h1>

  <div className='pt-6 mt-6'>
    <div>
      <input
        className='py-1 px-1 rounded-md w-full md:w-[100%] p-6 font-bold text-2xl min-w-full max-w-4'
        placeholder="Enter Job Type"
      />
    </div>
    <br />

    
      <input
        type="text"
        placeholder="Enter Job Location"
        className='py-1 px-1 rounded-md w-full p-6 font-bold text-2xl'
      />
  </div>

  <br />

  <div className=' items-center justify-center'>
    <button className='bg-black font-bold text-3xl text-white rounded-[5px] w-full '>SEARCH HERE!</button>
  </div>
</div>

  )
}

export default Search
