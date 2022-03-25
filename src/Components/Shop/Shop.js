import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] =useState([])
    const [show ,setShow] = useState([])
    const bottonAddtoCart = (product) =>{
        // console.log(product);
        // const newProduct = [...show,product]
        setShow(product)
    }
    useEffect( () => {
        fetch('products.json')
        .then(res =>res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='products'>
            
             <div className='products-container'>
                {
                    products.map(product => <Product key={product.id} product={product} bottonAddtoCart={bottonAddtoCart}></Product> )
                }
            </div>
            <div className='order-container'>
                <Cart show={show}></Cart>
            </div>
        </div>
    );
};

export default Shop;