import styled from "@emotion/styled";

export const ContainerSlider = styled.div`
  overflow: hidden;
  border-radius: 3rem;
  @media only screen and (max-width: 1000px) {
    border-radius: 0;
  }
`;

export const Slider = styled.div`
  display: flex;
  position: relative;
  width: 500%;
  height: 50rem;
  border-radius: 3rem;
  transition: 0.5s all ease;
  @media only screen and (max-width: 1000px) {
    height: 100vh;
  }
`;

export const BoxNumber = styled.div`
  width: 20%;
  height: 90%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  overflow: hidden;
  position: relative;
  @media only screen and (max-width: 650px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    height: 30%;
  }
  .background {
    z-index: 1;
    padding: 2rem;
    background-color: rgba(0, 0, 0, 0.7);
    width: 60%;
    transform: skewX(7deg);
    position: absolute;
    height: 100%;
    left: -10%;
    padding-left: 20rem;
    transform-origin: 0 100%;

    @media only screen and (max-width: 800px) {
      width: 65%;
    }
    @media only screen and (max-width: 650px) {
      width: 65%;
      top: 0;
      height: 100%;
      padding: 0;
      transform: skewX(8deg);
    }
    ::before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background-color: inherit;
      pointer-events: none;
      transform: skewX(10deg);
      @media only screen and (max-width: 800px) {
        display: none;
      }
    }
  }
`;

export const Details = styled.div`
  padding: 5rem;
  z-index: 100;
  grid-column: 1 / span 1;
  grid-row: 1/-1;
  transition: all 0.5s ease;

  text-align: justify;
  @media only screen and (max-width: 800px){
    padding: 1rem;
    width: 50%;
    overflow: hidden;
    h1{
      font-size: 1rem;
      margin: 0;
    }
    p{
      font-size: 0.5rem;
    }
  }
`;

export const Trails = styled.div`
  position: relative;
  bottom: 10rem;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: flex-start;
  @media only screen and (max-width: 800px){
    bottom: 38rem;
  }
`;

export const Trail = styled.div`
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7rem;
  height: 0.2rem;
  border-radius: 1rem;
  margin: 0 1rem 0 1rem;
  background-color: #ffffff;
  opacity: ${({ isSelected }) => (isSelected ? "1" : "0.5")};
  transition: all 0.2s ease;
  :hover {
    cursor: pointer;
  }
  h1 {
    position: relative;
    bottom: -1.5rem;
    font-size: 1rem;
  }
  @media only screen and (max-width: 800px){
    width: 1rem;
    height: 1rem;
    h1{
      display: none;
    }
  }
`;

export const Arrows = styled.div`
  z-index: 2;
  position: relative;
  bottom: 28rem;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    margin: 1rem;
    font-size: 5rem;
    border-radius: 100%;
    background-color: #ffffff5a;
    transition: all ease 0.3s;
    :hover {
      background-color: rgba(0, 0, 0, 0.9);
      cursor: pointer;
    }
  }
  @media only screen and (max-width: 800px){
    bottom: 44.8rem;
    justify-content: flex-end;
    display: none;
  }
`;

export const ContainImg = styled.div`
  z-index: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img {
    position: relative;
    width: 100%;
    object-fit: cover;
  }
`;
