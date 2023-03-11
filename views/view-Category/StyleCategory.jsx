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
        background-color: var(--bgInputText);
        cursor: pointer;
      }
      @media (max-width: 1024px){
        :hover{
          background-color: var(--backgroundForm);
        }
      }
    }
    .container-title1 {
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

export const MediumBody = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap:wrap ;
  width: 95%;
  height: 100%;
  border-radius: 0.5rem;
  background-color: var(--backgroundForm);
  margin: 2rem 0;
  padding: 1rem 2rem;
  -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);

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
  position: relative;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  width: 15rem;
  height: 22rem;
  background-color: var(--backgroundForm);
  margin: 1rem;
  border-radius: 1rem;
  -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);

  .container-icon{
    display: flex;
    width: 100%;
    height: 32rem;
    img{
      object-fit: cover;
      border-radius: 1.5rem;
      transition: all ease 0.3s;
      transform: ${({ isSelected }) => isSelected ? "scale(1.2,1.2)" : null};
      /* :hover{
        transform: scale(1.2,1.2);
        cursor: pointer;
      } */
    }
  }

  .container-text{
    position: absolute;
    border-radius: 0.5rem 0.5rem 0 0;
    bottom: -3rem;
    width: 100%;
    background-color: var(--backgroundForm) ;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 6rem;
    overflow: hidden;
    transition: all 0.5s ease;

    p{
      text-align: center;
      font-weight: 600;
    }
    .container-title{
      width: 100%;
      display: flex;
      justify-content: center;
      h3{
        font-size: 1rem;
        font-weight: 700;
        color: var(--backgroundNavbar);
      }
    }
    .container-content{
      display: flex;
      justify-content: space-between;
      padding: 0 2rem;
      h3{
        font-size: 1rem;
        font-weight: 700;
        color: var(--backgroundNavbar);
      }
    }
  }
  :hover{
    cursor: pointer;
    .container-icon{
      img{
        transform: scale(1.1, 1.1);
      }
    }
    .container-text{
      bottom: 0;
    }
  }
`;