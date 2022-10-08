import styled from "@emotion/styled";

export const ContainerDropdown = styled.div`
  display: flex;
  flex-direction: column;
  right: 0;
  top: 3.5rem;
  position: absolute;
  background-color: #272727;
  border-radius: 1rem 0rem 0rem 1rem;
  transition: 0.5s;
  height: ${({ handleBurguer }) => !handleBurguer ? "0rem" : "20rem"};
`;

export const DrpdownBurguer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 20rem;
  padding: 0.5rem;
  transition: 0.5s;
  opacity: ${({handleBurguer}) => !handleBurguer? "0": "1"};
`;

export const Seccion = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0rem 1rem 0rem 1rem;
  transition: all 0.3s;
  border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
  transition: 0.5s;
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
  display: flex;
  flex-direction: column;
  right: 0rem;
  top: 3.50rem;
  width: 30rem;
  position: absolute;
  background-color: #272727;
  border-radius: 1rem 1rem 1rem 1rem;
  transition: 0.5s all;
  height: 20rem;
  overflow: scroll;
  overflow-x: hidden;
  transition: 0.5s;
  height: ${({ handleBell }) => (handleBell ? "0rem" : "20rem")};
  /* border: ${({ handleBell }) => (handleBell ? "none" : "solid #535353 0.5px")}; */

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
  transition: 0.5s;
  opacity: ${({handleBell}) => handleBell? "0": "1"};
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
  .ContainerPromo {
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
