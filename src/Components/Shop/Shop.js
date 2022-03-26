import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] =useState([])
    const [show ,setShow] = useState([])
    // console.log(show);
    //click handelar add button function
    const bottonAddtoCart = (product) =>{
        // console.log(product);
        if(show.indexOf(product) === -1){
            const newProduct = [...show,product];
            if(newProduct.length >= 5 ){
                alert('max number add');
            }else{
                // console.log(newProduct);
                setShow(newProduct)
            }
       
        }else{
            alert('already taken')
        }
    }

    //remove all
    const remove = () =>{
        const removeall =[];
        setShow(removeall);
    }
    //chooseRendom1Number rendom selection
    const chooseRendom1Number = () =>{
        const chooseProduct = show[Math.floor(Math.random() * show.length)];
        setShow([chooseProduct])
    }
    //fetch data api call
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
                <div>
                    <h4>How to React work?</h4>
                    <p>Ans: React work single direction. Its creat a virtual dom and compare virtual dom between actual dom when change or update.and it works all in one single process, react execute line by line code into down drection</p> <br /> <br />
                    <h4>How usestate work?</h4>
                    <p>Ans : UseState is a Hook that allows to have state variables in functional components. It pass the initial state to this function and it returns a variable with the current state value and another function to update this value.</p>

                </div>
            </div>
            <div className='order-container'>
                {
                  show.map(item => <Cart key={item.id} show={item} remove={remove}></Cart>)  
                }
                 <button className='buttonRemove' onClick={remove}>RemoveAll</button>
                 <button className='buttonRemove' onClick={chooseRendom1Number}>Choose 1</button>
            </div>
        </div>
    );
};

export default Shop;