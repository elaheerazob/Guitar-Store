import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props);
    const {name,img,price,seller,ratings} =props.product

   
    return (
            <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p>Price :{price}</p>
            <p><small>Seller : {seller}</small></p>
            <p><small>Rating : {ratings}</small></p>
            </div>
            <button onClick={() => props.bottonAddtoCart(props.product)} className='button-cart'>
                <p className='button-text'>Add to cart</p>
                
            </button>
        </div> 
       
    );
};

export default Product;