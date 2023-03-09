import styled from "@emotion/styled";

export const ContainerGeneral = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .cotainer-loading{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 35rem;
    
    h1{
      color: var(--nextui-colors-backgroundNavbar);
    }
  }
`;

export const ContainerContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  .container-header{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 22rem;
    overflow: hidden;
    img{
      width: 100%;
      object-fit: cover;
      transition: all ease 0.3s;
    }
  }
  .container-title{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background: linear-gradient(80deg, rgba(12, 12, 12, 0.616), rgba(0,255,0,0) 70.71%),      
                linear-gradient(336deg, rgba(255, 255, 255, 0.075), rgba(0,0,255,0) 70.71%);
    h1{
      color: var(--nextui-colors-backgroundForm);
      font-size: 3rem;
      text-align: center;
      filter: drop-shadow( 0px 0px 10px #b2b2b2)
    }
    @media (max-width: 800px) {
      align-items: flex-end;
      h1{
        font-size: 1.7rem;
      }
    }
    @media (max-width: 400px) {
      h1{
        font-size: 1.2rem;
      }
    }
  }
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 4rem;
  @media (max-width: 1040px) {
    padding:  0 2rem;
  }

  .container-heart-percent{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 5rem;
    padding: 0 2rem;
    background-color: #000000;
    margin: 2rem 0rem;
    border-radius: 1rem;
    background-color: var(--nextui-colors-backgroundForm);
    -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
    h3{
      margin: 0;
      font-weight: 700;
      text-align: center;
      color: var(--nextui-colors-backgroundNavbar);
      @media (max-width: 800px) {
        font-size: 1.2rem;
      }
    }
  };

  .container-discount-condition{
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 0 2rem;
    margin: 2rem 1rem;
    background-color: var(--nextui-colors-backgroundForm);
    -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
    border-radius: 1rem;
    h1{
      font-size: 2rem;
      margin: 0;
      color: var(--nextui-colors-backgroundNavbar);
      @media (max-width: 800px){
        font-size: 1.5rem;
        text-align: center;
      }
    }
    @media(max-width: 1040px){
      padding: 0 0.5rem;
    }
  };
`;


export const Discount = styled.div`
  display:  flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 1rem 0;
  .contain-discount{
    width: 55%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3{
      color: var(--nextui-colors-backgroundNavbar);
      font-size: 800;
    }
    .text-discount{
      display: flex;
      width: 70%;
      p{  
        font-weight: 600;
        text-align: left;
      }
    @media(max-width: 1040px){
      p{
        text-align: justify;
      }
    }
    }
    @media(max-width: 1040px){
      width: 100%;
      flex-direction: column;
    }
  }

`;

export const Conditions = styled.div`
  width: 55%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  h3{
    color: var(--nextui-colors-backgroundNavbar);
    font-size: 700;
  }
  .text-condition{
    display: flex;
    width: 70%;
    p{
      font-weight: 600;
      text-align: left;
    }
  @media(max-width: 1040px){
    p{
      text-align: justify;
    }
  }
  }
  @media(max-width: 1040px){
    width: 100%;
    flex-direction: column;
  }
`;

export const Coverage = styled.div`
  width: 55%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  h3{
    color: var(--nextui-colors-backgroundNavbar);
    font-size: 700;
  }
  .text-coverage{
    display: flex;
    width: 70%;
    p{
      font-weight: 600;
      text-align: left;
    }
    @media(max-width: 1040px){
      p{
        text-align: justify;
      }
    }
  }
  @media(max-width: 1040px){
    width: 100%;
    flex-direction: column;
  }
`;