import React from 'react';
import './Basket.css';

const Basket = ({basket}) => {
    return (
        <div className='basket'>
            <h1 className='basket-title'>Your Basket</h1>
            <h1>{basket.length}</h1>
        </div>
    );
};

export default Basket;