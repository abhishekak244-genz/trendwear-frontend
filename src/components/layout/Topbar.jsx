import React from 'react'
import { FaFacebook, FaTwitch } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";

function Topbar() {
  return (
    <div className='bg-trend-red text-white py-2'>
      <div className='container mx-auto flex items-center justify-between'>

        {/* Social Icons */}
        <div className='hidden md:flex items-center space-x-2'>
          <a href="#" className='hover:opacity-80'>
            <CiInstagram className='h-7 w-7 rounded-full bg-white text-trend-red p-1' />
          </a>

          <a href="#" className='hover:opacity-80'>
            <FaTwitch className='h-7 w-7 rounded-full bg-white text-trend-red p-1.5' />
          </a>

          <a href="#" className='hover:opacity-80'>
            <FaFacebook className='h-7 w-7 rounded-full bg-white text-trend-red p-1.5' />
          </a>
        </div>

        {/* Moving Text */}
        <div className='overflow-hidden whitespace-nowrap flex-1 text-center'>
          <p className='inline-block animate-marquee text-sm font-medium'>
            Premium quality built for the global explorer.
          </p>
        </div>

        <div className='w-20 hidden md:block'></div>

      </div>
    </div>
  )
}

export default Topbar