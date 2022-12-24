import styled from "@emotion/styled";

export const ContainerSlider = styled.div`
    overflow: hidden;
    border-radius: 3rem;
    @media only screen and (max-width: 1000px) {
        border-radius: 0;
    }
`;

export const Slider = styled.div`
    display: flex;
    position: relative;
    width: 500%;
    height: 55rem;
    transition: all 0.25s ease-in;
    transform: translateX(0);
    @media only screen and (max-width: 1000px) {
        height: 100vh;
    }
`;

export const BoxNumber = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    overflow: hidden;
    position: relative;
    @media only screen and (max-width: 650px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2, 1fr);
    }
    .background{
        padding: 2rem;
        background-color: rgba(0,0,0,0.2);
        width: 55%;
        transform: skewX(7deg);
        position: absolute;
        height: 100%;
        left: -10%;
        padding-left: 20rem;
        transform-origin: 0 100%;
        @media only screen and (max-width: 800px) {
            width: 65%;
        }
        @media only screen and (max-width: 650px) {
            width: 100%;
            left: 0;
            bottom: 0;
            height: 54%;
            transform: skewX(0deg);
        }
        ::before{
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            background-color: inherit;
            pointer-events: none;
            transform: skewX(10deg);
            @media only screen and (max-width: 800px) {
                width: 120%;
                bottom: 0;
                transform: skewX(0deg);
            }
        }
    }
`;

export const Details = styled.div`
    padding: 5rem;
    padding-left: 10rem;
    z-index: 100;
    grid-column: 1/span 1;
    grid-row: 1/-1;
`;

export const Trails = styled.div`
    position: absolute;
    top: -20rem;
`;