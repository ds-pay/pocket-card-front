import styled from "@emotion/styled";

export const ContainerGeneral = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleButton = styled.span`
  margin-left: 0.6rem;
  font-size: 0.9rem;
  color: var(--nextui-colors-textFormColor);
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 2.7rem;
  background-color: var(--nextui-colors-bgInputText);
  border-radius: ${(props) => (props.radius ? props.radius : "0.2rem")};
  padding: 0.3rem;
  margin: 0.1rem 0.34rem;
  transition: 0.5s all ease;
  -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
  :hover {
    cursor: pointer;
    background-color: var(--nextui-colors-backgroundForm);
  }
  @media(max-width: 1024px){
    background-color: white;
    :hover {
      background-color: var(--nextui-colors-bgInputText);
    }
  }
`;

export const ContainerIcons = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
`;

export const Icon = styled.div`
  color:  var(--nextui-colors-textFormColor);
  margin: 5px;
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

export const DropDownMenu = styled.div`
  position: absolute;
  margin-top: 3rem;
  width: 10rem;
  transform: translate(4%);
  background-color: var(--nextui-colors-bgInputText);
  border-radius: 8px;
  padding: 0.5rem;
  overflow: hidden;
  transition: height 500ms ease;
  z-index: 1;
`;

export const DropDownItem = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  transition: background 500ms;
  padding: 0.5rem;
  :hover {
    cursor: pointer;
    background-color: var(--nextui-colors-bgInputText);
  }
  span {
    color:  var(--nextui-colors-textFormColor);
    margin-left: 0.5rem;
  }
`;

