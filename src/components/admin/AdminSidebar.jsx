import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBoxOpen, FaStore, FaUser } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa6";

function AdminSidebar() {
    const navigate = useNavigate()
   const handleLogout = () =>{
    navigate('/')
   }
  return (
    <div className="p-6">
      <div className="mb-6">
        <Link to="/admin" className="text-2xl font-medium">
          trendwear
        </Link>
      </div>

      <h2 className="text-xl font-medium mb-6 text-center">
        Admin Dashboard
      </h2>

      <nav className="flex flex-col space-y-2">
        {/* users */}
        <NavLink
          to="/admin/users"
          className={({ isActive }) => isActive ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
           : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"} >
            <FaUser />
          <span>Users</span>
        </NavLink>
        {/* products */}
         <NavLink
          to="/admin/products"
          className={({ isActive }) => isActive ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
           : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"} >
            <FaBoxOpen />
          <span>products</span>
        </NavLink>
        {/* ordres */}
         <NavLink
          to="/admin/orders"
          className={({ isActive }) => isActive ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
           : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"} >
            <FaClipboardList />
          <span>order</span>
        </NavLink>
        {/*  */}
         <NavLink
          to="/"
          className={({ isActive }) => isActive ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
           : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"} >
            <FaStore />
          <span>shop</span>
        </NavLink>
      </nav>
      <div className="mt-6">
        <button onClick={handleLogout} className="w-full bg-red-600 text-white py-2 px-4 rounded flex items-center
        justify-center space-x-2">logout</button>
      </div>
    </div>
  );
}

export default AdminSidebar;