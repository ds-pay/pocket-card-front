import styled from "@emotion/styled";
import { IsActivate, ContainerActiveSelected } from './Interface'

export const SidebarContainer = styled.div <IsActivate>`
  display: flex;
  flex-direction: column;
  width: ${({ isActivate }) => (isActivate ? "4.1rem" : "20rem")};
  height: 100%;
  background: var(--backgroundNavbar);
  position: absolute;
  transition: 0.3s all ease;
  white-space: nowrap;
  z-index: 90;
  border-bottom: solid var(--bgIconPrimary) 1px;
`;

export const Content = styled.div<IsActivate>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 1rem 0rem 1rem 0rem;
  align-items: flex-start;
  align-content: space-between;
  white-space: nowrap;
  overflow: hidden;
  color: white;
  .title {
    transition: 0.5s all ease;
    width: ${({ isActivate }) => (isActivate ? "60%" : "90%")};
    border-bottom: 0.2px solid white;
    margin: 0rem 0.8rem 0rem 1rem;
    text-align:center;
    overflow: hidden;
  }
`;

export const ContainerSeccion = styled.div<ContainerActiveSelected>`
  display: flex;
  margin: 0.3rem 1rem 0.3rem 1rem;
  width: ${({ isActivate }) => (isActivate ? "56%" : "90%")};
  height: 3rem;
  border-radius: 0.5rem;
  transition: 0.5s all ease;
  justify-content: space-between;
  background-color: ${({ isSelected }) => isSelected ? "var(--bgThridGlass)" : null} ;
  :hover {
    background-color: var(--bgThridGlass);
    cursor: pointer;
  }
  .contain-img,
  .contain-label {
    display: flex;
    justify-content: flex-start/*${({ leftIsTrue }) =>
      !leftIsTrue ? "flex-start" : "flex-end"}*/;
    align-items: center;
    transition: 0.3s all ease;
  }
  .contain-img {
    margin: 0.5rem;
    font-size: 1.2rem;
  }
  .contain-label {
    width: 100%;
    opacity: ${({ isActivate }) => (isActivate ? "0" : "1")};
    h3 {
      font-size: 1rem;
      margin: 0;
    }
  }
  .contain-notifi {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.9rem;
    height: 1.8rem;
    border-radius: 1rem;
    background: var(--bgIconPrimary);
    margin: 0.5rem;
    transition: 0.3s all ease;
    opacity: ${({ isActivate }) => (isActivate ? "0" : "1")};
    white-space: normal;
    overflow: hidden;
    h3 {
      font-size: 1rem;
      margin: 0;
    }
  }
`;

export const Head = styled.div<IsActivate>`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
  .content {
    display: flex;
    justify-content: center;
    margin: 0.5rem;
    white-space: normal;
    overflow: hidden;
    transition: 0.5s all ease;
    width: 100%;

    .contain-logo, .contain-name {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .contain-logo {
      margin: 0.6rem;
      max-width: 3.5rem;
      max-height: 3.5rem;
      img{
        width: 100%;
      }
    }
    .contain-name {
      white-space: normal;
      overflow: hidden;
      font-size: 1.5rem;
      font-weight: 600;
      flex-wrap: nowrap;
      h3{
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export const ButtonArrow = styled.div<IsActivate>`
    width: 1.85rem;
    height: 1.85rem;
    background-color: var(--bgThridGlass);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    right: -0.9rem;
    top: 1rem;
    color: white;
    font-size: 1.75rem;
    border-radius: 2rem;
    transform: ${({isActivate}) => isActivate ? "rotate(180deg)" : "rotate(0deg)"};
    transition: 0.3s all ease;
    z-index: 1;
    :hover{
        cursor: pointer;
    }
`;