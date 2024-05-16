import React from 'react'

function Home() {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-5 p-10 mt-5'>
      <h1 className='text-3xl font-bold text-red-900 underline'>Home</h1>
      <p className=' w-96'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab veniam eveniet velit nostrum quae suscipit officiis ipsum qui. Autem architecto doloribus error minus temporibus quo.</p>
      <button className='bg-blue-600 rounded-md px-3 py-2 text-white font-semibold'>Explore</button>
    </div>
  )
}

export default Home