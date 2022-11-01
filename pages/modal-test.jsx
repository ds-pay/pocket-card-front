import React from 'react'
import ModalReusable from '../components/Modal/ModalReusable'
import styled from '@emotion/styled';
import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar'

const ContainerButtons = styled.div`
    padding: 40px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    gap: 20px;
`;

const Button = styled.button`
    display: block;
    padding: 10px 30px;
    border-radius: 100px;
    color: #fff;
    border: none;
    background: #1766DC;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    transition: 0.3s ease all;
    :hover{
        background: #153769;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        font-size: 42px;
        font-weight: 700;
        margin-bottom: 10px;
        margin: 0;
    }

    p{
        font-size: 18px;
        margin-bottom: 20px;
    }

    img{
        width: 100%;
        vertical-align: top;
        border-radius: 3px;
    }
`;

const ModalTest = () => {

    const [ stateModal, setStateModal ] = useState(false);

  return (
    <div>
        <ContainerButtons>
            <Button onClick={() => setStateModal(!stateModal)}>Modal</Button>
        </ContainerButtons>
        <ModalReusable
            isTitle={true}
            title={""} 
            stateModal={stateModal} 
            setStateModal={setStateModal}
            >
            <Content>
                <h1>Holis como estas</h1>
                <p>Que bonito me quedo mi modal</p>
                <Button onClick={() => setStateModal(!stateModal)}>Cerrar</Button>
            </Content>
        </ModalReusable>
        <Navbar/>
    </div>
  )
}

export default ModalTest