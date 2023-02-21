import styled from "@emotion/styled";

export const ContainerGeneral = styled.div`
  display: flex;
  justify-content: space-between;  
  align-items: center;
  width: 95%;
  height: 100%;
  border-radius: 0.5rem;
  background-color: var(--nextui-colors-backgroundForm);
  margin: 2rem 0;
  padding: 1rem 2rem;
	transition: 0.3s all ease ;
  -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  .cardcotainer{
    width: 20rem;
    display: flex;
    flex-direction: column;
    background-color: aqua;
    margin: 0 0.5rem;
  }
`;


