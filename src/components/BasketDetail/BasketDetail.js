import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './BasketDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { removeFromLS } from '../../utilities/sto_to_ls';

const BasketDetail = () => {
    const { fruits, currentFruits } = useLoaderData();
    const [basFruit, setBasFruit] = useState(currentFruits);

    let price = 0;
    let shipping = 0;
    let quan = 0;
    
    const n = basFruit.length;

    for(const fruit of basFruit){
        price = price + fruit.price * fruit.quantity;
        shipping = shipping + fruit.shipping * fruit.quantity;
        quan = quan + fruit.quantity;
    }

    const tax = parseFloat((price * .1).toFixed(2));

    const removeFruit = id =>{
        const remaining = basFruit.filter(fruit => fruit.id !== id);
        setBasFruit(remaining);
        removeFromLS(id);
    }

    return (
        <div className='bas-detail'>
            <div>
            {!n && <div className='det-empty-txt'><p>Empty</p></div>}
                {
                    basFruit.map(fruit =>
                        <div key={fruit.id} className='bas-d-fruit'>
                            <div className='bas-fruit-detail'>
                                <img src={fruit.img} alt="fruit" />
                                <div>
                                    <h3>{fruit.name}</h3>
                                    <p>Price: ${fruit.price}</p>
                                    <p>Shipping Charge: ${fruit.shipping}</p>
                                    <p>Quantity: {fruit.quantity}</p>
                                </div>
                            </div>
                            <button className='del-but' onClick={()=>removeFruit(fruit.id)}><FontAwesomeIcon className='del-icon' icon={faTrashAlt}></FontAwesomeIcon></button>
                        </div>
                    )
                }
            </div>
            <div className='detail-price'>
                <h1 className='detail-price-title'>Price</h1>
                <div className='detail-price-details'>
                    <p>Selected Fruits: {basFruit.length}</p>
                    <p>Total Number of Fruits: {quan}</p>
                    <p>Total Price: ${price}</p>
                    <p>Total Shipping: ${shipping}</p>
                    <p>Tax: ${tax}</p>
                    <h4>Grand Total: ${(price + shipping + tax).toFixed(2)}</h4>
                </div>
            </div>
        </div>

    );
};

export default BasketDetail;