import styled from "@emotion/styled";

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
  background-color: #272727;
  flex-direction: column;
  border-radius: 1rem 1rem 1rem 1rem;
  transition: 1s all ease;
  transform: translateX(65%);


  .img-user,
  .seccionLogin {
    display: flex;
  }

  .img-user {
    position: absolute;
    top: -3rem;
    background-color: #272727;
    padding: 1rem;
    border-radius: 6rem 6rem 6rem 6rem;
    /* border-bottom: solid white 2px; */
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
        background-color: #5c5c5c;
        border-radius: 0.2rem;
      }
    }
  }
  .container-button {
    width: 70%;
    height: 2.3rem;
    button {
      width: 100%;
      height: 100%;
      background-color: #5c5c5c;
      transition: 0.3s all ease;
      border: none;
      border-radius: 0.3rem;
      :hover {
        background-color: #272727;
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
      background-color: #5c5c5c;
      padding: 0.5rem;
      border-radius: 0.5rem;
      transition: 0.3s all ease;
      :hover {
        background-color: #272727;
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
  background-color: #5c5c5c;
  border-radius: 2rem;
  transition: 1s all ease;
  animation: translation 0.5s;
  
  @keyframes translation {
    100% { transform: translateX(-30%) }
  }
`;

// const LoginPage = styled.div`
//   display: flex;
//   margin: 0;
//   padding: 0;
//   width: 100%;
//   height: 100vh;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
// `;

