const addFruitToSto = id =>{
    let basketFruits;

    // const bf = localStorage.getItem('basket-fruits');

    if(localStorage.getItem('basket-fruits')) basketFruits = JSON.parse(localStorage.getItem('basket-fruits'));
    else basketFruits = {};

    // const n = basketFruits[id];

    if(basketFruits[id]) basketFruits[id] = basketFruits[id] + 1;
    else basketFruits[id] = 1;

    localStorage.setItem('basket-fruits', JSON.stringify(basketFruits));
}

export {
    addFruitToSto

}