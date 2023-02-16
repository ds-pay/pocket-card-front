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
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 50%;
  height: 100%;
  border-radius: 0.5rem;
  transition: 0.5s all ease;
  background-color: var(--nextui-colors-backgroundForm);
  margin: 2rem 0 1rem 0;
  padding: 1rem 2rem;
  -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
  @media(max-width: 1050px) {
    width: 95%;
  }
  @media(max-width: 500px) {
    width: 100%;
  }
`;

export const IconContactUs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease;
  margin: 0.5rem 0.5rem;
  font-size: 1.5rem;
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  overflow: hidden;
  transform: ${({ isSelected }) => isSelected ? "scale(1.2)" : null};
  -webkit-box-shadow:${({ isSelected }) => isSelected ? " 0px 0px 7px 0px rgba(53, 253, 180, 0.854)" : null};
  -moz-box-shadow:${({ isSelected }) => isSelected ? " 0px 0px 7px 0px rgba(53, 253, 180, 0.854)" : null};
  box-shadow:${({ isSelected }) => isSelected ? " 0px 5px 5px 0px rgba(53, 253, 180, 0.854)" : null};
  img {
    width: 7rem;
    border-radius: 0.5rem;;
  }
  :hover{
    transform: scale(1.2);
    cursor: pointer;
  }
  @media(max-width: 500px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const ContentContactUS = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  transition: 0.3s ease;
  border-radius: 0.5rem;
  margin: 1rem  0 2rem 0 ;
  padding: 1rem 2rem;
  background-color: var(--nextui-colors-backgroundForm);
  -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
  .container-title2 {
    width: 100%;
    display: flex;
    justify-content: center;
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
  @media(max-width: 1050px) {
    width: 95%;
  }
  @media(max-width: 500px) {
    width: 100%;
  }
`;

export const ContainerContact = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .container-button{
    display: flex;
    width: 40%;
    flex-direction: column;
    @media (max-width: 1024px) {
      width: 50%;
    }
  }
`;

export const ContainerHeadEmail = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  .container-text,
  .container-img{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container-text{
    h2{
      margin: 0;
      font-size: 1.4rem;
    }
  }
  .container-img{
    width: 5rem;
    height: 5rem;
    img {
      width: 7rem;
      border-radius: 0.5rem;;
    }
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  width: 100%;
  .container-form{
    margin: 1rem 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    
    .first-forms{
      width: 100%;
      margin: 0.5rem 0;
      display: flex;
      justify-content: space-around;
      @media(max-width: 500px){
        flex-direction: column;
        align-items: center;
      }
      .container-left,
      .container-right{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 45%;
        @media(max-width: 500px){
          width: 95%;   
        }
        .container-inputs{
          display: flex;
          width: 100%;
          align-items: center;
          @media (max-width: 1024px) {
            width: 100%;
          }

          .inputtext {
            background-color: var(--nextui-colors-bgInputText);
            margin: 0.25rem 0rem 0.25rem 0rem;
            padding: 0.25rem 0.25rem 0 0.5rem;
            -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
            -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
            box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
            width: 100%;
            display: flex;
            flex-direction: column;
            border-radius: 0.5rem;
            transition: 0.5s all ease;
            h3 {
              font-size: 15px;
            }
            @media (max-width: 1024px) {
            }
          }
          .img {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin: 0 0.5rem 0 0;
            font-size: 1.8rem;
            width: 3.5rem;
            height: 3rem;
            color: var(--nextui-colors-textFormColor);
            background-color: var(--nextui-colors-bgInputText);
            border-radius: 0.2rem;
            transition: 0.5s all ease;
            -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
            -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
            box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
            @media (max-width: 1024px) {
            }
          }
        }
      }
    }
    .container-button{
      display: flex;
      width: 40%;
      flex-direction: column;
      @media (max-width: 1024px) {
        width: 50%;
      }
    }
    .secund-form{
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0.5rem 0;
      align-items: center;
      .container-inputs{
        display: flex;
        width: 95%;
        align-items: center;
        @media (max-width: 1024px) {
          width: 95%;
        }
        .inputtext {
          background-color: var(--nextui-colors-bgInputText);
          margin: 0.25rem 0rem 0.25rem 0rem;
          padding: 0.25rem 0.25rem 0 0.5rem;
          -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
          -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
          box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
          width: 100%;
          display: flex;
          flex-direction: column;
          border-radius: 0.5rem;
          transition: 0.5s all ease;
          h3 {
            font-size: 15px;
          }
          @media (max-width: 1024px) {
          }
        }
        .img {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          margin: 0 0.5rem 0 0;
          font-size: 1.8rem;
          width: 3rem;
          height: 3rem;
          color: var(--nextui-colors-textFormColor);
          background-color: var(--nextui-colors-bgInputText);
          border-radius: 0.3rem;
          transition: 0.5s all ease;
          -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
          -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
          box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
          @media (max-width: 1024px) {
          }
        }
      }
    }
    .third-form{
      width: 100%;
      display: flex;
      justify-content: center;
      .input-textarea{
        width: 95%;
        background-color: var(--nextui-colors-bgInputText);
        margin: 1rem 0.25rem;
        padding: 0.25rem 0.25rem 0 0.5rem;
        -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
        -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
        box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
        border-radius: 0.3rem;
        transition: 0.5s all ease;
      }
    }
  }
`;

export const ContainerHeadPhone = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  .container-text,
  .container-img{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container-text{
    h2{
      margin: 0;
      font-size: 1.4rem;
    }
  }
  .container-img{
    width: 5rem;
    height: 5rem;
    img {
      width: 7rem;
      border-radius: 0.5rem;;
    }
  }
`;

export const ContainerHeadWhatsapp = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  .container-text,
  .container-img{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container-text{
    h2{
      margin: 0;
      font-size: 1.4rem;
    }
  }
  .container-img{
    width: 5rem;
    height: 5rem;
    img {
      width: 7rem;
      border-radius: 0.5rem;;
    }
  }
`;
