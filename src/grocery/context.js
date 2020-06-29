import React from 'react'
import shortid from 'shortid'

const GroceryContext = React.createContext();

const GroceryProvider = ({children}) => {
    const [groceries, setGroceries] = React.useState([{id: 1, text: 'uno'}, {id: 2, text: 'dos'}]);

    function removeGrocery(id){
        setGroceries(groceries => groceries.filter(grocery => grocery.id !== id));
    }

    function addGrocery(grocery){
        setGroceries(groceries => groceries.concat({id: shortid.generate(), text: grocery}));
    }

    //datos que vamos a exponer en nuestro provider
    const state = {groceries};
    const actions = {remove:removeGrocery, add: addGrocery};

    //En value = {{}} van los objetos que exponemos
    return <GroceryContext.Provider value = {{state, actions}}>{children}</GroceryContext.Provider>;
};

export {GroceryContext as default, GroceryProvider as Provider}