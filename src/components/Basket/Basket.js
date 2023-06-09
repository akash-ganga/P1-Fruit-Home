import React from 'react';
import './Basket.css';
import BasketFruit from '../BasketFruit/BasketFruit';

const Basket = ({ basket }) => {
    let price = 0;
    let shipping = 0;
    
    for(const fruit of basket){
        price = price + fruit.price;
        shipping = shipping + fruit.shipping;
    }

    const tax = parseFloat((price * .1).toFixed(2));
    // console.log(basket);
    
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
                    <p>Total Price: ${price}</p>
                    <p>Total Shipping: ${shipping}</p>
                    <p>Tax: ${tax}</p>
                    <h4>Grand Total: ${(price + shipping + tax).toFixed(2)}</h4>
                </div>
            </div>
        </div>
    );
};

export default Basket;