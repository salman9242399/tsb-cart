import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  

     
  return (
    
    <div className= ' complete '>
      <img className="small " src={product.image} alt={product.name} />
       
      
      <h3>{product.name}</h3>
      <div>Rs.{product.price}</div>
      
      <div className='atcbtn'>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  );
}
