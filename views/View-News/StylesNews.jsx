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
  background-color: var(--nextui-colors-backgroundForm);
  margin: 2rem 0;
  padding: 1rem 2rem;
  -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
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
        font-size: 2.2rem;
        margin: 0;
      }
      h2 {
        font-size: 2.2rem;
        margin: 0;
        color: var(--nextui-colors-backgroundNavbar);
      }
    }
`;

export const ContentNews = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap:wrap ;
  width: 95%;
  height: 100%;
  border-radius: 0.5rem;
  background-color: var(--nextui-colors-backgroundForm);
  margin: 2rem 0;
  padding: 1rem 2rem;
  -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
  /* .container-terms{
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
  } */
`;

export const CardNews = styled.div`
  width:17rem ;
  height: 20rem;
  border-radius: 1.5rem;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  background-color: var(--nextui-colors-backgroundForm);
  margin: 1rem;
  -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
  .container-img{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 150%;
    height: 100%;
    img{
      width: 100%;
    }
  }
  .container-title{
    width: 100%;
    height: 6rem;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    bottom: -3.5rem;
    border-radius: 0.3rem 0.3rem 0 0;
    padding: 0.5rem 0.5rem;
    transition: 0.3s all ease;
    background-color: var(--nextui-colors-backgroundForm);    
    h2{
      text-align: center;
      font-size: 1rem;
    }
    .container-button{
      display: flex;
      width: 100%;
      justify-content: center;
      flex-direction: column;
      padding: 0 2rem;
    }
  }
  /* .container-button{
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
  } */
  :hover{
    .container-title{
      bottom: 0;
    }
    /* .container-button{
      background-color: #00000053;
      .button{
        display: flex;
        opacity: 1;
      }
    } */
  }

`;