import React from 'react'

import GroceryContext from './context';

export function useGroceries() {
    //saca el state de nuestro context (GroceryContext)
    const {
        state: { groceries },

    } = React.useContext(GroceryContext);
    
    return groceries;
};


export function useGroceriesActions() {
    //saca el state de nuestro context (GroceryContext)
    const {
        actions: {remove, add},
        
    } = React.useContext(GroceryContext);
    
    return {remove, add};
};