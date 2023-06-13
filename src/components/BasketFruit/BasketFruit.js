import React from 'react';
import './BasketFruit.css';

const BasketFruit = ({ fruit, increaseFruit, decreaseFruit, deleteFruitFromBasket }) => {
    const { name, img, quantity, id } = fruit;
    return (
        <div className='single-basket-fruit'>
            <p className='fruit-name'>{name}</p>
            <img className='b-f-img' src={img} alt="basket fruit" />
            <p className='fruit-quan'>Quantity:</p>
            <p>{quantity}</p>
            <button onClick={()=>increaseFruit(id)}>+</button>
            <button onClick={()=>decreaseFruit(id)}>-</button>
            <button onClick={()=>deleteFruitFromBasket(id)}>delete</button>
        </div>
    );
};

export default BasketFruit;