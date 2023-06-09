import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import './Fruit.css';

const Fruit = ({ fruit, addToBasket }) => {
    const { id, name, img, price, stock, shipping, quantity } = fruit;

    return (
        <div className='single-fruit'>
            <div className='fruit-info'>
                <img src={img} alt="a fruit" />
                <div>
                    <h4>{name}</h4>
                    <p>Price: {price}</p>
                    <p>Stock: {stock}</p>
                    <p>Shipping: {shipping}</p>
                </div>
            </div>
            <button className='fruit-button' onClick={()=>addToBasket(fruit)}><p>Add to your Basket</p><FontAwesomeIcon className='but-icon' icon={faBasketShopping}></FontAwesomeIcon></button>
        </div>
    );
};

export default Fruit;