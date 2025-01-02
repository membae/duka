import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { ProductContext } from './ProductContext';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useContext(ProductContext); // Access the cart from context

  return (
    <nav className="bg-black text-white shadow-md relative">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-xl font-bold">
          <a href="#">MyLogo</a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="/products" className="hover:text-gray-300">Products</a>
          <a href="#" className="hover:text-gray-300">Services</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </div>

        {/* Cart Icon with Count */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <a href="/cart" className="hover:text-gray-300 flex items-center">
              <FontAwesomeIcon icon={faCartShopping} className="text-xl" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-black text-white shadow-md mt-8 z-20">
          <a href="/" className="block py-2 px-4 hover:bg-gray-800">Home</a>
          <a href="/products" className="block py-2 px-4 hover:bg-gray-800">Products</a>
          <a href="#" className="block py-2 px-4 hover:bg-gray-800">Services</a>
          <a href="#" className="block py-2 px-4 hover:bg-gray-800">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
