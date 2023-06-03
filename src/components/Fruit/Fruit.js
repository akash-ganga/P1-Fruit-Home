import React from 'react';
import './Fruit.css';

const Fruit = ({ fruit }) => {
    const { name, img, price, stock, shipping } = fruit;

    return (
        <div>
            <div className='single-fruit'>
                <img src={img} alt="a fruit" />
                <div>
                    <h4>Name: {name}</h4>
                    <p>Price: {price}</p>
                    <p>Stock: {stock}</p>
                    <p>Shipping: {shipping}</p>
                </div>
            </div>
            <button className='fruit-button'>ksdjklsd</button>
        </div>
    );
};

export default Fruit;