import React from 'react';
import './Fruit.css';

const Fruit = ({ fruit, addToBasket }) => {
    const { id, name, img, price, stock, shipping } = fruit;

    return (
        <div className='single-fruit'>
            <div className='fruit-info'>
                <img src={img} alt="a fruit" />
                <div>
                    <h4>Name: {name}</h4>
                    <p>Price: {price}</p>
                    <p>Stock: {stock}</p>
                    <p>Shipping: {shipping}</p>
                </div>
            </div>
            <button onClick={()=>addToBasket(id)} className='fruit-button'>Add to your Basket</button>
        </div>
    );
};

export default Fruit;