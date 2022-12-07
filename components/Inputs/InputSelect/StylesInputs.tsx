import styled from "styled-components";
import {ContainerDropProps} from './Interfaces'

export const ContainerInput = styled.div<ContainerDropProps>`
  width: 100%;
  height: 3rem;
  color: var(--nextui-colors-textFormColor);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  border: none;
  box-shadow: ${({ isActive }) =>
    isActive ? "0px 0px 4px 1px #638cfd" : "none"};
  background-color: var(--nextui-colors-bgInputText);
  transition: all 0.5s;
  :hover {
    color: black;
    cursor: pointer;
  }
  @media (max-width: 1024px) {
    background-color: var(--nextui-colors-backgroundForm);
  }
  .input-content {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem 0 1rem;
  }
  .selection-icon {
    width: 10%;
    display: flex;
    justify-content: center;
    .svg-logo {
      margin: 0.5rem;
    }
  }
  .selection-title {
    font-weight: bold;
  }
  .no-selection {
  }
  .selection-arrow {
    display: flex;
    justify-content: center;
    transition: all 0.3s;
    transform: ${({ isActive }) => (isActive ? "rotate(180deg)" : "rotate(0)")};
  }
`;

export const ContainerDrop = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 10;
`;

export const Container = styled.div<ContainerDropProps>`
  position: absolute;
  display: flex;
  width: calc(100% - 70%);
  justify-content: flex-start;
  align-items: flex-start;
  height: ${({ isActive }) => (isActive ? "10rem" : "0")};
  margin: 0.4rem;
  border-radius: 1rem;
  flex-direction: column;
  color: var(--nextui-colors-textFormColor);
  background-color:  #d0d2d4;
  align-items: flex-start;
  transition: all 0.5s;
  @media (max-width: 1024px){
    width: calc(100% - 60%);
  }
  div {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 3rem;
    margin: 0.3rem 0rem 0.3rem 0rem;
    width: 100%;
    border-radius: 1rem;
    overflow: hidden;
    opacity: ${({ isActive }) => (isActive ? "1" : "0")};
    transition: ${({ isActive }) => (isActive ? "all 0.5s" : "all 0.1s")};
    :hover {
      background-color:#ebeef3;
      cursor: pointer;
    }
    h1 {
      margin: 0rem 1rem 0rem 1rem;
      font-size: 1rem;
    }
  }
`;
