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
  display: flex;
  justify-content: space-between;  
  width: 95%;
  height: 100%;
  border-radius: 0.5rem;
  background-color: var(--backgroundForm);
  margin: 2rem 0;
  padding: 1rem 2rem;
  -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
    .container-img,
    .container-title,
    .container-butonback {
      color: var(--textFormColor);
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
      overflow: hidden;
      img {
        width: 7rem;
        border-radius: 0.5rem;
      }
    }
    .container-butonback{
      margin: 0.5rem 0.5rem;
      font-size: 2rem;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 0.2rem;
      :hover{
        background-color: var(--bgInputText);
        cursor: pointer;
      }
      @media (max-width: 1024px){
        :hover{
          background-color: var(--backgroundForm);
        }
      }
    }
    .container-title {
      h3 {
        font-size: 2.2rem;
        margin: 0;
      }
      h2 {
        font-size: 2.2rem;
        margin: 0;
        color: var(--backgroundNavbar);
      }
    }
`;

export const ContainerBonus = styled.div`
  display: flex;
  width: 95%;
  height: 100%;
  justify-content: center;
    flex-wrap: wrap;
`;

export const CardBonus = styled.div`
  width:19rem ;
  height: 14rem;
  border-radius: 1.5rem;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  background-color: var(--backgroundForm);
  margin: 1rem;
  .container-img{
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      width: 100%;
    }
  }
  .container-button{
    transition: 0.4s all ease;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    .button{
      transition: 0.4s all ease;
      opacity: 0;
    }
  }
  :hover{
    .container-button{
      background-color: #00000053;
      .button{
        display: flex;
        opacity: 1;
      }
    }
  }

`;

export const ContentBond = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;  
  width: 95%;
  height: 100%;
  border-radius: 0.5rem;
  background-color: var(--backgroundForm);
  margin: 2rem 0;
  padding: 1rem 2rem;
  -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
  .container-terms{
    display: flex;
    margin: 0.5rem 0;
    li{
      margin: 0;
      font-size: 1.3rem;
    }
  }
  .cotainer-button-down{
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    padding: 0 30%;
  }
`;