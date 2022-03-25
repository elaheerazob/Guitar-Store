import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
            <h3>Price :{price}</h3>
            <p><small>Rating : {ratings}</small></p>
            </div>
            <button onClick={() => props.bottonAddtoCart(props.product)} className='button-cart'>
                <p className='button-text'>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                
            </button>
        </div> 
       
    );
};

export default Product;