import styled from "@emotion/styled";

export const ContainerCardForm = styled.form`
  background-color: var(--nextui-colors-backgroundForm);
  width: 80%;
  height: 50rem;
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
  @media (max-width: 1024px) {
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
    border-top: 1px solid var(--nextui-colors-textlowContrast);
    border-bottom: 1px solid var(--nextui-colors-textlowContrast);
    .container-img,
    .container-title,
    .container-butonback {
      color: var(--nextui-colors-textFormColor);
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.3s ease;
    }
    .container-img {
      margin: 0.5rem 0.5rem;
      font-size: 1.5rem;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 0.2rem;
      
    }
    .container-butonback{
      margin: 0.5rem 0.5rem;
      font-size: 1.5rem;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 0.2rem;
      :hover{
        background-color: var(--nextui-colors-bgInputText);
        cursor: pointer;
      }
      @media (max-width: 1024px){
        :hover{
          background-color: var(--nextui-colors-backgroundForm);
        }
      }
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
    @media (max-width: 1024px){
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
    @media (max-width: 1024px){
      background-color: var(--nextui-colors-backgroundForm);
    }
  }
`;

export const ContainImages = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  @media (max-width: 1024px) {
    padding: 0.5rem;
  }
  .container-images{
    display: flex;
    margin: 1rem 0 0 0;
    width: 100%;
    height: 100%;
    justify-content: space-around;
    align-items: center;

  }
  .container-dropzone{
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

export const ContainInfo = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  z-index: 8;
  .container-inputs{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 1024px) {
      flex-direction: column;
    }
    .content-left,
    .content-right {
      display: flex;
      flex-direction: column;
      width: 50%;
      height: 100%;
      padding: 0.5rem;
      @media (max-width: 1500px) {
        width: 100%;
      }
    }
    .content-left {
      h3 {
        font-size: 15px;
        color: var(--nextui-colors-textFormColor);
        margin: 0.1rem 0 0 0;
      }
      .content-credencial {
        margin: 0.5rem 0 0.5rem 0;
        border-radius: 1rem;
        justify-content: flex-start;
        border-radius: 0.5rem;
        -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
        -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
        box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
      }
    }
    .content-right {
      h3 {
        font-size: 15px;
        color: var(--nextui-colors-textFormColor);
        margin: 0.1rem 0 0 0;
      }
      h3 {
        color: var(--nextui-colors-textFormColor);
        font-size: 15px;
        margin: 0.1rem;
      }
      .content-credencial {
        margin: 0.5rem 0 0.5rem 0;
        z-index: 2;
        border-radius: 0.5rem;
        -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
        -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
        box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
      }
    }
  }
`;

export const ContainText = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  .content-input{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width: 1024px) {
      width: 100%;
    }
    .container-textarea {
      display: flex;
      width: 100%;
      align-items: center;
      margin: 0.5rem 0 0.5rem 0;
    }
  }
  .textarearray{
    width: 100%;
    margin: 0 0.5rem;
  }
  .inputlink{
    width: 100%;
  }
  .inputkeyselect{
    width: 100%;
    margin: 0.5rem 0;
  }
`;



export const ContainerEdit = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const ContainerHeadEdit = styled.div`
  width: 100%;
  height: 6%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
`;

export const ContainerCardEdit = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  height: 94%;
  padding: 1rem;
  flex-wrap: wrap;
  
`;

export const Card = styled.div`
    width: 12rem;
    height: 15rem;
    background-color: var(--nextui-colors-bgInputText);
    -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 1rem;
    @media (max-width: 1024px) {
      background-color: var(--nextui-colors-backgroundForm);
      margin: 0.5rem 0;
    }

    .logo{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 6rem;
      height: 6rem;
      border-radius: 1rem;
      overflow: hidden;
      -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
      -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
      box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
      img{
        width: 100%;
        object-fit: cover;
      }

    }

    .title{
      width: 100%;
      height: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.3rem;
      flex-direction: column;
      h3{
        font-size: 1rem;
        margin: 0.3rem 0;
      }
      .button{
        width: 80%;
        border-radius: 0.4rem;
        height: 2rem;
        background-color: var(--nextui-colors-backgroundForm);
        text-align: center;
        margin: 0.2rem 0;
        -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
        -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
        box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
        transition: 0.5s all ease;
        border: none;
        :hover{
          background-color: #cacaca;
          cursor: pointer;
        }
        @media (max-width: 1024px) {
          background-color: var(--nextui-colors-bgInputText);
          :hover{
            background-color: var(--nextui-colors-backgroundForm);
            cursor: pointer;
          }
        }
      }
    }


`;
