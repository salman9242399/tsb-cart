import React from 'react';
import Product from './Product';

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    
    <>
      <h2>Products</h2>
    
      <div className ="main">
      
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      
      
      </div>
   </>
      
  );
}
