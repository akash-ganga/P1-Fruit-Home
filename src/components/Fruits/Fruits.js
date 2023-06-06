import React, { useEffect, useState } from 'react';
import './Fruits.css';
import Fruit from '../Fruit/Fruit';
import Basket from '../Basket/Basket';

const Fruits = () => {
    const [fruits, setFruits] = useState([]);
    const [basket, setBasket] = useState([]);

    useEffect(() => {
        fetch('fruits.json')
            .then(res => res.json())
            .then(data => setFruits(data));
    }, [])

    const addToBasket = (name, img, quantity, id) =>{
        if(basket.length !== 0){
            for(const fruit of basket){
                if(fruit.id === id){
                    fruit.quantity+=1;
                    setBasket([...basket]);
                    break;
                }
                else setBasket([...basket, {name: name, img: img, quantity: quantity, id: id}]);
            }
        }
        else setBasket([{name: name, img: img, quantity: quantity, id: id}]);
    }

    return (
        <div className='fruits-sec'>
            <div>
                <h1 className='fruit-sec-title'>All Fruits</h1>
                <div className='fruits-container'>
                    {
                        fruits.map(fruit => <Fruit
                            key={fruit.id}
                            fruit={fruit}
                            addToBasket={addToBasket}
                        ></Fruit>)
                    }
                </div>
            </div>
            <Basket basket={basket}></Basket>
        </div>
    );
};

export default Fruits;