import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;

`;

export const TextArea = styled.textarea`
    display: flex;
    width: 100%;
    height: 100%;
    border: ${({isBorderNone}) => isBorderNone? "none" : null};
    background: ${({isBgNone}) => isBgNone ? "none" : null};
    margin: 1rem 0 1rem 0;
`;

export const ConteinerGeneral = styled.div`
  display: flex;
  margin-top: 1rem;
  width: 70rem;
  flex-direction: column;
  .button-style{
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const InputAdd = styled.div`
  display: flex;
  width: 70rem;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 1rem;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;


export const ContainerList = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const OptionsList = styled.div`
  display: flex;
  width: 8.5rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  @media (max-width: 1000px) {
    flex-wrap: nowrap;
    width: 100%;
    margin-top: 0;
  }
`;