import styled from "@emotion/styled";

export const ContainerCardForm = styled.form`
  background-color: var(--backgroundForm);
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
    border-top: 1px solid var(--textlowContrast);
    border-bottom: 1px solid var(--textlowContrast);
    .container-img,
    .container-title {
      color: var(--textFormColor);
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
    @media (max-width: 1500px){
      background-color: var(--backgroundForm);
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
    color: var(--textFormColor);
    background-color: var(--bgInputText);
    border-radius: 0.2rem;
    transition: 0.5s all ease;
    -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
    @media (max-width: 1500px){
      background-color: var(--backgroundForm);
    }
  }
`;

export const UpFormBonus = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  @media (max-width: 1024px) {
    padding: 0.5rem;
  }

  .container-dropzone {
    justify-content: center;
    align-items: center;
    margin: 1rem 0 0.5rem 0;
    width: 13rem;
    height: 100%;
    display: flex;
    text-align: justify;
    cursor: pointer;
    @media (max-width: 1024px) {
      width: 8rem;
      height: 8rem;
      margin: .55rem 0 0 0;
      .parrafo-drop {
        display: none;
      }
    }
  }
`;

export const DownFormBonus = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding: 0rem 1rem 1rem 1rem;
  @media (max-width: 1024px) {
    padding: 0.5rem;
  }

  .content-down {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-around;
    @media (max-width: 1024px) {
      flex-direction: column;
      align-items: center;
    }
    .content-left,
    .content-right {
      width: 45%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      @media (max-width: 1024px) {
        width: 100%;
      }
    }
    .content-left {
      display: flex;
      flex-direction: column;
      .container-inputs {
        display: flex;
        width: 100%;
        align-items: center;
        margin: 0.5rem 0 0.5rem 0;
      }
    }
  }
  .content-right {
    display: flex;
    flex-direction: column;
    .container-inputs {
      display: flex;
      width: 100%;
      align-items: center;
      margin: 0.5rem 0 0.5rem 0;
    }
  }
`;