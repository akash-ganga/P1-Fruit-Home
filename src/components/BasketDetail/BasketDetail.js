import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './BasketDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const BasketDetail = () => {
    const { fruits, currentFruits } = useLoaderData();
    const [basFruit, setBasFruit] = useState(currentFruits);

    return (
        <div className='bas-detail'>
            <div>
                {
                    basFruit.map(fruit =>
                        <div key={fruit.id} className='bas-d-fruit'>
                            <div className='bas-fruit-detail'>
                                <img src={fruit.img} alt="fruit" />
                                <div>
                                    <h3>{fruit.name}</h3>
                                    <p>Price: {fruit.price}</p>
                                    <p>Shipping Charge: {fruit.shipping}</p>
                                </div>
                            </div>
                            <button className='del-but'><FontAwesomeIcon className='del-icon' icon={faTrashAlt}></FontAwesomeIcon></button>
                        </div>
                    )
                }
            </div>
            <div className='price'>
                <h1 className='price-title'>Price</h1>
                <div className='price-details'>
                    <p>Selected Fruits: {basFruit.length}</p>
                    <p>Total Number of Fruits: {basFruit.length}</p>
                    <p>Total Price: ${basFruit.length}</p>
                    <p>Total Shipping: ${basFruit.length}</p>
                </div>
            </div>
        </div>

    );
};

export default BasketDetail;