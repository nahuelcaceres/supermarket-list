import React from 'react'
import styled from "styled-components";

import {useGroceriesActions} from '../hooks';

const Container = styled.div`
    position: absolute;
    background-color: rgba(0,0,0,0.3);
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Content = styled.form`
    background-color: white;
    border-radius: 12px;
    padding: 24px;
`;

const AddGrocery = ({onClose}) => {
    const [text, setText] = React.useState("");
    const {add} = useGroceriesActions();
    
    function handleAdd(e){
        e.preventDefault();

        add(text);
        setText("");
        onClose();
    }

    return (
        <Container>
            <Content>
                <input value={text} onChange={e => setText(e.target.value)} type="text"/>
                <button onClick={handleAdd}>Agregar</button>
                <button onClick={onClose}>Cancelar</button>
            </Content>
        </Container>
    );
};

export default AddGrocery;