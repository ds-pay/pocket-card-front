import styled from "@emotion/styled";

export const ContainerDropdown = styled.div`
  display: flex;
  flex-direction: column;
  right: 0;
  top: 3.5rem;
  position: absolute;
  background-color: var(--nextui-colors-backgroundNavbar);
  border-radius: 1rem 0rem 0rem 1rem;
  transition: 0.5s;
  height: ${({ handleBurguer }) => (!handleBurguer ? "0rem" : "20rem")};
  color: var(--nextui-colors-textColorCardAnimate);
  
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
  opacity: ${({ handleBurguer }) => (!handleBurguer ? "0" : "1")};
`;

export const Seccion = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 3rem;
  padding: 0rem 1rem 0rem 1rem;
  transition: all 0.3s;
  border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
  transition: 0.5s;
  :hover {
    background-color: var(--nextui-colors-bgThridGlass);
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
  top: 3.5rem;
  width: 30rem;
  position: absolute;
  background-color: var(--nextui-colors-backgroundNavbar);
  border-radius: 1rem 1rem 1rem 1rem;
  transition: 0.5s all;
  height: 20rem;
  overflow: scroll;
  overflow-x: hidden;
  transition: 0.5s;
  height: ${({ handleBell }) => (handleBell ? "0rem" : "20rem")};
  color: var(--nextui-colors-textColorCardAnimate);
  /* border: ${({ handleBell }) =>
    handleBell ? "none" : "solid #535353 0.5px"}; */

  @media (max-width: 1024px) {
    height: ${({ handleBell }) => (handleBell ? "0rem" : "20rem")};
    right: 0rem;
    top: 3.5rem;
    width: 20rem;
  }
`;

export const SeccionNotifications = styled.div`
  display: flex;
  padding: 1rem 0.7rem 1rem 0.7rem;
  justify-content: center;
  align-items: center;
  transition: 0.5s all ease;
  opacity: ${({ handleBell }) => (handleBell ? "0" : "1")};
  :hover {
    background-color: var(--nextui-colors-bgIconPrimary);
    cursor: pointer;
  }
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
    h1 {
      margin: 0;
      font-size: 1rem;
    }
    p {
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

export const ContentModal = styled.div`
  .ContainerImg {
    width: 100%;
    padding: 0.03rem 0.2rem 0.03rem 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 30rem;
      height: 18rem;
      object-fit: cover;
      border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
    }
  }
  .ContainerPromo {
    width: 100%;
    padding: 0rem 0rem 0rem 0.25rem;
    display: flex;
    flex-direction: column;
    .ContainerTitle {
      display: flex;
      justify-content: space-around;
      h1 {
        margin: 1rem 0 0 0;
        font-size: 2rem;
      }
    }
    .ContainerTime {
      display: flex;
      justify-content: space-evenly;
      height: 3rem;
      font-size: 0.9rem;
      div {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 0.6rem;
      }
    }
    .ContainerParagraph{
      display: flex;
      width: 100%;
      padding: 1rem;
      text-align: justify;
    }
  }
`;
