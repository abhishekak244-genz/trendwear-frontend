import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

function MyOrdersPage() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()
    useEffect(() => {
        // Simulate API Fetch
        setTimeout(() => {
            const mockOrders = [
                {
                    _id: "12345",
                    createdAt: new Date(),
                    shippingAddress: {
                        city: "Adoor",
                        country: "India"
                    },
                    orderItems: [
                        {
                            name: "Product 1",
                            image: "https://picsum.photos/500/500?random=1",
                        },
                    ],
                    totalPrice: 100,
                    isPaid: true,
                },

                {
                    _id: "34512",
                    createdAt: new Date(),

                    shippingAddress: {
                        city: "Kochi",
                        country: "India"
                    },

                    orderItems: [
                        {
                            name: "Product 2",
                            image: "https://picsum.photos/500/500?random=2",
                        },
                    ],

                    totalPrice: 250,

                    isPaid: false,
                },
            ];
            setOrders(mockOrders);
            setLoading(false);
        }, 1000);
    }, []);

    const handleRowClick = (orderId) =>{
      navigate(`/order/${orderId}`)
    }

    return (
        <div className="max-w-7xl mx-auto p-4 sm:p-6">
            <h2 className="text-2xl font-bold mb-6">
                My Orders
            </h2>
            {/* Loading */}
         {loading ? (

                <div className="text-center py-10 text-gray-500">
                    Loading orders...
                </div>

            ) : orders.length === 0 ? (

                /* No Orders */
                <div className="bg-white rounded-xl shadow-sm border p-10 text-center">

                    <h3 className="text-2xl font-semibold mb-3">
                        You have no orders
                    </h3>

                    <p className="text-gray-500 mb-6">
                        Looks like you haven't placed any orders yet.
                    </p>

                    <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
                        Start Shopping
                    </button>

                </div>

            ) : (
                 /* Orders Table */
                <div className="relative shadow-md sm:rounded-lg overflow-x-auto">
                    <table className="min-w-full text-left text-gray-500">
                        {/* Table Header */}
                        <thead className="bg-gray-100 text-xs uppercase text-gray-700">
                            <tr>
                                <th className="py-3 px-4">
                                    Image
                                </th>
                                <th className="py-3 px-4">
                                    Order ID
                                </th>
                                <th className="py-3 px-4">
                                    Created
                                </th>

                                <th className="py-3 px-4">
                                    Shipping Address
                                </th>

                                <th className="py-3 px-4">
                                    Items
                                </th>

                                <th className="py-3 px-4">
                                    Price
                                </th>

                                <th className="py-3 px-4">
                                    Status
                                </th>

                            </tr>

                        </thead>

                        {/* Table Body */}
                        <tbody>

                            {orders.map((order) => (

                                <tr
                                    key={order._id}
                                    onClick={() => handleRowClick(order._id)}
                                    className="border-b hover:bg-gray-50 transition"
                                >

                                    {/* Image */}
                                    <td className="py-4 px-4">

                                        <img
                                            src={order.orderItems[0]?.image}
                                            alt={order.orderItems[0]?.name}
                                            className="w-16 h-16 object-cover rounded"
                                        />

                                    </td>

                                    {/* Order ID */}
                                    <td className="py-4 px-4 font-medium text-gray-900">
                                        #{order._id}
                                    </td>

                                    {/* Created */}
                                    <td className="py-4 px-4">

                                        {new Date(
                                            order.createdAt
                                        ).toLocaleDateString()}

                                    </td>

                                    {/* Shipping */}
                                    <td className="py-4 px-4">

                                        {order.shippingAddress.city},{" "}
                                        {order.shippingAddress.country}

                                    </td>

                                    {/* Items */}
                                    <td className="py-4 px-4">

                                        {order.orderItems.length} item(s)

                                    </td>

                                    {/* Price */}
                                    <td className="py-4 px-4 font-semibold">

                                        ${order.totalPrice}

                                    </td>

                                    {/* Status */}
                                    <td className="py-4 px-4">

                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-medium
                                            
                                            ${order.isPaid
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-red-100 text-red-700"
                                                }`}
                                        >
                                            {order.isPaid
                                                ? "Paid"
                                                : "Pending"}
                                        </span>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            )}

        </div>
    )
}

export default MyOrdersPage