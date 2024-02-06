import React from 'react'

function Search() {
  return (
  
    <div className='border-solid border-4 p-3 m-5 rounded-xl bg-slate-200 shadow-xl justify-start items-start md:w-[70%] lg:w-[50%] xl:w-[50%] 2xl:w-[90%]'>
  <h1 className='text-4xl font-bold flex justify-center'>Search Job Here!</h1>

  <div className='pt-6 mt-6'>
    <div>
      <input
        className='py-1 px-1 rounded-md w-full md:w-[100%] p-6 font-bold text-2xl min-w-full max-w-4'
        placeholder="Enter Job Type"
      />
    </div>
    <br />

    <div className='relative '>
      <input
        type="text"
        placeholder="Enter Job Location"
        className='py-1 px-1 rounded-md w-full p-6 font-bold text-2xl'
      />
      <img
        src='/public/location-pin.png'
        alt='Location Pin'
        className='absolute top-1/2 right-4 transform -translate-y-1/2 h-6 w-6'
      />
    </div>
  </div>

  <br />

  <div className='flex items-center justify-center'>
    <button className='bg-black font-bold text-3xl text-white rounded-[5px] w-full md:w-[60%] lg:w-[50%] xl:w-[70%]'>SEARCH HERE!</button>
  </div>
</div>

  )
}

export default Search
