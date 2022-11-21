import styled from "@emotion/styled";
import { match } from "assert";

export const ContainerPrimary = styled.div`
  display: flex; 
  flex-direction: row; 
  justify-content: center; 
  align-items: center;
`;

export const ContainerLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25rem;
  height: 40rem;
  background-color: var(--nextui-colors-bgCardLogin);
  flex-direction: column;
  border-radius: 1rem 1rem 1rem 1rem;
  transition: 1s all ease;
  transform: translateX(65%);
  animation: translationForm 1s;
  -webkit-box-shadow: 0px 0px 5px 0px #666666;
  -moz-box-shadow: 0px 0px 5px 0px #666666;
  box-shadow: 0px 0px 5px 0px #666666;
  h1, h3{
    color: var(--nextui-colors-textColorCardAnimate);
  }  
  @keyframes translationForm {
    0% { transform: translate(0)}
    100% { transform: translateX(65%) }
  }


  .img-user,
  .seccionLogin {
    display: flex;
  }

  .img-user {
    position: absolute;
    top: -3rem;
    background-color: var(--nextui-colors-backgroundNavbar);
    padding: 1rem;
    border-radius: 6rem 6rem 6rem 6rem;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,1);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,1);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,1);
    img {
      width: 5rem;
    }
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
      .container-img,
      .container-text {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 0.5rem 0 0.5rem;
      }
      .container-img {
        padding: 1rem;
        background-color: var(--nextui-colors-bgIconPrimary);
        border-radius: 0.2rem;
      }
    }
  }
  .container-button {
    width: 70%;
    height: 2.3rem;
    h1{
      color: var(--nextui-colors-textColorCardAnimate);
    } 
    button {
      width: 100%;
      height: 100%;
      background-color: var(--nextui-colors-bgIconPrimary);
      transition: 0.3s all ease;
      border: none;
      border-radius: 0.3rem;
      :hover {
        background-color: var(--nextui-colors-bgThridGlass);
        cursor: pointer;
      }
    }
  }
`;

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerNetworks = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  height: 3rem;
  margin: 1rem 0 0 0;


  .text-networks {
    border-top: solid white 1px;
    width: 180%;
    text-align: center;
    font-family: 'Roboto',sans-serif;
    padding: 10px 0px 0px 0px;
  }
  .networks {
    display: flex;
    justify-content: space-around;
    align-items: center;

    .network {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0.5rem 1.3rem 0.5rem 1.3rem;
      background-color: var(--nextui-colors-bgIconPrimary);
      padding: 0.5rem;
      border-radius: 0.5rem;
      transition: 0.3s all ease;
      :hover {
        background-color: var(--nextui-colors-bgThridGlass);
        cursor: pointer;
      }
    }
  }
`;

export const ContainerCard = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 27rem;
  height: 47rem;
  background: var(--nextui-colors-bgLoginCardAnimation);
  border-radius: 2rem;
  transition: 1s all ease;
  transform: translateX(-30%);
  animation: translation 0.3s;
  overflow: hidden;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,1);
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,1);
  color: var(--nextui-colors-textColorCardAnimate);

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
        height: 30px;
        width: 30px;
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



