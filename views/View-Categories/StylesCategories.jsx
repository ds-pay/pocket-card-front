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
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 2px solid #c9c9c9b8;
    border-bottom: 2px solid #c9c9c9b8;
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
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 0.2rem;
      
    }
    /* .container-butonback{
      margin: 0.5rem 0.5rem;
      font-size: 1.5rem;
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
        font-size: 1rem;
        margin: 0;
      }
    } */
`;

export const MediumBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .container-categories{
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }
  
`;

export const CardCategory = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0.7rem 0;
  align-items: center;
  flex-direction: column;
  width: 15rem;
  height: 22rem;
  background-color: var(--nextui-colors-backgroundForm) ;
  margin: 1rem;
  border-radius: 1.5rem;
  -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);

  .container-icon{
    display: flex;
    img{
      width: 6rem;
      transition: all ease 0.3s;
      transform: ${({ isSelected }) => isSelected ? "scale(1.2,1.2)" : null};
      /* :hover{
        transform: scale(1.2,1.2);
        cursor: pointer;
      } */
    }
  }
  .container-title{
    display: flex;
    h3{
      font-size: 1rem;
      font-weight: 700;
      margin: var(--nextui-space-5) 0;
      color: var(--nextui-colors-backgroundNavbar);
    }
  }
  .container-text{
    width: 80%;
    height: 8rem;
    overflow: hidden;
    margin:0 0 0.8rem 0;
    p{
      text-align: center;
      font-weight: 600;
    }
  }
  .container-button{
    width: 70%;
  } 
`;


export const ContentCategory = styled.div`
  display: flex;
  width: 100%;
  height: 10rem;
  justify-content: center;
  align-items: center;
  .seleccion{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    h3{
      font-size: 3rem;
      color: var(--nextui-colors-backGradiente2);
    }
  }
`;