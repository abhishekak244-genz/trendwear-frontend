import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PayPalButton from './PayPalButton';
const cart = {
  products: [
    {
      name: "Stylish Jacket",
      size: "M",
      color: "Black",
      price: 120,
      image: "https://picsum.photos/150?random=1",
    },
    {
      name: "Casual Sneakers",
      size: "42",
      color: "White",
      price: 75,
      image: "https://picsum.photos/150?random=2",
    },
  ],
  totalPrice: 195,
};
function Checkout() {
  const navigate = useNavigate();
  const [checkoutId, setCheckoutId] = useState(null)
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });
  const handleCreateCheckout = (e) => {
    e.preventDefault()
    setCheckoutId(123)
  }
  const handlePaymentSuccess = (details) => {
    console.log("payment success", details);
    navigate("/order-confirmation")

  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6">
      {/* Left Section */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl uppercase mb-6">Checkout</h2>
        <form onSubmit={handleCreateCheckout}>
          <h3 className="text-lg mb-4">Contact Details</h3>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value="user@example.com"
              className="w-full p-2 border rounded"
              disabled
            />
          </div>
          <h3 className="text-lg mb-4">Delivery</h3>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                value={shippingAddress.firstName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    firstName: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">last  Name</label>
              <input
                type="text"
                value={shippingAddress.lastName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    lastName: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              value={shippingAddress.address}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  address: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className='mb-4 grid grid-cols-2 gap-4'>
            <div>
              <label className="block text-gray-700">city</label>
              <input
                type="text"
                value={shippingAddress.city}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    city: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">postal code</label>
              <input
                type="text"
                value={shippingAddress.postalCode}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    postalCode: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">country</label>
            <input
              type="text"
              value={shippingAddress.country}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  country: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">phone number</label>
            <input
              type="tel"
              value={shippingAddress.phone}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  phone: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mt-6">
            {!checkoutId ? (
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded"
              >
                Continue to Payment
              </button>
            ) : (
              <div>
                <h3 className="text-lg mb-4">Pay with paypal</h3>
                <PayPalButton
                  amount={cart.totalPrice}
                  onSuccess={handlePaymentSuccess}
                  onError={(err) =>
                    alert("payment failed try again.")
                  }
                />
              </div>
            )}
          </div>
        </form>
      </div>

      {/* Right Section */}
      <div className="bg-gray-50 p-6 rounded-lg">

        <h3 className="text-xl font-semibold mb-4">
          Order Summary
        </h3>

        <div className="space-y-4">

          {cart.products.map((product, index) => (

            <div
              key={index}
              className="flex items-center gap-4 border-b pb-4"
            >

              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-20 object-cover rounded"
              />

              <div className="flex-1">

                <h4 className="font-medium">
                  {product.name}
                </h4>

                <p className="text-sm text-gray-500">
                  Size: {product.size}
                </p>

                <p className="text-sm text-gray-500">
                  Color: {product.color}
                </p>

              </div>

              <p className="font-medium">
                ${product.price?.toLocaleString()}
              </p>

            </div>

          ))}

        </div>

        <div className="mt-6 border-t pt-4 flex justify-between font-bold text-lg">

       
        </div>
        <div className='flex justify-between items-center text-lg'>
          <p>shipping</p>
          <p>free</p>
        </div>
          <div className='flex justify-between items-center text-lg mt-4 border-t pt-4'>
               <span>Total</span>

          <span>${cart.totalPrice?.toLocaleString()}</span>

          </div>
      </div>


    </div>
  )
}

export default Checkout