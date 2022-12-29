import styled from '@emotion/styled'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90rem;
    height: 50rem;
    overflow: hidden;
    overflow-y: scroll;
    border-radius: 1rem;
    background-color: var(--nextui-colors-backgroundForm);
    -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
    transition: 0.5s all ease;
    .keyselect{
        width: 80%;
        margin: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media(max-width: 1000px){
        width: 100%;
        height: 100%;
        background-color: transparent;

    }
`;