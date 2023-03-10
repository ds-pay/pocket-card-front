import styled from "@emotion/styled";

export const ContainerPrimary = styled.div`
  display: flex; 
  justify-content: center; 
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50rem;
  height: 40rem;
  background-color: var(--bgCardLogin);
  border-radius: 1rem 1rem 1rem 1rem;
  transition: 1s all ease;
  -webkit-box-shadow: 0px 0px 5px 0px #666666;
  -moz-box-shadow: 0px 0px 5px 0px #666666;
  box-shadow: 0px 0px 5px 0px #666666;
  h1, h2, h3{
    color: var(--textColorCardAnimate);
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
`;

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .seccionLogin {
    width: 100%;
    height: 15rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .container {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 1rem 0 1rem 0;
      p{
        font-family: sans-serif;
        font-weight: 600;
        font-size: 12px;
        color: #ff5959;
      }
      .container-img,
      .container-text {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 0 0.5rem 0 0.5rem;
      }
      .container-img {
        padding: 1rem;
        width: 3rem;
        height: 3rem;
        background-color: var(--bgIconPrimary);
        border-radius: 0.2rem;
      }
    }
  }
  .container-button {
    width: 70%;
    height: 2.3rem;
    h1{
      color: var(--textColorCardAnimate);
    } 
    input {
      width: 100%;
      height: 100%;
      background-color: var(--bgIconPrimary);
      transition: 0.3s all ease;
      border: none;
      border-radius: 0.3rem;
      :hover {
        background-color: var(--bgThridGlass);
        cursor: pointer;
      }
    }
  }
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
      background-color: var(--bgIconPrimary);
      padding: 0.5rem;
      border-radius: 0.5rem;
      transition: 0.3s all ease;
      :hover {
        background-color: var(--bgThridGlass);
        cursor: pointer;
      }
    }
  }
`;