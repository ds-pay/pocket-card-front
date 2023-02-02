import styled from '@emotion/styled'

export const Content = styled.div`

    .keyselect{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1rem 0;
        background-color: var(--nextui-colors-bgInputText);
        padding: 0.25rem 0.25rem 0 0.5rem;
        -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
        -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
        box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
        @media(max-width: 1024px){
            background-color: white;
        }
    }
    @media(max-width: 1000px){
        width: 100%;
        height: 100%;
        background-color: transparent;

    }
`;