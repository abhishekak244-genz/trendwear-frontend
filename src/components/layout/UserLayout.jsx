import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { Outlet } from 'react-router-dom'

function UserLayout() {
  return (
    <>
    {/* header */}
    <Header/>
    {/* main contents */}
    <main>
      <Outlet/>
    </main>
    {/* footer */}
    <Footer/>
    </>
  )
}

export default UserLayout