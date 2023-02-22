import styled from "@emotion/styled";

export const CardGeneral = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  width: 17.5rem;
  height: 22rem;
  background-color: var(--nextui-colors-backgroundForm);
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
    background-color: var(--nextui-colors-backgroundForm) ;
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
      bottom: 0;
    }
  }
`;