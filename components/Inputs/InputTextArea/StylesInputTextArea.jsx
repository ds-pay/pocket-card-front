import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;

`;

export const TextArea = styled.textarea`
    display: flex;
    width: 100%;
    height: 100%;
    border: ${({isBorderNone}) => isBorderNone? "none" : null};
    background: ${({isBgNone}) => isBgNone ? "none" : null};
`;