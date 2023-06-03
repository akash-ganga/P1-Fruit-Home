import React, { useEffect, useState } from 'react';
import './Fruits.css';
import Fruit from '../Fruit/Fruit';
import Basket from '../Basket/Basket';

const Fruits = () => {
    const [fruits, setFruits] = useState([]);
    useEffect(() => {
        fetch('fruits.json')
            .then(res => res.json())
            .then(data => setFruits(data));
    }, [])

    return (
        <div className='fruits-sec'>
            <div>
                <h1 className='fruit-sec-title'>All Fruits</h1>
                <div className='fruits-container'>
                    {
                        fruits.map(fruit => <Fruit
                            key={fruit.id}
                            fruit={fruit}
                        ></Fruit>)
                    }
                </div>
            </div>
            <Basket></Basket>
        </div>
    );
};

export default Fruits;