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
  background-color: var(--backgroundForm);
  margin: 1rem;
  border-radius: 1rem;
  -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);

  .button-share{
    position: absolute;
    z-index: 1;
    display: flex;
    transform: translate(-180%);
    top: 1rem;
    left: 10px;
    justify-content: flex-start;
    align-items: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.5rem;
    transition: 0.5s all ease;
    background-color: #ffffff /*var(--backgroundForm)*/ ;
    padding: 0 0.6rem ;
    color: black /*var(--textColorDark)*/;
    overflow: hidden;
    h4{
      font-size: 2rem;
      margin: 0;
      font-size: 1.2rem;
    }
    h2{
      margin: 0;
      font-size: 1.2rem;
      font-weight: 500;
      margin: 0 0.3rem;
      opacity: 0;
      transition: 0.5s all ease;
    }
    :hover{
      width: 8rem;
      h2{
        opacity: 1;
      }
    }
  }
  .container-icon{
    display: flex;
    width: 100%;
    height: 32rem;
    img{
      object-fit: cover;
      width: 100%;
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
    background-color: #ffffff /*var(--backgroundForm)*/ ;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 6rem;
    overflow: hidden;
    transition: all 0.5s ease;
    color: black /*var(--textColorDark)*/;
    p{
      text-align: center;
      font-weight: 600;
    }
    .container-title,
    .container-share{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      h3{
        font-size: 1rem;
        font-weight: 700;
      }
      h2{
        font-size: 1.1rem;
        margin-bottom: 1rem;
      }
    }
    .container-content{
      display: flex;
      justify-content: space-between;
      padding: 0 2rem;
      h3{
        margin: 0 0 1rem 0;
        font-size: 1.1rem;
        font-weight: 700;
      }
    }
  }
  :hover{
    cursor: pointer;
    .button-share{
      transform: translate(0);
    }
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
