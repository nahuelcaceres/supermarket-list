export default {
    list: () => Promise.resolve(JSON.parse(localStorage.getItem("groceries") || "[]")),
    update: (groceries) => {
        
        localStorage.setItem('groceries', JSON.stringify(groceries));

        Promise.resolve(groceries);
    },
};

//Usamos el result dentro de una promise para hacerlo asincrono