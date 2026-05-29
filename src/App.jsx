import './App.css'
import { Route, Routes } from 'react-router-dom'

import UserLayout from './components/layout/UserLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import CollectionPage from './pages/CollectionPage'
import ProductDetails from './components/poduct/ProductDetails'
import Checkout from './components/cart/Checkout'
import OrderConfirmationPage from './pages/OrderConfirmationPage'
import OrderDetailsPage from './pages/orderDetailsPage'
import MyOrdersPage from './pages/MyOrdersPage'
import AdminLayout from './components/admin/AdminLayout'
import AdminHomePage from './pages/AdminHomePage'
import UserManagement from './components/admin/UserManagement'
import ProductManagement from './components/admin/ProductManagement'
import EditProduct from './components/admin/EditProduct'
import OrderMangement from './components/admin/OrderMangement'

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
         <Route path='checkout' element={<Checkout />} />
         <Route path='order-confirmation' element={<OrderConfirmationPage />} />
         <Route path='order/:id' element={<OrderDetailsPage />} />
         <Route path='my-order' element={<MyOrdersPage />} />
        </Route>

        {/* Admin Routes */}
        <Route path='/admin' element={<AdminLayout/>}> 
         <Route index element={<AdminHomePage />} />
         <Route path='users' element={<UserManagement />} />
         <Route path='products' element={<ProductManagement />} />
       <Route path="products/:id/edit" element={<EditProduct />}/>
       <Route path="orders" element={<OrderMangement />}/>
        </Route>

      </Routes>
    </>
  )
}

export default App