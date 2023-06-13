import React, { useEffect, useState } from 'react';
import './Fruits.css';
import Fruit from '../Fruit/Fruit';
import Basket from '../Basket/Basket';
import { addFruitToLocalStorage, deleteLS, getStoredBasket, removeFromLS } from '../../utilities/sto_to_ls';

const Fruits = () => {
    const [fruits, setFruits] = useState([]);
    const [basket, setBasket] = useState([]);

    useEffect(() => {
        fetch('fruits.json')
            .then(res => res.json())
            .then(data => setFruits(data));
    }, [])

    useEffect(() => {
        const storedBasket = getStoredBasket();
        const fruitFromLS = [];
        for (const id in storedBasket) {
            const fruitStorage = fruits.find(fruit => fruit.id === id);
            if (fruitStorage) {
                fruitStorage.quantity = storedBasket[id];
                fruitFromLS.push(fruitStorage);
            }
        }
        setBasket(fruitFromLS);
    }, [fruits])

    const addToBasket = (b_fruit) => {
        let d = 0;
        if (basket.length !== 0) {
            for (const fruit of basket)
                if (fruit.id === b_fruit.id) {
                    fruit.quantity += 1;
                    setBasket([...basket]);
                    d = 1;
                    break;
                }
            if (d === 0) {
                b_fruit.quantity = 1;
                setBasket([...basket, b_fruit]);
            }
        }
        else {
            b_fruit.quantity = 1;
            setBasket([b_fruit]);
        }

        addFruitToLocalStorage(b_fruit.id);
    }

    const clearBasket = () => {
        setBasket([]);
        deleteLS();
    }

    const increaseFruit = id => {
        for (const fruit of basket)
            if (fruit.id === id) {
                fruit.quantity += 1;
                setBasket([...basket]);
                break;
            }
    }
    
    const decreaseFruit = id => {
        for (const fruit of basket)
            if (fruit.id === id) {
                if((fruit.quantity-1)===0){
                    deleteFruitFromBasket(id);
                    break;
                }
                else{
                    fruit.quantity -= 1;
                    setBasket([...basket]);
                    break;
                }
            }
    }

    const deleteFruitFromBasket = id =>{
        const newBasket = [];
        for (const fruit of basket)
            if (fruit.id !== id) newBasket.push(fruit);
            setBasket(newBasket);
            removeFromLS(id);
    }

    // const addToBasket = (b_fruit) =>{
    //     // How this function is working without adding same extra fruit in basket?
    //     if(basket.length !== 0){
    //         for(const fruit of basket){
    //             if(fruit.id === b_fruit.id){
    //                 fruit.quantity+=1;
    //                 setBasket([...basket]);
    //                 break;
    //             }
    //             else{
    //                 // b_fruit.quantity = 1;
    //                 setBasket([...basket, b_fruit]);
    //             }    
    //         }
    //     }
    //     else{
    //         b_fruit.quantity = 1;
    //         setBasket([b_fruit]);
    //     }
    // }

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
            <Basket
                basket={basket}
                clearBasket={clearBasket}
                increaseFruit = {increaseFruit}
                decreaseFruit = {decreaseFruit}
                deleteFruitFromBasket = {deleteFruitFromBasket}
            ></Basket>
        </div>
    );
};

export default Fruits;