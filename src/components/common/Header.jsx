import React from 'react'
import Topbar from '../layout/Topbar'
import Navbar from './Navbar'

function Header() {
  return (
    <>
        <header className='border-b border-gray-300'>
            {/* topbar */}
            <Topbar/>
            {/* /navbar */}
            <Navbar/>
            {/* cart  */}
        </header>
    </>
  )
}

export default Header