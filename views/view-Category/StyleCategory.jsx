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

export const MediumBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 2rem 0;
  flex-wrap: wrap;

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
  background-color: var(--nextui-colors-backgroundForm);
  margin: 1rem;
  border-radius: 1.5rem;
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
    border-radius: 1rem 1rem 0 0;
    bottom: -5rem;
    width: 100%;
    background-color: var(--nextui-colors-backgroundForm) ;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 8rem;
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
        color: var(--nextui-colors-backgroundNavbar);
      }
    }
    .container-content{
      display: flex;
      justify-content: space-between;
      padding: 0 2rem;
      h3{
        font-size: 1rem;
        font-weight: 700;
        color: var(--nextui-colors-backgroundNavbar);
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
      transform: translateY(-62%);
    }
  }
`;