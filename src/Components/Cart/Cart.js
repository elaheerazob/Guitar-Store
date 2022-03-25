import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props);
    const {name} =props.show;
    
    
    return (
        <div className='card'>
             <h3>Order summary</h3>
              <p>Selected Items : {name}</p>
              
        </div>
    );
};

export default Cart;