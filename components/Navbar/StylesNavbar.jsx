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
  background-color: var(--nextui-colors-backgroundNavbar);
  border-bottom: solid var(--nextui-colors-bgIconPrimary) 1px;
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
    background-color: var(--nextui-colors-bgCardLogin);
    color: ${({ theme }) => theme.text};
    margin: 0rem 0.7rem 0rem 0.7rem;
    height: 2.2rem;
    align-items: center;
    padding: 0rem 0.75rem 0rem 0.75rem;
    border-radius: 2rem 2rem 2rem 2rem;
    color: var(--nextui-colors-colorTextOrdinary);
    @media (max-width: 1024px) {
      width: 100%;
      cursor: pointer;
    }
    input {
      border: 0;
      background-color: var(--nextui-colors-bgCardLogin);
      outline: none;
      text-align: justify;
      ::placeholder{
        color: var(--nextui-colors-colorTextOrdinary);
      

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
  background-color: ${({ isSelected }) => isSelected ? " var(--nextui-colors-bgCardLogin)" : null};
  a{
    color: var(--nextui-colors-colorTextOrdinary);
  }
  :hover {
    background-color: var(--nextui-colors-bgThridGlass);
    cursor: pointer;
  }
  @media(max-width: 1024px){
    display: none;
  }
`;

export const ContainSeccionCtrls = styled.div`
  display: flex;
  transition: 0.3s all ease;
  /* @keyframes rotation {
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(720deg);
    }
  }
  @keyframes rotationReverse {
    0%{
      transform: rotate(360deg);
    }
    100%{
      transform: rotate(0deg);
    }
  } */
  transition: all 0.3s;
  justify-content: center;
  align-items: center;
  width: 2.2rem;
  height: 2.2rem;
  transition: all 0.3s;
  font-size: 1.1rem;
  border-radius: 5rem;
  margin: 0.25rem 0.25rem;
  background-color:  var(--nextui-colors-bgCardLogin);
  color: var(--nextui-colors-colorTextOrdinary);
  :hover {
    background-color: var(--nextui-colors-bgThridGlass);
    cursor: pointer;
  }
  @media(max-width: 1024px){
    display: flex;
  }
`;