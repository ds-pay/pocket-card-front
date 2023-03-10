import styled from "@emotion/styled"

export const Header = styled.div`
  display: flex;
  justify-content: space-between;  
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  background-color: var(--backgroundForm);
  margin: 2rem 0;
  padding: 1rem 2rem;
  -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
  color: var(--textColorDark);
    .container-img,
    .container-title,
    .container-butonback {
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
      width: 8rem;
      @media (max-width: 1024px){
      }
    }
    .container-title {
      h3 {
        font-size: 2.2rem;
        margin: 0;
      }
      h2 {
        font-size: 2.2rem;
        margin: 0;
      }
    }
`;