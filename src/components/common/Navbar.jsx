import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import { FaShoppingBag, FaBars } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

import SearchBar from './SearchBar';
import CartDrawer from '../layout/CartDrawer';

function Navbar() {

    const [drawerOpen, setDrawerOpen] = useState(false)
    const [navDrawerOpen, setNavDrawerOpen] = useState(false)

    // Mobile Navigation Toggle
    const toggleNavDrawer = () => {
        setNavDrawerOpen(!navDrawerOpen)
    }

    // Cart Drawer Toggle
    const toggleCartDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }

    return (
        <>
            <nav className='container mx-auto flex items-center justify-between py-4 px-6'>

                {/* Logo */}
                <div>
                    <Link
                        to='/'
                        className='text-3xl font-bold text-black'
                    >
                        trendwear
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8">

                    <Link
                        to='#'
                        className='text-gray-700 hover:text-black text-sm font-medium uppercase'
                    >
                        Men
                    </Link>

                    <Link
                        to='#'
                        className='text-gray-700 hover:text-black text-sm font-medium uppercase'
                    >
                        Women
                    </Link>

                    <Link
                        to='#'
                        className='text-gray-700 hover:text-black text-sm font-medium uppercase'
                    >
                        Topwear
                    </Link>

                    <Link
                        to='#'
                        className='text-gray-700 hover:text-black text-sm font-medium uppercase'
                    >
                        Bottom Wear
                    </Link>

                </div>

                {/* Right Icons */}
                <div className='flex items-center space-x-5'>

                    {/* Profile */}
                    <Link to='/profile' className='hover:text-black'>
                        <CgProfile className='h-7 w-7 text-gray-600' />
                    </Link>

                    {/* Cart */}
                    <button
                        onClick={toggleCartDrawer}
                        className='relative hover:text-black'
                    >

                        <FaShoppingBag className='h-6 w-6 text-gray-600' />

                        <span className='absolute -top-2 -right-3 bg-trend-red text-white text-[10px] rounded-full min-w-4.5 h-4.5 flex items-center justify-center'>
                            4
                        </span>

                    </button>

                    {/* Search */}
                    <div className='overflow-hidden'>
                        <SearchBar />
                    </div>

                    {/* Mobile Menu */}
                    <button
                        onClick={toggleNavDrawer}
                        className='md:hidden'
                    >
                        <FaBars className='h-6 w-6 text-gray-600' />
                    </button>

                </div>

            </nav>

            {/* Cart Drawer */}
            <CartDrawer
                drawerOpen={drawerOpen}
                toogleCartDrawer={toggleCartDrawer}
            />

            {/* Mobile Navigation Drawer */}
            <div
                className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50
                ${navDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}
            >

                {/* Close Button */}
                <div className="flex justify-end p-4">

                    <button onClick={toggleNavDrawer}>
                        <IoMdCloseCircle className="h-7 w-7 text-gray-600 hover:text-black" />
                    </button>

                </div>

                {/* Mobile Links */}
                <div className='flex flex-col space-y-6 px-6 py-4'>

                    <Link
                        to="#"
                        onClick={toggleNavDrawer}
                        className='text-gray-700 hover:text-black text-lg font-medium uppercase'
                    >
                        Men
                    </Link>

                    <Link
                        to="#"
                        onClick={toggleNavDrawer}
                        className='text-gray-700 hover:text-black text-lg font-medium uppercase'
                    >
                        Women
                    </Link>

                    <Link
                        to="#"
                        onClick={toggleNavDrawer}
                        className='text-gray-700 hover:text-black text-lg font-medium uppercase'
                    >
                        Topwear
                    </Link>

                    <Link
                        to="#"
                        onClick={toggleNavDrawer}
                        className='text-gray-700 hover:text-black text-lg font-medium uppercase'
                    >
                        Bottom Wear
                    </Link>

                </div>

            </div>
        </>
    )
}

export default Navbar