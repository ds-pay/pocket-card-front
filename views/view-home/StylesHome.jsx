import styled from "@emotion/styled";

export const ContentBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 0 3%;
    height: 100%;
`;

// export const ContentPock = styled.div`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 1rem;
//     width: 100%;
//     background: linear-gradient(0deg, var(--backgroundNavbar) , var(--backGradiente2) );

//     h1{
//       font-size: 2rem;
//       color: var(--textColorDark);
//       @media(max-width: 1336px){
//         font-size:1.5rem;
//       }
//     }
//     .privilagios{
//         width: 25%;
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//         @media(max-width: 1336px){
//             width: 18rem;

//         }
//         @media(max-width: 450px){
//             flex-direction: column-reverse;
//             align-items: flex-end;
//             h1{
//                 display: none;
//             }
//         }
//         .boxpocket{
//             width: 7rem;
//             height: 7rem;
//         }
//     }
// `;

export const BodyHeader = styled.div`
  display: flex;
  justify-content: space-between;  
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  background-color: var(--backgroundForm);
  margin: 2rem 0;
  padding: 1rem 2rem;
	transition: 0.5s all ease ;
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
			@media(max-width: 500px){
				h3{
					font-size: 1rem;
				}
				h2{
					font-size: 1.5rem;
				}
			}
			@media(max-width: 500px){
				h3{
					font-size: 1rem;
				}
				h2{
					font-size: 1rem;
				}
			}
    }
  @media(max-width: 825px) {
    width: 100%;
    padding: 1rem 1rem;
  }
`;


export const BodyHead = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  background-color: var(--backgroundForm);
  margin: 2rem 0;
  padding: 1rem 2rem;
	transition: 0.3s all ease ;
  -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
  color: var(--textColorDark);
    @media(max-width: 1336px){
      height: 17rem;
    }
    @media(max-width: 600px){
      height: 24rem;
    }

    h1{
      font-size: 2rem;
      @media(max-width: 1336px){
        font-size: 1.3rem;
      }
    }
    p{
      text-align: center;
      font-weight: 500;
      padding: 1rem 2rem;	
    }
    @media(max-width: 825px) {
      width: 100%;
      padding: 0 0.5rem;
      p{
        padding: 1rem 1rem;
        text-align: justify;
        @media(max-width: 450px){
          font-size: 0.8rem;
          text-align: justify;
        }
      }

    }
`;

export const ActivationCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  border-radius: 0.5rem;
  background-color: var(--backgroundForm);
  margin: 2rem 0;
  padding: 1rem 2rem;
	transition: 0.3s all ease ;
  -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
  color: var(--textColorDark);	
  h2{
    margin: 0.5rem 0;
    font-size: 2rem;
  }
  @media(max-width: 1336px){
    height: 52rem;
    justify-content: flex-start;
    padding: 1rem;
    h2{
      text-align: center;
      font-size: 1.5rem;
    }
  }
  @media(max-width: 800px){
    height: 99rem;
    justify-content: flex-start;
    h2{
      text-align: center;
    }
  }
`;

export const ContainerCard = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 20rem;
		margin: 1rem 0;
		transition: 0.3s all ease ;
    @media(max-width: 1340px){
        width: 100%;
        flex-wrap: wrap;
        justify-content: center;
        padding: 1rem;
    }
`;

export const Card = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 20rem;
    width: 18rem;
    background-color:var(--bgInputText) ;
    color: black;
    border-radius: 2rem;
    padding: 0 0.2rem;
		margin: 0 1.5rem;
    @media(max-width: 1336px){
        margin: 1rem;
    }
    .img{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 8rem;
        height: 8rem;
        border-radius: 50rem;
        object-fit: cover;
        img{
            width: 7rem;
            height: 7rem;
        }
      }
      .numberindex{
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        top: 1rem;
        left: -2.5rem;
        width: 4.5rem;
        height: 4.5rem;
        background-color: #21c69b;
        border: 5px solid var(--backgroundForm);
        border-radius: 50rem;
        @media(max-width: 1336px){
          width: 4rem;
          height: 4rem;
          left: -2rem;
        }
      }
      h3{
        margin: 0;
      }
      
    p{
        text-align: center;
        padding: 0 1rem;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
`;