import React from 'react';

import {useGroceries, useGroceriesActions} from './grocery/hooks';
import AddGrocery from './grocery/components/AddGrocery';

function App() {
  const [showModal, setShowModal] = React.useState(false);
  const groceries = useGroceries();
  const {remove} = useGroceriesActions();

  return (
    <>
      <div>
        <h1>Lista de supermercado</h1>
        <button onClick={() => setShowModal(true)}>Agregar</button>
        
        <ul>
          {groceries.map(({id, text}) => (
            <li key={id}>
              {text} <button onClick={() => remove(id)}>Borrar</button>
            </li>
          ))}
        </ul>

      </div>
      {showModal && <AddGrocery onClose={() => setShowModal(false)}/>}
    </>
  );
}

export default App;
