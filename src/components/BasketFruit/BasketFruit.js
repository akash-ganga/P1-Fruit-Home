import React from 'react';
import './BasketFruit.css';

const BasketFruit = ({ fruit }) => {
    const { name, img, quantity } = fruit;
    // , id
    return (
        <div className='single-basket-fruit'>
            <p className='fruit-name'>{name}</p>
            <img className='b-f-img' src={img} alt="basket fruit" />
            <p className='fruit-quan'>Quantity:</p>
            <p>{quantity}</p>
            <button>+</button>
            <button>-</button>
            <button>delete</button>
        </div>
    );
};

export default BasketFruit;