import styled from "@emotion/styled";

export const ContainerNewClient = styled.form`
    background-color: var(--nextui-colors-bgCardLogin);
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    @media (max-width: 1024px){
        height: 100%;
    }
`;

export const ContentUp = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding: 1rem;
  .conainer-header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    margin: 0.5rem;
    .container-img,
    .container-title {
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .container-img {
      margin: 0 0.5rem 0 0.5rem;
      width: 3rem;
      height: 3rem;
      font-size: 1.5rem;
      border-radius: 0.2rem;
    }
    .container-title {
      h3 {
        font-size: 1rem;
        margin: 0;
      }
    }
  }
  .content-up {
    display: flex;
    width: 100%;
    height: 100%;
    @media (max-width: 1024px){
        flex-direction: column;
    }
    .content-left,
    .content-right {
      width: 100%;
      height: 100%;
      padding: 0.5rem;
    }
    .content-left {
      .content-credencial {
        margin: 0.5rem 0 0.5rem 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        h3 {
          font-size: 15px;
          color: var(--nextui-colors-textColorCardAnimate);
        }
      }
    }
    .content-right {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      .content-credencial {
        margin: 0.5rem 0 0.5rem 0;
        h3 {
          color: var(--nextui-colors-textColorCardAnimate);
          font-size: 15px;
          color: white;
        }
      }
      .container-id-pocket {
        background-color: var(--nextui-colors-bgIconPrimary);
        padding: 0.25rem;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        border-radius: 0.5rem;
      }
    }
  }
`;

export const ContentDown = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  /* color: var(--nextui-colors-textColorCardAnimate); */
  .content-down {
    padding: 1rem;
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .conainer-header {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      border-top: 1px solid white;
      border-bottom: 1px solid white;
      margin: 0.5rem;
      .container-img,
      .container-title {
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .container-img {
        margin: 0 0.5rem 0 0.5rem;
        font-size: 1.5rem;
        width: 3rem;
        height: 3rem;
        border-radius: 0.2rem;
      }
      .container-title {
        h3 {
          font-size: 1rem;
          margin: 0;
        }
      }
    }
    .container-inputs {
      display: flex;
      width: 100%;
      align-items: center;
      .container-img {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 0 0.5rem 0 0.5rem;
        font-size: 1.8rem;
        width: 3rem;
        height: 3rem;
        color: white;
        background-color: var(--nextui-colors-bgIconPrimary);
        border-radius: 0.2rem;
      }
      .container-info-client {
        background-color: var(--nextui-colors-bgIconPrimary);
        margin: 0.25rem;
        padding: 0.25rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        border-radius: 0.5rem;
        h3 {
          font-size: 15px;
        }
      }
    }
  }
`;