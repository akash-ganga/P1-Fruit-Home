import { getStoredBasket } from "../utilities/sto_to_ls";

export const fruitsBasketLoader = async () =>{
    const fruitsData = await fetch('fruits.json');
    const fruits = await fruitsData.json();

    const basket = getStoredBasket();
    const currentFruits = [];
    for(const id in basket){
        const basFruit = fruits.find(fruit => fruit.id === id);
        if(basFruit){
            basFruit.quantity = basket[id];
            currentFruits.push(basFruit);
        }
    }

    return { fruits, currentFruits };
}