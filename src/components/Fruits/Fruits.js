import React, { useEffect, useState } from 'react';
import './Fruits.css';
import Fruit from '../Fruit/Fruit';
import Basket from '../Basket/Basket';
import { addFruitToSto } from '../../utilities/sto_to_ls';

const Fruits = () => {
    const [fruits, setFruits] = useState([]);
    const [basket, setBasket] = useState([]);

    useEffect(() => {
        fetch('fruits.json')
            .then(res => res.json())
            .then(data => setFruits(data));
    }, [])

    const addToBasket = (b_fruit) =>{
        let d = 0;
        if(basket.length !== 0){
            for(const fruit of basket)
                if(fruit.id === b_fruit.id){
                    fruit.quantity+=1;
                    setBasket([...basket]);
                    d=1;
                    break;
                }
            if(d === 0){
                b_fruit.quantity = 1;
                setBasket([...basket, b_fruit]);
            }    
        }
        else{
            b_fruit.quantity = 1;
            setBasket([b_fruit]);
        }

        addFruitToSto(b_fruit.id);
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
            <Basket basket={basket}></Basket>
        </div>
    );
};

export default Fruits;