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
                    <p>Ans: React is the most widely used front-end JavaScript library. It is a component-based, open-source front-end library that is exclusively responsible for the application's view layer. It creates basic views for each state in the project, and when the data changes, React updates and renders the appropriate component quickly</p> <br /> <br />
                    <h4>How usestate work?</h4>
                    <p>Ans : UseState is a Hook that allows to have state variables in functional components. It pass the initial state to this function and it returns a variable with the current state value and another function to update this value.</p>

                </div>
            </div>
            <div className='order-container'>
                {
                  show.map(item => <Cart key={item.id} show={item} remove={remove}></Cart>)  
                }
                 <button className='buttonRemove' onClick={remove}>RemoveAll</button>
            </div>
        </div>
    );
};

export default Shop;