import React from 'react';
import './Basket.css';
import BasketFruit from '../BasketFruit/BasketFruit';

const Basket = ({basket}) => {
    return (
        <div className='basket'>
            <h1 className='basket-title'>Your Basket</h1>
            {
                basket.map(fruit => <BasketFruit
                key={fruit.id}
                fruit={fruit}
                ></BasketFruit>)
            }
        </div>
    );
};

export default Basket;