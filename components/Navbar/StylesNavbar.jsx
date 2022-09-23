import styled from "@emotion/styled";

export const ContainerNav = styled.div`
  display: flex;
  position: sticky;
  justify-content: center;
  justify-content: space-between;
  padding: 0rem 0.75rem 0rem 0.75rem;
  align-items: center;
  width: 100%;
  height: 3.2rem;
  background-color: #272727;
  border-bottom: solid #535353 1px;
`;

export const Seccion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  .imgUser {
    width: 2.3rem;
    height: 2.3rem;
    border-radius: 5rem;
    :hover {
      cursor: pointer;
    }
    
  }
  .browser {
    display: flex;
    width: 14rem;
    background-color: #4d4d4d;
    color: ${({ theme }) => theme.text};
    margin: 0rem 0.7rem 0rem 0.7rem;
    height: 2.2rem;
    align-items: center;
    padding: 0rem 0.75rem 0rem 0.75rem;
    border-radius: 2rem 2rem 2rem 2rem;
    @media(max-width: 1024px){
      width: 100%;
    }

    input{
      border: 0;
      background-color: #4d4d4d;
      outline: none;
      text-align: justify;
      @media(max-width: 1024px){
        display: none;
      }
    }
  }

`;

export const ContainSeccionsViews = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6rem;
  height: 2.8rem;
  transition: all 0.3s;
  font-size: 1.3rem;
  border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
  margin: 0.15rem 0.15rem;
  color: white;
  background-color: ${({isSelected}) => isSelected ? "#4d4d4d" : null };
  :hover {
    background-color: #4d4d4d;
    cursor: pointer;
  }
  @media(max-width: 1024px){
    display: none;
  }
`;

export const ContainSeccionCtrls = styled.div`
  display: flex;
  animation:  ${({ handle }) => handle? "rotation 0.5s" : "rotationReverse 0.5s"};
  @keyframes rotation {
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(720deg);
    }
  }
  @keyframes rotationReverse {
    0%{
      transform: rotate(360deg);
    }
    100%{
      transform: rotate(0deg);
    }
  }
  transition: all 0.5s;
  justify-content: center;
  align-items: center;
  width: 2.2rem;
  height: 2.2rem;
  transition: all 0.3s;
  font-size: 1.1rem;
  border-radius: 5rem;
  margin: 0.25rem 0.25rem;
  background-color: #4d4d4d;
  color: #eee;
  :hover {
    background-color:#7e7e7e;
    cursor: pointer;
  }
  @media(max-width: 1024px){
    display: flex;
  }
`;