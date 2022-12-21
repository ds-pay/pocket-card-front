import styled from "@emotion/styled";

export const ButtonContainer = styled.button`
  display: flex;
  border: none;
  background-color: var(--nextui-colors-bgInputText);
  cursor: pointer;
  transition: 0.5s all ease;
  -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
  :hover {
    background-color: var(--nextui-colors-backgroundForm);
  }
`;

export const TextButton = styled.h6`
  text-align: center;
  margin: 5px;
  font-size: 0.8rem;
  color: var(--nextui-colors-textFormColor);
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

export const IconButton = styled.div`
  margin: 5px;
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;
