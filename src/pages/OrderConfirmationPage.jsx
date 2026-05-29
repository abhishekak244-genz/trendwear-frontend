import React from 'react';

const checkout = {
  _id: "12323",
  createdAt: new Date(),
  checkoutItems: [
    {
      productId: "1",
      name: "Jacket",
      color: "black",
      size: "M",
      price: 150,
      quantity: 1,
      image: "https://picsum.photos/150?random=1",
    },
    {
      productId: "2",
      name: "Shirt",
      color: "black",
      size: "M",
      price: 154,
      quantity: 12,
      image: "https://picsum.photos/150?random=2",
    },
  ],
  shippingAddress: {
    address: "123 Fashion Street",
    city: "New York",
    country: "USA",
  },
};

function OrderConfirmationPage() {
  const calculateEstimatedDelivery = (createdAt) => {
    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 10);
    return orderDate.toLocaleDateString();
  };

  const totalAmount = checkout.checkoutItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">
        Thank You for Your Order!
      </h1>

      {checkout && (
        <div className="p-6 rounded-lg border shadow-md">
          {/* Order Info */}
          <div className="flex flex-col md:flex-row justify-between mb-10">
            <div>
              <h2 className="text-xl font-semibold">
                Order ID: {checkout._id}
              </h2>

              <p className="text-gray-500">
                Order Date:{" "}
                {new Date(checkout.createdAt).toLocaleDateString()}
              </p>
            </div>

            <p className="text-emerald-700 text-sm font-medium mt-4 md:mt-0">
              Estimated Delivery Date:{" "}
              {calculateEstimatedDelivery(checkout.createdAt)}
            </p>
          </div>

          {/* Products */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-4">Order Items</h3>

            {checkout.checkoutItems.map((item) => (
              <div
                key={item.productId}
                className="flex items-center mb-4 border-b pb-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md mr-4"
                />

                <div>
                  <h4 className="text-md font-semibold">{item.name}</h4>

                  <p className="text-sm text-gray-500">
                    {item.color} | {item.size}
                  </p>
                </div>

                <div className="ml-auto text-right">
                  <p className="text-md font-semibold">
                    ${item.price}
                  </p>

                  <p className="text-sm text-gray-500">
                    Qty: {item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Payment and Delivery Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t pt-6">
            <div>
              <h4 className="text-lg font-semibold mb-2">
                Payment Method
              </h4>
              <p className="text-gray-600">PayPal</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">
                Delivery Address
              </h4>

              <p className="text-gray-600">
                {checkout.shippingAddress.address}
              </p>

              <p className="text-gray-600">
                {checkout.shippingAddress.city},{" "}
                {checkout.shippingAddress.country}
              </p>
            </div>
          </div>

          {/* Total Amount */}
          <div className="border-t mt-6 pt-6 text-right">
            <h3 className="text-2xl font-bold">
              Total: ${totalAmount}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderConfirmationPage;