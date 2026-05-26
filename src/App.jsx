import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import UserLayout from './components/layout/UserLayout'
import Home from './pages/Home'

function App() {
  

  return (
    <>
   <Routes>
    {/* home */}
    {/* product */}
    {/* cart */}
    <Route path='/' element={<UserLayout/>}> 
   <Route index element={<Home/>}/> 
    
     </Route>
    <Route> {/* admin */} </Route>
   </Routes>
    </>
  )
}

export default App
