import React from 'react'
import {
    HiShoppingBag,
    HiOutlineGlobeAlt,
    HiOutlineCreditCard
} from "react-icons/hi";

function FeaturedSection() {

    return (

        <section className="py-16 px-4 bg-white">

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

                {/* Feature 1 */}
                <div className="flex flex-col items-center group">

                    <div className="p-4 rounded-full bg-gray-100 mb-4 transition duration-300 group-hover:bg-black">

                        <HiShoppingBag className="text-3xl transition duration-300 group-hover:text-white" />

                    </div>

                    <h4 className="tracking-tight font-semibold mb-2">
                        FREE INTERNATIONAL SHIPPING
                    </h4>

                    <p className="text-gray-600 text-sm">
                        On all orders over $100.00
                    </p>

                </div>

                {/* Feature 2 */}
                <div className="flex flex-col items-center group">

                    <div className="p-4 rounded-full bg-gray-100 mb-4 transition duration-300 group-hover:bg-black">

                        <HiOutlineGlobeAlt className="text-3xl transition duration-300 group-hover:text-white" />

                    </div>

                    <h4 className="tracking-tight font-semibold mb-2">
                        WORLDWIDE DELIVERY
                    </h4>

                    <p className="text-gray-600 text-sm">
                        Fast shipping to over 100 countries
                    </p>

                </div>

                {/* Feature 3 */}
                <div className="flex flex-col items-center group">

                    <div className="p-4 rounded-full bg-gray-100 mb-4 transition duration-300 group-hover:bg-black">

                        <HiOutlineCreditCard className="text-3xl transition duration-300 group-hover:text-white" />

                    </div>

                    <h4 className="tracking-tight font-semibold mb-2">
                        SECURE PAYMENT
                    </h4>

                    <p className="text-gray-600 text-sm">
                        100% secure payment protection
                    </p>

                </div>

            </div>

        </section>
    )
}

export default FeaturedSection