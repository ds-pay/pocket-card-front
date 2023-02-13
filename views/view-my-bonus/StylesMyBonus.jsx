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
      h2 {
        font-size: 2.2rem;
        margin: 0;
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
  background-color: var(--nextui-colors-backgroundForm);
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


export const ContentModal = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .container-title{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--nextui-colors-backgroundNavbar);
    color: white;
    width: 100%;
  }
  .container-img{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    img{
      width: 50%;
      border-radius: 1.1rem;
    }
  }
  .content-text{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    .content-code{
      display: flex;
      width: 100%;
      h2{
        text-align: left;
      }
    }
    .container-paragraph{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      flex-direction: column;
      p{
        text-align: justify;
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
  background-color: var(--nextui-colors-backgroundForm);
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
`;