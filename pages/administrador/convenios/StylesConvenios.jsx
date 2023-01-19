import styled from "@emotion/styled";

export const ContainerCardForm = styled.form`
  background-color: var(--nextui-colors-backgroundForm);
  width: 80%;
  height: 40rem;
  overflow: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 1rem;
  -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
  transition: 0.5s all ease;
  @media (max-width: 1500px) {
    padding-left: 3.5rem;
    height: 46rem;
    width: 98%;
    justify-content: flex-start;
    overflow: hidden;
    overflow-y: scroll;
    background: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
  .container-header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-top: 1px solid var(--nextui-colors-textFormColor);
    border-bottom: 1px solid var(--nextui-colors-textFormColor);
    .container-img,
    .container-title {
      color: var(--nextui-colors-textFormColor);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .container-img {
      margin: 0 0.5rem 0 0.5rem;
      font-size: 1.5rem;
      width: 3rem;
      height: 3rem;
      border-radius: 0.2rem;
      
    }
    .container-title {
      h3 {
        font-size: 1rem;
        margin: 0;
      }
    }
  }
  .inputtext {
    z-index: 0;
    background-color: var(--nextui-colors-bgInputText);
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
    @media (max-width: 1500px){
      background-color: var(--nextui-colors-backgroundForm);
    }
  }
  .img {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 0.5rem 0 0.5rem;
    font-size: 1.8rem;
    width: 3rem;
    height: 3rem;
    color: var(--nextui-colors-textFormColor);
    background-color: var(--nextui-colors-bgInputText);
    border-radius: 0.2rem;
    transition: 0.5s all ease;
    -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
    @media (max-width: 1500px){
      background-color: var(--nextui-colors-backgroundForm);
    }
  }
`;