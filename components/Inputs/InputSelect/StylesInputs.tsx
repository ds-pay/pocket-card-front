import styled from "styled-components";
import {ContainerDropProps} from './Interfaces'

export const ContainerInput = styled.div<ContainerDropProps>`
  max-width: 20rem;
  width:90%;
  height: 3rem;
  color: #b9b9b9;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  border: none;
  box-shadow: ${({ isActive }) =>
    !isActive ? "0px 0px 4px 1px #638cfd" : "none"};
  background-color: #474a50;
  transition: all 0.2s;
  :hover {
    color: #dddddd;
    cursor: pointer;
  };
  span {
    width: 30%;
  };
  .input-content {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem 0 1rem;
  };
  .selection-icon {
    width: 10%;
    display: flex;
    justify-content: center;
    .svg-logo {
      margin: 0.5rem;
    }
  };
  .selection-title {
    font-weight: bold;
  };
  .no-selection{
    margin: 0.5rem;
    width: 80%;
  }
  .selection-arrow {
    width: 10%;
    display: flex;
    justify-content: center;
    transition: all 0.3s;
    transform: ${({ isActive }) =>
      !isActive ? "rotate(180deg)" : "rotate(0)"};
  };
`;

export const ContainerDrop = styled.div`
  width: 20rem;
  height: 19rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const Container = styled.div<ContainerDropProps>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: ${({ isActive }) => (isActive ? "20rem" : "0rem")};
  margin: 0.4rem;
  border-radius: 1rem;
  flex-direction: column;
  color: #b9b9b9;
  background-color: #474a50;
  align-items: flex-start;
  transition: all 0.5s;
  div {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 90%;
    height: 3rem;
    margin: 0.3rem 0.5rem 0.3rem 0.9rem;
    border-radius: 1rem;
    overflow: hidden;
    opacity: ${({ isActive }) => (isActive ? "1" : "0")};
    transition: ${({ isActive }) => (isActive ? "all 0.5s" : "all 0.1s")};
    :hover {
      background-color: #383b3d;
      color: #dddddd;
      cursor: pointer;
    }
    h1 {
      margin: 0rem 1rem 0rem 1rem;
      font-size: 1rem;
    }
  }
`;
