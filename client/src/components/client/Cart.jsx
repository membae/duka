import React, { useContext } from 'react';
import { ProductContext } from '../ProductContext';

function Cart() {
  const { cart } = useContext(ProductContext); // Access the cart from the context

  // Check if the cart is empty
  if (cart.length === 0) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-semibold">Your Cart is Empty</h2>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>

      {/* Cart Items */}
      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-white shadow-md rounded-lg p-4"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-gray-800 mt-2">Price: ${item.price}</p>
              </div>
            </div>
            <div>
              <p className="font-semibold">Quantity: {item.quantity}</p>
              <p className="text-xl font-semibold text-gray-900">
                Total: ${item.price * item.quantity}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Total */}
      <div className="mt-8 flex justify-between items-center text-xl font-semibold">
        <span>Total: </span>
        <span>
          ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}
        </span>
      </div>

      {/* Checkout Button */}
      <div className="mt-4">
        <button className="w-full py-2 px-4 bg-blue-800 text-white rounded-lg hover:bg-blue-900">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
