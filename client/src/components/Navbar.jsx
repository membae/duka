import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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

        {/* Cart Icon (Visible on both Desktop and Mobile) */}
        <div className="flex items-center space-x-4">
          {/* Cart Icon */}
          <div className="relative">
            <a href="/cart" className="hover:text-gray-300">
              <FontAwesomeIcon icon={faCartShopping} className="text-xl" />
            </a>
          </div>

          {/* Mobile Menu Toggle (Visible only on Mobile) */}
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
