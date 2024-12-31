import React, { useContext } from 'react';
import Navbar from '../Navbar';
import { ProductContext } from '../ProductContext';


function ProductCard() {
    const { products, loading, error } = useContext(ProductContext);

    if (loading) return <p>Loading products...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <Navbar />
            <div className="product-list">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <p>Category: {product.category}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductCard;
