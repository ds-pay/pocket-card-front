import styled from "@emotion/styled";

export const ButtonContainer = styled.div`
  display: flex;
  border: none;
  height: 100%;
  margin: 0.1rem 0.3rem;
  padding: 0.3rem;
  border-radius: 0.5rem;
  background-color: var(--nextui-colors-bgInputText);
  cursor: pointer;
  transition: 0.5s all ease;
  -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
  color: var(--nextui-colors-textFormColor);
  :hover {
    background-color: var(--nextui-colors-backgroundForm);
  }
  @media(max-width: 1024px){
    background-color: white;
    :hover {
      background-color: var(--nextui-colors-bgInputText);
    }
  }
`;

export const TextButton = styled.h6`
  text-align: center;
  width: 100%;
  margin: 5px;
  font-size: 0.8rem;
  color: var(--nextui-colors-textFormColor);
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

export const IconButton = styled.div`
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;
