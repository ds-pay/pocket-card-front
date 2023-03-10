import styled from "@emotion/styled";

export const ContainerCardForm = styled.form`
  background-color: var(--backgroundForm);
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
    background: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }

  .inputtext {
    z-index: 0;
    background-color: var(--bgInputText);
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
      background-color: var(--backgroundForm);
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
    color: var(--textFormColor);
    background-color: var(--bgInputText);
    border-radius: 0.2rem;
    transition: 0.5s all ease;
    -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
    @media (max-width: 1024px){
      background-color: var(--backgroundForm);
    }
  }
`;


export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-top: 1px solid var(--textlowContrast);
  border-bottom: 1px solid var(--textlowContrast);
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
      background-color: var(--bgInputText);
      cursor: pointer;
    }
    @media (max-width: 1024px){
      :hover{
        background-color: var(--backgroundForm);
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
  margin: 2rem 0;
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
      @media (max-width: 1024px) {
        margin: 0.5rem 0;
      }
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
    @media (max-width: 600px) {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const ContainInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 2rem 0;
  justify-content: center;
  align-items: center;
  .container-left, .container-right{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }
  .container-left{
  }
  .container-right{
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const DivLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 0.5rem;
  width: 100%;
	  h3 {
	    font-size: 15px;
      color: var(--textFormColor);
      margin: 0.1rem 0 0 0;
    }
		.container-input{
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
		}
`;

export const InputTextview = styled.input`
    height: 100%;
    height: 3rem;
    background-color: var(--bgInputText);
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
    border: ${(({ isEditing }) => isEditing ? null : "none")};

    @media (max-width: 1024px) {
      background-color: var(--backgroundForm);
    }
`;

export const ContainText = styled.div`
  margin: 1rem 0;
  padding: 0 0.5rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  
  h1{
    font-size: 1rem;
    margin: 0.5rem 0;
    font-weight: 500;
  }
  .inputlink{
    width: 100%;
    display: flex;
    margin: 0.6rem 0;
    .link-button{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  }
  .inputkeyselect{
    width: 100%;
  }
  /* .textarearray{
    margin: 0 0.5rem;
    width: 100%;
  } */
  .contain{
    width: 100%;
    margin: 1rem 0;
    .contain-input {
      width: 100%;
      margin: 0rem 0rem;
      height: 5rem;
      padding: 0rem 0.5rem ;
      border-radius: 0.3rem;
      background-color: var(--bgInputText);
      -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
      -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
      box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
      @media (max-width: 1024px) {
        background-color: white;
      }
  
    };
  }
`;

// export const ContainInputText = styled.div`
//   display: flex;
//   width: 100%;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   @media (max-width: 1000px) {
//     flex-direction: column;
//   }

// `;