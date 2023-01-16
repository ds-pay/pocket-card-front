import styled from "@emotion/styled";

export const ContainerPrimary = styled.div`
  display: flex; 
  flex-direction: row; 
  justify-content: center; 
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ContainerLoginClient = styled.div`
z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22rem;
  height: 28rem;
  padding: 0 0 0 1.3rem;
  background-color: var(--nextui-colors-backgroundForm);
  flex-direction: column;
  border-radius: 1rem 1rem 1rem 1rem;
  transition: 1s all ease;
  transform: translateX(65%);
  animation: translationX 1s;
  -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.20);
  transform: ${({isCommerce}) => isCommerce ? "translateX(20%)" : "translateX(115%)"};
  @media (max-width: 900px) {
    transform: translateX(0);
  }
  h1,
  h3 {
    color: var(--nextui-colors-textFormColor);
  }
  h1 {
    font-size: 2.5rem;
  }


  .container-img {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 0.5rem 0 0.5rem;
    padding: 1rem;
    width: 3rem;
    height: 100%;
    background-color: var(--nextui-colors-bgInputText);
    color: var(--nextui-colors-textFormColor);
    border-radius: 0.2rem;
  }

  .seccionLogin {
    display: flex;
  }

  .container-title {
    display: flex;
    flex-direction: column;
    font-family: "Roboto", sans-serif;
    height: 3rem;
    justify-content: center;
    align-items: center;
    h1 {
      margin: 0;
    }
  }

  .seccionLogin {
    width: 25rem;
    height: 15rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .container {
      display: flex;
      margin: 1rem 0 1rem 0;
      p {
        font-family: sans-serif;
        font-weight: 600;
        font-size: 12px;
        padding: 0;
        color: #ff5959;
      }
      .container-text {
        background-color: var(--nextui-colors-bgInputText);
        margin: 0.25rem;
        padding: 0.25rem 0.25rem 0 0.5rem;
        width: 13.6rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 0.5rem;
      }
    }
  }
  .container-button {
    width: 70%;
    height: 2.3rem;
    h1 {
      color: var(--nextui-colors-textColorCardAnimate);
    }
    input {
      width: 100%;
      height: 100%;
      background-color: var(--nextui-colors-bgInputText);
      transition: 0.3s all ease;
      border: none;
      border-radius: 0.3rem;
      :hover {
        background-color: #d1cbff;
        cursor: pointer;
      }
    }
  }
  .boton-switch{
    color: var(--nextui-colors-textFormColor);
    transition: 0.3s all ease;
    :hover{
      cursor: pointer;
      color: var(--nextui-colors-textColorCardAnimate);
    }
  }
`;

export const ContainerLoginCommerce = styled.div`
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22rem;
  height: 28rem;
  padding: 0 0 0 1.3rem;
  background-color: var(--nextui-colors-backgroundForm);
  flex-direction: column;
  border-radius: 1rem 1rem 1rem 1rem;
  transition: 1s all ease;
  transform: translateX(65%);
  animation: translationForm 1s;
  -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.20);
  transform: ${({isCommerce}) => isCommerce ? "translateX(15%)" : "translateX(-80%)"};
  @media (max-width: 900px) {
    transform: translateX(0);
  }
  h1,
  h3 {
    color: var(--nextui-colors-textFormColor);
  }
  h1 {
    font-size: 2.5rem;
  }
  @keyframes translationForm {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-15%);
    }
  }

  .container-img {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 0.5rem 0 0.5rem;
    padding: 1rem;
    width: 3rem;
    height: 100%;
    background-color: var(--nextui-colors-bgInputText);
    color: var(--nextui-colors-textFormColor);
    border-radius: 0.2rem;
  }

  .seccionLogin {
    display: flex;
  }

  .container-title {
    display: flex;
    flex-direction: column;
    font-family: "Roboto", sans-serif;
    height: 3rem;
    justify-content: center;
    align-items: center;
    h1 {
      margin: 0;
    }
  }

  .seccionLogin {
    width: 25rem;
    height: 15rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .container {
      display: flex;
      margin: 1rem 0 1rem 0;
      p {
        font-family: sans-serif;
        font-weight: 600;
        font-size: 12px;
        padding: 0;
        color: #ff5959;
      }
      .container-text {
        background-color: var(--nextui-colors-bgInputText);
        margin: 0.25rem;
        padding: 0.25rem 0.25rem 0 0.5rem;
        width: 13.6rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 0.5rem;
      }
    }
  }
  .container-button {
    width: 70%;
    height: 2.3rem;
    h1 {
      color: var(--nextui-colors-textColorCardAnimate);
    }
    input {
      width: 100%;
      height: 100%;
      background-color: var(--nextui-colors-bgInputText);
      transition: 0.3s all ease;
      border: none;
      border-radius: 0.3rem;
      :hover {
        background-color: #d1cbff;
        cursor: pointer;
      }
    }
  }
  .boton-switch{
    color: var(--nextui-colors-textFormColor);
    transition: 0.3s all ease;
    :hover{
      cursor: pointer;
      color: var(--nextui-colors-textColorCardAnimate);
    }
  }
`;

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerCard = styled.div`
  position: absolute;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 24rem;
  height: 35rem;
  background: var(--nextui-colors-bgLoginCardAnimation);
  border-radius: 2rem;
  transition: 1s all ease;
  transform: translateX(-30%);
  animation: translation 1s;
  overflow: hidden;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,1);
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,1);
  color: var(--nextui-colors-textColorCardAnimate);
  @media(max-width: 900px) {
    display: none;
  }

  @keyframes translation {
    0% {
      transform: translate(0);
    }
    100% {
      transform: translateX(-30%);
    }
  }
  .conteiner-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    
    h1 {
      font-size: 2.5rem;
      filter: drop-shadow( 0px 0px 10px #a5a5a5)
    }

    img {
      width: 12rem;
      filter: drop-shadow( 0px 0px 10px #d1d1d1);
    }
  }

  .container-animation {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
    .bubbles {
      position: relative;
      display: flex;
      height: 100vh;
      width: 100%;
      span {
        height: 18px;
        width: 18px;
        margin: 0 4px;
        border-radius: 50%;
        box-shadow: 0 0 0 10px #4fc3dc44, 0 0 50px #4fc3dc, 0 0 100px #4fc3dc;
        animation: animate 10s linear infinite;
      }
      @keyframes animate {
        0% {
          transform: translateY(100vh) scale(0);
        }
        100% {
          transform: translateY(-10vh) scale(1);
        }
      }
    }
  }
`;



