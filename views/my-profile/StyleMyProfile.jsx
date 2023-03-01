import styled from "@emotion/styled"

export const ContainerGeneral = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
  .container-header {
    width: 100%;
    margin: 1rem 0;  
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-top: 1px solid var(--nextui-colors-textlowContrast);
    border-bottom: 1px solid var(--nextui-colors-textlowContrast);
    .container-img,
    .container-title {
      color: var(--nextui-colors-textFormColor);
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
        font-size: 1.1rem;
        margin: 0;
      }
    }
  }
`;

export const BodyUser = styled.ol`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--nextui-colors-backgroundForm);
  border-radius: 0.5rem;
  margin: 1rem 0;
  -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
  color: #353979;
  overflow: hidden;
`;

export const ContainerUser = styled.div`
  display: flex;
  justify-content: center;
  width: 70%;
  @media(max-width: 1024px){
    width: 100%;
  }
`;

export const HeaderUser = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  width: 100%;
  height: 15rem;
  background-color: #4c52ad;
  position: relative;
  padding: 0 0.3rem;
    .content-edit{
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 1rem;
      width: 2rem;
      height: 2rem;
      position: absolute;
      bottom: 1rem;
      right: 2rem;
      transition: all ease 0.5s ;
      background-color: #dfdfdf;
      .contain-logo, .contain-name {

      }
      .contain-logo {
        margin: 0.6rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .contain-name {
        display: flex;
        justify-content: center;
        align-items: center;
        white-space: normal;
        overflow: hidden;
        font-size: 1.5rem;
        font-weight: 600;
        h3{
          font-size: 1rem;
          margin: 0;
        }
      }
      :hover{
        width: 6rem;
        cursor: pointer;
      }
    }
  @media(max-width: 1024px){
    padding: 1rem 0;
    flex-direction: column;
    justify-content: space-between;
    height: 18rem;
  }
`;

export const DataUser = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem;
  margin: 2rem 0;
  .container-cards{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media(max-width: 1024px){
    padding: 0;
  }
`;

export const ContentUSer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 50%;
    .name-user{
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 50%;
      height: 100%;
      left: 17rem;
      color: #e6e6e6;
      h2{
        font-size: 1.8rem;
        margin: 0 1rem;
      }
      h3{

        margin: 0 1rem;
      }
      h4{
        margin: 0;
      }
    }
    .img-user{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30%;
      padding: 0.5rem;
      margin: 0 0.7rem;
      overflow: hidden;
      border-radius: 10rem;
      background-color: #ebeef3;
      -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
      -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
      box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
      img{
        border-radius: 10rem;
      }
    }
  @media(max-width: 1024px){
    width: 100%;
    justify-content: center;
    margin: 0.5rem 0;
    .name-user{
      h2{
        font-size: 1rem;
      }
    }
    .img-user{
      width: 8rem;
      img{

      }
    }
  }
`;


export const CardDate = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0.5rem 0;
  background-color: #f7f7f7c6;
  border-radius: 0.5rem;
  .title{
    width: 30%;
    display: flex;
    h2{
      font-size: 1.2rem;
      margin: 0 1rem;
      color: #2d2d2d;
    }
  }
  .content{
    width: 20%;
    padding: 0 1rem;
    h2{
      font-size: 1.1rem;
      color: #575757;
    }
  }
  @media(max-width: 1024px){
    .title{
      width: 100%;
    }
    .content{
      width: 100%;
      text-align: right;
    }
  }
`;

export const ContactUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  width: 50%;
  .section{
    width: 50%;
    display: flex;
    .section-icon, .section-label{
      h2{
        font-size: 1rem;
        margin: 0 0.3rem;
        color: white;
      }
    }
  }
  @media(max-width: 1024px){
    width: 100%;
    flex-direction: row;
    overflow-x: scroll;
    .section{
      margin: 0 0.5rem;
      .section-icon, .section-label{
      }
    }
  }
`;

export const ContainerSelection = styled.div`
  width: 100%;
  padding: 0 0.2rem;
  display: flex;
  justify-content: flex-start;
  background-color: #4c52ad8d;
  @media(max-width: 1024px){
    justify-content: center;
  }
`;

export const SectionProfile = styled.div`
  margin: 0rem 0.5rem;
  padding: 0.6rem;
  transition: all ease 0.5s;
  border-top: ${({ isSelected }) => isSelected ? "solid white 5px" : "solid transparent 5px"};
  border-bottom: solid transparent 5px;
  border-radius: 0.2rem;
  color: ${({ isSelected }) => isSelected ? "white" : "#22276af5"} ;
  .section-selected{
    display: flex;
    justify-content: center;
    align-items: center;
    h3{
      margin: 0;
      font-size: 1.2rem;
    }

  };
  :hover{
    color: white;
    cursor: pointer;
    border-top: solid white 5px;
  }
  @media(max-width: 1024px){
    .section-selected{
      h3{
        font-size: 1rem;
      }
    }
  }
`;