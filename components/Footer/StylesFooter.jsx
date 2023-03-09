import styled from "@emotion/styled";

export const ContainerFooter = styled.footer`
  margin-top:3rem ;
  display: flex;
  z-index: 100;
  width: 100%;
  height: 21rem;
  padding: 2rem 0 0.5rem 0;
  transition: 0.3s;
  /* background: linear-gradient(180deg, var(--nextui-colors-backgroundNavbar) , var(--nextui-colors-backGradiente2) ); */
  background-color: var(--nextui-colors-backgroundNavbar);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .divFooterSecundary{
    margin: 1rem 0;
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

export const RedSocial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  width: 4rem;
  background-color: var(--nextui-colors-backgroundNavbar);
  h2{
    transition: all ease 0.3s;
    margin: 1rem 2rem;
    color: #ededed;
    margin: 0;
    :hover{
      transform: scale(1.2);
      cursor: pointer;
    }
  }
  @media(max-width: 1430px){
    width: 2.5rem;
  }
`;

export const ContentSocial = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 4rem;  
  justify-content: space-around;
  align-items: center;
  .line-whidth{
    position: absolute;
    width: 100%;
    height: 0.1rem;
    background-color: white;
    border-radius: 5rem 6rem 6rem 0rem;
  }
  .container-social{
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
    border-radius: 0.5rem;
    transition: 0.3s;
    @media(max-width: 1430px){
      padding: 0 0 0 0;
    } 
  }
`;

export const ButtonUrl = styled.div `
  height: 80%;
  width:90%;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .sectionFooter{
    margin-top: 1rem;
    margin:  0.5rem 2rem;
    padding: 0 0.5rem;
    width: 15rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: white;
    border-radius: 1rem;
    -webkit-box-shadow: 0px 0px 7px 0px rgba(149, 149, 149, 0.591);
    -moz-box-shadow: 0px 0px 7px 0px rgba(149, 149, 149, 0.591);
    box-shadow: 0px 5px 5px 0px rgba(149, 149, 149, 0.591);
    transition: all ease 0.3s;
    h2{
      font-size: 2.4rem;
      margin: 0;
    }
    h3{
      font-size: 0.9rem;
      margin: 0;
    }
    :hover{
      cursor: pointer;
      transform: scale(1.1);
    }

      /* h1{
        font-size: 1.2rem;
        color: white;
        margin: 2rem 0 2rem 0;
      } */
      /* button{
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
      } */
    }
    @media (max-width: 1000px){
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      .sectionFooter{
        margin: 0.5rem 0;
        padding: 0 0.2rem;
        width: 12rem;
        height: 5rem;
        flex-direction: row;
        justify-content: space-around;
        h2{
          font-size: 2.5rem;
        }
        h3{
          font-size: 0.8rem;
        }
      }
    }
`;

export const ContentBottom = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 2rem;
  @media(max-width: 740px){
    flex-direction: column;
    align-items: center;
  }
`;

export const ContainerApp = styled.div`
  display: flex;
  width: 20%;
  justify-content: center;
  align-items: center;
  z-index: 1;
  color: white;
  transition: 0.3s;
  background-color: var(--nextui-colors-backgroundNavbar);
  h2{
    margin: 0;
  }
  h3{
    transition: 0.3s;
    margin: 0 0.5rem;
  }
  @media(max-width: 1430px){
    width: auto;
    h3{
      display: none;
    }
  } 
`;

export const TitleText = styled.div`
  height: 100%;
  margin: 0.5rem 0;
  .title{
    display: flex;
    transition: 0.3s all ease;
    color: #ffffff;
    h2{
      font-size: 1.4rem;
      margin: 0 0.2rem;
    }
    /* :hover{
      color: #b4b4b4;
      cursor: pointer;
    } */

    .arrow{
      display: none;
      justify-content: center;
      align-items: center;
      transition: 0.3s all ease;
      transform: ${({ isId }) => isId ? "rotate(180deg)" : null };
      @media(max-width: 740px){
        flex-direction: column;
        display: flex;
      }
    }
  }
  .sub-labels{
    display: flex;
    flex-direction: column;
    margin: 0.5rem 0;
    padding: 0 1rem 0rem 2rem;
    height: 6rem;
    justify-content: space-around;
    overflow: hidden;
    transition: .3s all ease;
    h2{
      color: #b4b4b4;
      transition: 0.3s all ease;
      margin: 0;
      text-decoration: none;
      list-style: none;
      font-size: 1rem;
      :hover{
        color: white;
        cursor: pointer;
      }
    }
    @media(max-width: 740px){
      transition: 0.3s all ease;
      height: ${({ isId }) => isId ? "8rem" : "0" };
    }
  }
  @media(max-width: 740px){
    flex-direction: column;
  }
`;