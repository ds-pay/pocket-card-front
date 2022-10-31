import React from 'react'
import ModalReusable from '../components/Modal/ModalReusable'
import styled from '@emotion/styled';

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

const ModalTest = () => {
  return (
    <div>
        <ContainerButtons>
            <Button>Modal</Button>
        </ContainerButtons>
        <ModalReusable/>
    </div>
  )
}

export default ModalTest