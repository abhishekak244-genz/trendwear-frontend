import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

function SearchBar() {

    const [searchItems, setSearchItems] = useState("")
    const [isOpen, setIsOpen] = useState(false)

    const handleSearchToggle = () => {
        setIsOpen(!isOpen)
    }
    const handleSearch = (e) =>{
        e.preventDefault();
        console.log('search items :',searchItems );
        setIsOpen('false')
        
    }

    return (
        <div
            className={`flex items-center justify-center transition-all duration-300 
            ${isOpen
                    ? "absolute top-0 left-0 w-full bg-white h-24 z-50"
                    : "w-auto"
                }`}
        >

            {
                isOpen ? (

                    <form onSubmit={handleSearch} className='relative flex items-center justify-center w-full'>

                        <div className='relative w-1/2'>
                                   
                            <input
                                type="text"
                                placeholder='Search'
                                value={searchItems}
                                onChange={(e) => setSearchItems(e.target.value)}
                                className='bg-gray-100 px-4 py-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-500'
                            />

                            {/* Search Icon */}
                            <button
                                type='submit'
                                className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-black'
                            >
                                <FaSearch className='h-5 w-5' />
                            </button>

                        </div>

                        {/* Close Button */}
                        <button
                            type='button'
                            onClick={handleSearchToggle}
                            className='absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-black'
                        >
                            <IoMdCloseCircle className='h-7 w-7' />
                        </button>

                    </form>

                ) : (

                    <button onClick={handleSearchToggle}>
                        <FaSearch className='h-6 w-6 text-gray-600 hover:text-black' />
                    </button>

                )
            }

        </div>
    )
}

export default SearchBar