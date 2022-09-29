import styled from "styled-components";

interface DropProps {
    isSelection: boolean,
}


export const ContainerInput = styled.div<DropProps>`
  width: 20rem;
  height: 3rem;
  color: #b9b9b9;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  border: none;
  box-shadow: ${({ isSelection }) => !isSelection ? "0px 0px 4px 1px #638cfd" : "none"};
  background-color: #474a50;
  transition: all 0.2s;
  :hover {
    color: #dddddd;
    cursor: pointer;
  }
  span {
    width: 30%;
  }
  .drop-title-icon {
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .svg-logo {
      margin: 0.5rem;
    }
    .drop-title-text {
      margin: 0.5rem;
    }
  }
  .drop-arrow {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 1rem;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.3s;
      transform: ${({ isSelection }) =>
        !isSelection ? "rotate(180deg)" : "rotate(0)"};
    }
  }
`;

export const ContainerDrop = styled.div`
  width: 20rem;
  height: 19rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const Container = styled.div<DropProps>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: ${({isSelection}) => isSelection? "0rem" : "20rem"};
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
    opacity: ${({isSelection}) => isSelection? "0": "1"};
    transition: ${({isSelection}) => isSelection? "all 0.1s" : "all 0.5s"};
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