import React, { useState, useContext } from 'react';
import Navbar from '../Navbar';
import { ProductContext } from '../ProductContext';

function ProductCard() {
    const { products } = useContext(ProductContext);

    // State for search and filter
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    // Filter and search the products
    const filteredProducts = products.filter(product => {
        // Search by name, description, or category
        const matchesSearch = 
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase());

        // Filter by category if selected
        const matchesCategory = selectedCategory
            ? product.category === selectedCategory
            : true;

        return matchesSearch && matchesCategory;
    });

    // Handle search input change
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Handle filter input change
    const handleFilterChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    // Handle add to cart functionality
    const handleAddToCart = (product) => {
        console.log(`Added to cart: ${product.name}`);
        // Logic for adding the product to cart goes here
    };

    // Handle buy functionality
    const handleBuy = (product) => {
        console.log(`Buying: ${product.name}`);
        // Logic for initiating the purchase goes here
    };

    return (
        <div>
            <Navbar />

            {/* Search and filter in one line */}
            <div className="flex justify-between items-center p-4">
                {/* Search bar */}
                <input
                    type="text"
                    placeholder="Search products"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="p-2 w-80 border border-gray-300 rounded-lg"
                />

                {/* Category filter */}
                <select
                    value={selectedCategory}
                    onChange={handleFilterChange}
                    className="p-2 ml-4 border border-gray-300 rounded-lg"
                >
                    <option value="">All Categories</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Home Appliances">Home Appliances</option>
                    <option value="Toys">Toys</option>
                    <option value="Books">Books</option>
                </select>
            </div>

            {/* Product list */}
            <div className="flex flex-wrap justify-center gap-8 p-6">
                {filteredProducts.map(product => (
                    <div
                        key={product.id}
                        className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                            <p className="text-gray-700 mb-2">{product.description}</p>
                            <p className="text-lg font-semibold text-gray-900 mb-2">Price: ${product.price}</p>
                            <p className="text-sm text-gray-500">Category: {product.category}</p>
                        </div>
                        <div className="p-4 flex justify-between">
                            {/* Add to Cart button */}
                            <button
                                onClick={() => handleAddToCart(product)}
                                className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900"
                            >
                                Add to Cart
                            </button>

                            {/* Buy button */}
                            <button
                                onClick={() => handleBuy(product)}
                                className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900"
                            >
                                Buy
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductCard;