import styled from "@emotion/styled";
import { theme } from "@nextui-org/react";

export const ContainerNav = styled.div`
  display: flex;
  position: sticky;
  justify-content: center;
  justify-content: space-between;
  padding: 0rem 0.75rem 0rem 0.75rem;
  align-items: center;
  width: 100%;
  height: 3.2rem;
  z-index: 10;
  background-color: var(--backgroundNavbar);
  border-bottom: solid var(--bgIconPrimary) 1px;
`;

export const Seccion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .imgUser {
    width: 2.3rem;
    height: 2.3rem;
    border-radius: 5rem;
    :hover {
      cursor: pointer;
    }
  }
  .browser {
    display: flex;
    width: 14rem;
    background-color: var(--bgCardLogin);
    color: ${({ theme }) => theme.text};
    margin: 0rem 0.7rem 0rem 0.7rem;
    height: 2.2rem;
    align-items: center;
    padding: 0rem 0.75rem 0rem 0.75rem;
    border-radius: 2rem 2rem 2rem 2rem;
    color: var(--colorTextOrdinary);
    @media (max-width: 1024px) {
      width: 100%;
      cursor: pointer;
    }
    input {
      border: 0;
      background-color: var(--bgCardLogin);
      outline: none;
      text-align: justify;
      ::placeholder{
        color: var(--colorTextOrdinary);
      

      }
      @media (max-width: 1024px) {
        display: none;
      }
    }
  }
`;

export const ContainSeccionsViews = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6rem;
  height: 2.8rem;
  transition: all 0.3s;
  font-size: 1.3rem;
  border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
  margin: 0.15rem 0.15rem;
  background-color: ${({ isSelected }) => isSelected ? " var(--bgCardLogin)" : null};
  a{
    color: var(--colorTextOrdinary);
  }
  :hover {
    background-color: var(--bgThridGlass);
    cursor: pointer;
  }
  @media(max-width: 1024px){
    display: none;
  }
`;

export const ContainSeccionCtrls = styled.div`
  display: flex;
  transition: 0.3s all ease;
  .rotate-icon{
      animation-duration: 1s;
      animation-name: rotateIcon;
      @keyframes rotateIcon {
      from {
        transform: rotate(0Deg);
      }
      to {
        transform: rotate(360Deg);
      }
    }
  }
  transition: all 0.3s;
  justify-content: center;
  align-items: center;
  width: 2.2rem;
  height: 2.2rem;
  transition: all 0.3s;
  font-size: 1.1rem;
  border-radius: 5rem;
  margin: 0.25rem 0.25rem;
  background-color:  var(--bgCardLogin);
  color: var(--colorTextOrdinary);
  :hover {
    background-color: var(--bgThridGlass);
    cursor: pointer;
  }
  @media(max-width: 1024px){
    display: flex;
  }
`;