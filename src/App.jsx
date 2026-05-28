import './App.css'
import { Route, Routes } from 'react-router-dom'

import UserLayout from './components/layout/UserLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import CollectionPage from './pages/CollectionPage'
import ProductDetails from './components/poduct/ProductDetails'

function App() {

  return (
    <>
      <Routes>

        <Route path='/' element={<UserLayout />}>

          <Route index element={<Home />} />

          <Route path='login' element={<Login/>} />
          <Route path='register' element={<Register/>} />
          <Route path='profile' element={<Profile/>} />
         <Route path='collections/:collection' element={<CollectionPage />} />
         <Route path='product/:id' element={<ProductDetails />} />

          


        </Route>

        {/* Admin Routes */}
        <Route>

        </Route>

      </Routes>
    </>
  )
}

export default App