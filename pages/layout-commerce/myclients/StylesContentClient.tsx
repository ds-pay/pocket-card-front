import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem 0 1rem 0;
  width: 100%;
  height: 100%;
    @media(max-width: 1021px){
      flex-direction: column;
      padding-left: 4rem;
    }
    @media(max-width: 800px){
      flex-direction: column;
      padding-left: 0;
    }
    .content-button{
      width: 6rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 0.8rem;
      .button-back{
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.5rem;
        top: 1.98rem;
        left: 10rem;
        width: 10rem;
        height: 3rem;
        font-size: 2rem;
        color: var(--bgInput);
        transition: 0.3s all ease;
        background-color: var(--bgCardLogin);
        :hover{
          cursor: pointer;
          background-color: var(--bgSecondary);
        }
        h2{
          font-size: 1rem;
        }
      }
      @media(max-width: 1021px){
        width: 100%;
        flex-direction: column;
        padding-left: 4rem;
      }
    }
  .container-tabla{
    padding: 0;
    width: 80%;
    height: 100%;
    @media(max-width: 1021px){
      margin-left: 4.8rem;
    }
    @media(max-width: 410px){
      margin-left: 4.5rem;
    }
  }
`