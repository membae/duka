import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';

function ProductCard() {
    const[products,setProducts]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/products")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

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
