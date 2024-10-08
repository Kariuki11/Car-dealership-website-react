import React from 'react'
import Search from './Search'

function Hero() {
  return (
    <div>
      <div className='flex flex-col items-center p-10 py-20 gap-6 h-[650px] w-full bg-[#eef0fc]'>
        <h2 className='text-lg'>Find Cars Near For Sale And Rent Near You!</h2>
        <h2 className='text-[60px] font-bold'>Find Your Dream Car</h2>
        <Search />
        <img src='car-marketplace/src/assets/tesla.png' />
      </div>

      <img src="car-marketplace/src/assets/tesla.png" alt="" />
    </div>
  )
}

export default Hero