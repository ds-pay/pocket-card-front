import styled from "@emotion/styled";

export const ContainerFooter = styled.div`
  display: flex;
  width: 100%;
  height: 20rem;
  background: linear-gradient(180deg, var(--nextui-colors-backgroundNavbar) , var(--nextui-colors-backGradiente2) );
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .divFooterPrimary{
    height: 80%;
    width:90%;
    max-width: 1600px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    .sectionFooter{
      width: 30%;
      height: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h1{
        font-size: 1.2rem;
        color: white;
        margin: 2rem 0 2rem 0;
      }
      button{
        width: 16rem;
        height: 3rem;
        border-radius: 1rem;
        background-color: var(--nextui-colors-bgCardLogin);
        border: none;
        color: white;
        transition: all 0.5s;
        font-size: 1.2rem;
        padding: 0.2rem 0 0.2rem 0 ;
        :hover{
          cursor: pointer;
          background-color: white;
          color: black;
          transform: scale(1.1, 1.1);
        }
      }
    }
  }
  .divFooterSecundary{
    height: 30%;
    width:90%;
    max-width: 1600px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    h1{
      margin: 0;
      font-size: 1.3rem;
    }
    
  }
  @media (max-width: 1000px){
    height: 30rem;
    .divFooterPrimary{
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .sectionFooter{
        height: 100%;
        width: 100%;
        h1{
          margin: 0;
        }
        button{
          margin: 1rem 0rem 0rem 0rem;
          font-size: 1rem;
          width: 13rem;
        }
      }
    }
    .divFooterSecundary{
      align-items: center;
      h1{
        font-size: 0.75rem;
        text-align: justify;
      }
    }
  }
`
