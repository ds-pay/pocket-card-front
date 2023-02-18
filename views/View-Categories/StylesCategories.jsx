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
  align-items: center;
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
      width: 8rem;
      @media (max-width: 1024px){
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