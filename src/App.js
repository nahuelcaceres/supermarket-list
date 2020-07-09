import React from 'react';

import {useGroceries, useGroceriesActions} from './grocery/hooks';
import AddGrocery from './grocery/components/AddGrocery';
import Button from './ui/controls/Button';
import Link from './ui/controls/Link';
import List from './ui/listing/List';

function App() {
  const [showModal, setShowModal] = React.useState(false);
  const groceries = useGroceries();
  const {remove} = useGroceriesActions();

  return (
    <>
      <div>
        <h1>Lista de supermercado</h1>
        {groceries.length ?
          <List>
            {groceries.map(({id, text}) => (
              <li key={id}>
                <span>{text}</span> 
                <Link color="error" onClick={() => remove(id)}>Borrar</Link>
              </li>
            ))}
          </List>

        : <span>No hay items todavia</span>}
        
        <Button onClick={() => setShowModal(true)}>Agregar</Button>
        

      </div>
      {showModal && <AddGrocery onClose={() => setShowModal(false)}/>}
    </>
  );
}

export default App;
