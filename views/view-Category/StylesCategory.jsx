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
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5rem;
    width: 100%;
    height: 10rem;
    background: linear-gradient(0deg, var(--nextui-colors-backgroundNavbar) , var(--nextui-colors-backGradiente2) );
    color: var(--nextui-colors-colorTextOrdinary);

    h1{
        font-size: 2rem;
        @media(max-width: 1336px){
          font-size:1.5rem;
        }
    }
`;

export const MediumBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .container-categorys{
    display: flex;
    width: 100%;
    height: 15rem;
    justify-content: center;
  }
  
`;

export const CardCategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 10rem;
  height: 14rem;

  .container-icon{
    display: flex;
    img{
      width: 5rem;
    }
  }
  .container-title{
    display: flex;
    h3{
      font-size: 1rem;
    }
  } 
`;


export const ContentCategory = styled.div`
  display: flex;
  width: 100%;
  height: 10rem;
  justify-content: center;
  align-items: center;
  .seleccion{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    h3{
      font-size: 3rem;
      color: var(--nextui-colors-backGradiente2);
    }
  }
`;