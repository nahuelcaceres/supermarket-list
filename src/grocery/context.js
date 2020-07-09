import React from 'react'
import shortid from 'shortid'

import api from './resources';

const GroceryContext = React.createContext();

const GroceryProvider = ({children}) => {
    const [status, setStatus] = React.useState("init");
    const [groceries, setGroceries] = React.useState([]);

    function removeGrocery(id){
        setGroceries(groceries => groceries.filter(grocery => grocery.id !== id));
    }

    function addGrocery(grocery){
        setGroceries(groceries => groceries.concat({id: shortid.generate(), text: grocery}));
    }

    //datos que vamos a exponer en nuestro provider
    const state = {groceries};
    const actions = {remove:removeGrocery, add: addGrocery};

    React.useEffect(() => {
        //Cuando se monte el componente, vamos a llamar a la api
        api.list().then(groceries => {
            setGroceries(groceries);
            setStatus("resolved");
        })
    }, []);

    React.useEffect(() => {
        api.update(groceries);

    }, [groceries])

    if (status === "init") return <div>Cargando...</div>;

    //En value = {{}} van los objetos que exponemos
    return <GroceryContext.Provider value = {{state, actions}}>{children}</GroceryContext.Provider>;
};

export {GroceryContext as default, GroceryProvider as Provider}