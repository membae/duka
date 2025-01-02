import React, { createContext, useEffect, useState } from 'react';
export const ProductContext = createContext();

function ProductProvider({children}) {
    const[products,setProducts]=useState([])
    const[cart,setCart]=useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);
    const addToCart=(product)=>{
        setCart((prevCart)=>[...prevCart,product]);
    }
    return (
        <ProductContext.Provider value={{products,cart,setCart}}>
            {children}
        </ProductContext.Provider>
    );
}

export default ProductProvider;
