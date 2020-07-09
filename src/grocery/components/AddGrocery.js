import React from 'react'
import styled from "styled-components";

import {useGroceriesActions} from '../hooks';
import Button from '../../ui/controls/Button';
import TextInput from '../../ui/inputs/TextInput';
import Link from '../../ui/controls/Link';

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

const Footer = styled.div`
    margin-top: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
                <TextInput placeholder="Bananas" autoFocus value={text} onChange={e => setText(e.target.value)} type="text"/>

                <Footer>
                    <Link type="button" width="50%" onClick={onClose}>Cancelar</Link>
                    <Button type="submit" width="50%" onClick={handleAdd}>Agregar</Button>
                </Footer>

            </Content>
        </Container>
    );
};

export default AddGrocery;