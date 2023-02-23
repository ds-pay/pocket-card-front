import styled from "@emotion/styled";

export const ContainerGeneral = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: 0.7rem;
  background-color: var(--nextui-colors-backgroundForm);
  margin: 2rem 0;
	transition: 0.3s all ease ;
  -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
  h2{
    margin: 0.5rem 0;
    font-size: 2rem;
    color: var(--nextui-colors-backgroundNavbar);	
  }
  .containerslider{
    overflow: hidden;
    display: flex;
    width: 80%;
    margin: 1rem 0;
    z-index: 1;
    justify-content: flex-start;
  }
`;

export const ContainerCardsSlider = styled.div`
  display: flex;
  transition: 0.5s;
`;

export const Arrows = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5rem;
    height: 100%;
    font-size: 3rem;
    background-color: #ffffff5a;
    transition: all ease 0.5s;
    color: #3d366f;
    :hover {
      background-color: #3d366f;
      cursor: pointer;
      color: white;
    }
  }
  @media only screen and (max-width: 800px){
    bottom: 44.8rem;
    justify-content: flex-end;
    display: none;
  }
`;

