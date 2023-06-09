const addFruitToLocalStorage = id =>{
    let basketFruits;

    // const bf = localStorage.getItem('basket-fruits');

    if(localStorage.getItem('basket-fruits')) basketFruits = JSON.parse(localStorage.getItem('basket-fruits'));
    else basketFruits = {};

    // const n = basketFruits[id];

    if(basketFruits[id]) basketFruits[id] = basketFruits[id] + 1;
    else basketFruits[id] = 1;

    localStorage.setItem('basket-fruits', JSON.stringify(basketFruits));
}

const removeFromLS = id =>{
    const bf = localStorage.getItem('basket-fruits');
    if(bf){
        const bfo = JSON.parse(bf);
        if(id in bfo){
            delete bfo[id];
            localStorage.setItem('basket-fruits', JSON.stringify(bfo));
        }
    }
}

const deleteLS = () =>{
    localStorage.removeItem('basket-fruits');
}

export {
    addFruitToLocalStorage,
    removeFromLS,
    deleteLS
}