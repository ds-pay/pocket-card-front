import styled from "@emotion/styled";

export const ContainerCardForm = styled.form`
  background-color: var(--nextui-colors-backgroundForm);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 1024px) {
    height: 46rem;
    width: 100%;
    justify-content: flex-start;
    overflow: hidden;
    overflow-y: scroll;
    background: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }

  .inputtext {
    z-index: 0;
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
    @media (max-width: 1024px){
      background-color: var(--nextui-colors-backgroundForm);
    }
  }
  .img {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 0.5rem 0 0.5rem;
    font-size: 1.8rem;
    width: 3rem;
    height: 3rem;
    color: var(--nextui-colors-textFormColor);
    background-color: var(--nextui-colors-bgInputText);
    border-radius: 0.2rem;
    transition: 0.5s all ease;
    -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
    @media (max-width: 1024px){
      background-color: var(--nextui-colors-backgroundForm);
    }
  }
`;


export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-top: 1px solid var(--nextui-colors-textFormColor);
  border-bottom: 1px solid var(--nextui-colors-textFormColor);
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
    margin: 0.4rem 0.4rem;
    font-size: 1.5rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.2rem;
      
  }
  .container-butonback{
    margin: 0.4rem 0.4rem;
    font-size: 1.5rem;
    width: 1.5rem;
    height: 1.5rem;
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
  }
`;

export const ContainImages = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  @media (max-width: 1024px) {
    padding: 0.5rem;
  }
  .container-images{
    display: flex;
    width: 100%;
    align-items: flex-start;
    justify-content: space-evenly;
    .img{
      padding: 2rem;
      width: 13rem;
      height: 13rem;
      img{
        border-radius: 1rem;
        width: 9rem;
        object-fit: cover;
      } 
      h3{
        font-size: 1.2rem;
        margin: 0;
      };
    }
  }
`;