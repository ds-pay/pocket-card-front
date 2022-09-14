import styled from "@emotion/styled";

export const ContainerDropOne = styled.div`
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
`
