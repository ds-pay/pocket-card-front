import styled from "@emotion/styled"

export const ContainerGeneral = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 3%;
  justify-content: center;
  align-items: center;
`;

export const BodyUser = styled.ol `
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  background-color: var(--nextui-colors-backgroundForm);
  border-radius: 0.5rem;
  margin: 1rem 0;
  padding: 1rem 2rem;
  -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
  .container-img-user{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    .img-user{
      display: flex;
      width: 15rem;
      padding: 1.5rem;
      overflow: hidden;
      border-radius: 10rem;
      background-color: aqua;
      background-color: var(--nextui-colors-bgInputText);
      -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
      -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
      box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
      img{
        border-radius: 10rem;
      }
    }
  }
`;

