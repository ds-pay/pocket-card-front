import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const TextArea = styled.textarea`
  /* padding: ${({isMargin}) => isMargin ? "0.5rem" : null} ; */
  display: flex;
  width: 100%;
  border: ${({ isBorderNone }) => (isBorderNone ? "none" : null)};
  background: ${({ isBgNone }) => (isBgNone ? "none" : null)};
  margin: ${({isMargin}) => isMargin ? "0" : "1rem 0 1rem 0"};
`;

export const ConteinerGeneral = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const ContainerInput = styled.div`
  display: flex;
  width: 40rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) {
    flex-direction: column;
  }

  .contain-input {
    width: 100%;
    border-radius: 0.3rem;
    background-color: var(--nextui-colors-bgInputText);
    -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
  }
`;

export const InputAdd = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 1rem 0 1rem;

  .contain-input {
    width: 100%;
    border-radius: 0.3rem;
    background-color: ${({ isBackground }) =>
      isBackground ? "var(--nextui-colors-bgInputText)" : null};
    -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
  }
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const ContainerList = styled.div`
  display: flex;
  width: 40rem;
  flex-direction: row;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const OptionsList = styled.div`
  display: flex;
  width: 9rem;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  flex-direction: row;
  @media (max-width: 1000px) {
    flex-wrap: nowrap;
    width: 100%;
    margin-top: 0;
  }
`;
