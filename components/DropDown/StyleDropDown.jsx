import styled from "@emotion/styled";

export const ContainerDropdown = styled.div`
    display: flex;
    flex-direction: column;
    right: 0;
    top: 3.5rem;
    position: absolute;
    background-color:  #272727;
    border: solid #535353 1px;
    border-radius: 1rem 0rem 0rem 1rem;
    transition: 0.5s all;
    transform: ${({handleBurguer}) => !handleBurguer ? "translateX(100%)" : "translate(0)"};
    opacity: ${({ handleBurguer }) => !handleBurguer ? 0 : 1};
`;

export const DrpdownBurguer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 20rem;
    padding: 0.5rem;
`;

export const Seccion = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0rem 1rem 0rem 1rem;
    transition: all 0.3s;
    border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
    :hover{
        background-color: #4d4d4d;
        cursor: pointer;
    }
    .seccion-1{
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 70%;
        justify-content: flex-start;
        p{
            padding: 0rem 0rem 0rem 0.3rem;
        }
    }
    .seccion-2{
        display: flex;
        align-items: center;
        width: 30%;
        justify-content: flex-end;
    }

`;
