import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <footer className="border-t py-12 bg-white">

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">

                {/* Newsletter */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        Newsletter
                    </h3>

                    <p className="text-gray-500 mb-4 text-sm">
                        Be the first to hear about new products, exclusive events,
                        and online offers.
                    </p>

                    <p className='font-medium text-sm text-gray-700 mb-6'>
                        Sign up and get 10% off your first order.
                    </p>

                    {/* Form */}
                    <form className="flex">

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="p-3 w-full text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />

                        <button
                            className='bg-black text-white px-6 py-3 rounded-r-md hover:bg-gray-800 transition-all'
                        >
                            Subscribe
                        </button>

                    </form>
                </div>

                {/* Shop */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        Shop
                    </h3>

                    <ul className="space-y-3 text-sm text-gray-500">
                        <li><a href="#" className="hover:text-black">Men</a></li>
                        <li><a href="#" className="hover:text-black">Women</a></li>
                        <li><a href="#" className="hover:text-black">Topwear</a></li>
                        <li><a href="#" className="hover:text-black">Bottom Wear</a></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        Support
                    </h3>

                    <ul className="space-y-3 text-sm text-gray-500">
                        <li><a href="#" className="hover:text-black">Contact Us</a></li>
                        <li><a href="#" className="hover:text-black">FAQs</a></li>
                        <li><a href="#" className="hover:text-black">Shipping</a></li>
                        <li><a href="#" className="hover:text-black">Returns</a></li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        Follow Us
                    </h3>

                    <div className="flex space-x-4">

                        <a
                            href="#"
                            className="h-9 w-9 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800"
                        >
                            <FaFacebookF />
                        </a>

                        <a
                            href="#"
                            className="h-9 w-9 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="#"
                            className="h-9 w-9 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800"
                        >
                            <FaTwitter />
                        </a>

                    </div>
                </div>

            </div>

            {/* Bottom */}
            <div className="border-t mt-10 pt-6 text-center text-sm text-gray-500">
              &copy; 2026 trendwear. All rights reserved.
            </div>

        </footer>
    )
}

export default Footer