import styled from "@emotion/styled";

export const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    color: black;
    top: 0;
    left: 0;
    z-index: 90;
    overflow-y: scroll;
    background: ${({isOverlay}) => isOverlay ? 'rgb(0, 0, 0, 0)' : 'rgb(0, 0, 0, 0.5)'};
    padding: 2.5rem;
    display: flex;
    justify-content: ${({modalPositionX}) => modalPositionX ? modalPositionX : 'center'} ;
    align-items: ${({modalPositionY}) => modalPositionY ? modalPositionY : 'center' };
    @media(max-width: 1336px){
        padding: 1.5rem;
    }
`;

export const ModalContainer = styled.div`
    width: 31.25rem;
    min-height: 100px;
    background: #fff;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 1.25rem;
    display: flex;
    justify-content: center;
    transition: 0.5s all ease;
    @media(max-width: 1336px){
        width: 100vh;
    }
`;

export const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.25rem;
    padding-bottom: 1.25rem;
    border-bottom: 0.063rem;

    h3{
        font-weight: 500;
        font-size: 16px;
        color: #1766DC;
        margin: 0;
    }

`;

export const ModalClose = styled.button`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 1.25rem;
    right: 1.25rem;
    width: 30px;
    height: 30px;
    border: none;
    cursor: pointer;
    transition: 0.5s ease all;
    border-radius: 100px;
    color: #1766DC;
    background-color: #fff;
    font-size: 1.25rem;
    
    :hover{
        background: #8a8a8aab;
    }
`;