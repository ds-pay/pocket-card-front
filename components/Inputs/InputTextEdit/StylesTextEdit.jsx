import styled from "@emotion/styled";

export const ContainerGeneral = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1rem;
  flex-direction: column;
  .inputtext {
    height: 100%;
    background-color: var(--bgInputText);
    margin: 0.25rem 0rem 0.25rem 0rem;
    padding: 0.25rem 0.25rem 0 0.5rem;
    -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    transition: 0.5s all ease;
    h3 {
      font-size: 15px;
    }
    @media (max-width: 1024px) {
      background-color: var(--backgroundForm);
    }
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 0 2rem ;
`;

export const DivLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 2rem;
`;

export const InputTextview = styled.input`
    height: 100%;
    height: 3rem;
    background-color: var(--bgInputText);
    margin: 0.25rem 0rem 0.25rem 0rem;
    padding: 0.25rem 0.25rem 0 0.5rem;
    -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    transition: 0.5s all ease;
    h3 {
      font-size: 15px;
    }
    @media (max-width: 1024px) {
      background-color: var(--backgroundForm);
    }
`;