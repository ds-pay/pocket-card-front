import styled from "@emotion/styled";

export const ContainerDropdown = styled.div`
  display: flex;
  flex-direction: column;
  right: 0;
  top: 3.5rem;
  z-index: -1;
  position: absolute;
  background-color: #272727;
  border: solid #535353 1px;
  border-radius: 1rem 0rem 0rem 1rem;
  animation: slideOpen 0.5s;
  @keyframes slideOpen {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export const DrpdownBurguer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 20rem;
  padding: 0.5rem;
`;

export const Seccion = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0rem 1rem 0rem 1rem;
  transition: all 0.3s;
  border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
  :hover {
    background-color: #4d4d4d;
    cursor: pointer;
  }
  .seccion-1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 70%;
    justify-content: flex-start;
    p {
      padding: 0rem 0rem 0rem 0.3rem;
    }
  }
  .seccion-2 {
    display: flex;
    align-items: center;
    width: 30%;
    justify-content: flex-end;
  }
`;

export const ContianerNotifications = styled.div`
  display: ${({ handleBell }) => (!handleBell ? "flex" : "none")};
  animation: slideOpen 0.5s;
  @keyframes slideOpen {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }
  z-index: -1;
  flex-direction: column;
  right: 0rem;
  top: 3.5rem;
  width: 30rem;
  position: absolute;
  background-color: #272727;
  border: solid #535353 1px;
  border-radius: 1rem 1rem 1rem 1rem;
  transition: 0.5s all;
  height: 20rem;
  overflow: scroll;
  overflow-x: hidden;
  @media(max-width: 1024px){
    right: 0rem;
    top: 3.5rem;
    width: 20rem;
    height: 100vh
  }
`;

export const SeccionNotifications = styled.div`
  display: flex;
  padding: 1rem 0.7rem 1rem 0.7rem;
  justify-content: center;
  align-items: center;
  .ContainerImg {
    width: 40%;
    padding: 0rem 0rem 0.25rem 0rem;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 9rem;
      height: 6rem;
      object-fit: cover;
      border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
    }
  }
  .ContainerPromo{
    width: 60%;
    padding: 0rem 0rem 0rem 0.25rem;
    h1{
        margin: 0;
        font-size: 1rem;
    }
    p{
        margin: 0;
        font-size: 0.8rem;
    }
  }
  .ContainerTime {
    display: flex;
    justify-content: space-between;
    height: 3rem;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  
`;
