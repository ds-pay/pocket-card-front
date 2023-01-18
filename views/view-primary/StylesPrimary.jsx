import styled from "@emotion/styled";

export const ContentBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const ContentPock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    width: 100%;
    height: 10rem;
    background: linear-gradient(0deg, var(--nextui-colors-backgroundNavbar) , var(--nextui-colors-backGradiente2) );
    color: var(--nextui-colors-textFormColor);

    h1{
        font-size: 2rem;
        @media(max-width: 1024px){
            font-size:1.5rem;
        }
    }
    .privilagios{
        width: 25%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media(max-width: 1024px){
            width: 18rem;

        }
        @media(max-width: 450px){
            flex-direction: column-reverse;
            align-items: flex-end;
            h1{
                display: none;
            }
        }
        .boxpocket{
            width: 7rem;
            height: 7rem;
        }
    }
`;


export const BodyHead = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10rem;
    margin: 2rem 0;
    background-color: var(--nextui-colors-backgroundNavbar);
    color: var(--nextui-colors-textFormColor);
    @media(max-width: 1024px){
        height: 17rem;
    }
    @media(max-width: 600px){
        height: 24rem;
    }

    h1{
        margin: 0.5rem 0;
        font-size: 2rem;
        @media(max-width: 1024px){
            font-size: 1.3rem;
        }
    }
    p{
        text-align: center;
        font-weight: 200;
        padding: 0 2rem;
        @media(max-width: 1024px){
            font-size: 1rem;
            text-align: justify;
        }
        @media(max-width: 450px){
            font-size: 0.8rem;
            text-align: justify;
        }
    }
`;

export const ActivationCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: var(--nextui-colors-backgroundNavbar);
    color: var(--nextui-colors-textFormColor);
    width: 100%;
    height: 26rem;
    margin: 5rem 0;
    @media(max-width: 1024px){
        align-items: flex-start;
        h1{
            text-align: center;
        }
    }
    h1{
        margin: 0.5rem 0;
        font-size: 2rem;
    }
`;

export const ContainerCard = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: var(--nextui-colors-textFormColor);
    width: 100%;
    @media(max-width: 1113px){
        width: 100%;
        overflow: hidden;
        justify-content: flex-start;
        align-items: flex-start;
    }
`;

export const Card = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 18rem;
    width: 17rem;
    background-color:var(--nextui-colors-bgInputText) ;
    color: black;
    border-radius: 2rem;
    padding: 0 0.2rem;
    .img{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 6rem;
        height: 6rem;
        border-radius: 50rem;
        object-fit: cover;
        img{
            width: 5rem;
            height: 5rem;
        }
    }
    .numberindex{
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        top: 1rem;
        left: -2.5rem;
        width: 4rem;
        height: 4rem;
        background-color: #21c69b;
        border: 5px solid var(--nextui-colors-backgroundNavbar);
        border-radius: 50rem;
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