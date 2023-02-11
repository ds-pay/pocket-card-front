import styled from "@emotion/styled";

export const ContainerGeneral = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;


export const BodyHeader = styled.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 2px solid #c9c9c9b8;
    border-bottom: 2px solid #c9c9c9b8;
    margin: 2rem 0;
    .container-img,
    .container-title,
    .container-butonback {
      color: var(--nextui-colors-textFormColor);
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.3s ease;
    }
    .container-img {
      margin: 0.5rem 0.5rem;
      font-size: 1.5rem;
      width: 7rem;
      height: 7rem;
      border-radius: 0.2rem;
      img {
        width: 7rem;
      }
    }
    .container-butonback{
      margin: 0.5rem 0.5rem;
      font-size: 2rem;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 0.2rem;
      :hover{
        background-color: var(--nextui-colors-bgInputText);
        cursor: pointer;
      }
      @media (max-width: 1024px){
        :hover{
          background-color: var(--nextui-colors-backgroundForm);
        }
      }
    }
    .container-title {
      h3 {
        font-size: 3.5rem;
        margin: 0;
      }
    }
`;
