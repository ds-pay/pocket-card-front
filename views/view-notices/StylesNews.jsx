import styled from "@emotion/styled";

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

export const ContentNews = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap:wrap ;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  background-color: var(--nextui-colors-backgroundForm);
  margin: 2rem 0;
  padding: 1rem 2rem;
  -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
  .title-notice{
    margin: 2.5rem 0 0 0;
    @media(max-width: 1336px){
      font-size: 1.8rem;
      color: var(--nextui-colors-backgroundNavbar);
    }
  }
  .container-buttonback{
    position: absolute;
    left: 1rem;
  }
  .container-text{
    display: flex;
    justify-content: space-evenly;
    padding: 2rem 0;

    .container-img {
      margin: 0 2rem;
      width: 40rem;
      height: 40rem;
      font-size: 1.5rem;
      border-radius: 1rem;
      overflow: hidden;
      -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
      -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
      box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 0.5rem;
      }
    }
    .container-description{
      margin: 0 1rem;
      display: flex;
      flex-direction: column;
      width: 55%;
      h2{
        text-align: left;
        color: var(--nextui-colors-backgroundNavbar);
      }
      p{
        text-align: justify;
        font-weight: 600;
      }
      @media(max-width: 1336px){
        h2{
          font-size: 1.5rem;
        }
      }
      .container-links{
        margin: 1rem 0;
        width: 100%;
        @media(max-width: 1336px){
          h2{
            font-size: 1.5rem;
          }
        }
      }
    }
    @media (max-width: 1024px){
      flex-direction: column;
      align-items: center;
      .container-img{
        width: 100%;
        height: 20rem;
      }
      .container-description{
        width: 100%;
        padding: 1rem 0;
        h2{
          text-align: center;
        }
      }
    }
  }
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
  :hover{
    .container-title{
      bottom: 0;
    }
  }

`;

export const ContentLinks = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin: 0.5rem 0; 
`;

export const LinkUrl = styled.div`
  display: flex;
  margin: 0.5rem 0;
  /* h3{
    margin: 0;
    font-weight: 400;
  } */
`;