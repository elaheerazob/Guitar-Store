import React from 'react';
import './Cart.css'
//select site show 
const Cart = (props) => {
    console.log(props);
    const {name,img} =props.show;
    
    
    return (
        <div className='card'>
             <div className='show'>
             <img src={img} alt="" />
              <p>Name:{name}</p>
             </div>
              
        </div>
    );
};

export default Cart;