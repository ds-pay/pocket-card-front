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
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 100%;
  border-radius: 0.5rem;
  background-color: var(--backgroundForm);
  margin: 2rem 0 1rem 0;
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
      overflow: hidden;
      img {
        width: 7rem;
        border-radius: 0.5rem;
      }
    }
    .container-butonback{
      left: 0;
      position: absolute;
      width: 8rem;
      @media (max-width: 1024px){
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
        color: var(--backgroundNavbar);
      }
    }
  @media (max-width: 1024px){
    .container-title1{
      width: 100%;
      justify-content: flex-end;
      h2{
        font-size: 1.5rem;
      }
    }
  }
`;

export const ContentQuestions = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--backgroundForm);
  margin: 1rem 0 2rem 0;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
  h2 {
    font-size: 1.7rem;
    margin: 0;
    color: var(--backgroundNavbar);
  }
  p{
    font-size: 1.2rem;
    font-weight: 500;
    padding: 0.8rem 2rem;
    text-align: justify;
  }
  .container-quiestions{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 1rem 0 1rem 0;
    border-radius: 0.5rem;
  }
  @media (max-width: 1024px){
    h2{
      font-size: 1.2rem;
    }
    p{
      font-size: 0.9rem;
      padding: 1rem 0;
    }
  }
`;