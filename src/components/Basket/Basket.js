import React from 'react';
import './Basket.css';
import BasketFruit from '../BasketFruit/BasketFruit';

const Basket = ({ basket }) => {
    return (
        <div className='basket'>
            <h1 className='basket-title'>Your Basket</h1>
            <div className='basket-fruits'>
                {
                    basket.map(fruit => <BasketFruit
                        key={fruit.id}
                        fruit={fruit}
                    ></BasketFruit>)
                }
            </div>
            <div className='price'>
                <h1 className='price-title'>Price</h1>
                <div className='price-details'>
                    <p>Selected Fruits: {basket.length}</p>
                </div>
            </div>
        </div>
    );
};

export default Basket;