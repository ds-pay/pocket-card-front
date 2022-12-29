import React from 'react'
import SliderMultiControl from '../components/Slider/SliderMultiControl'
import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #180148;
    color: #fff;
    padding: 8rem;
    font-size: 62.5%;
    @media only screen and (max-width: 800px) {
        font-size: 57%;
    }
    @media only screen and (max-width: 1000px) {
        padding: 0;
    }

    ::before, ::after{
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }
`;

const sliderview = () => {

    const ArraySlaider =[
        {
            id: "slide1" ,
            title: "I'M the first Box",
            paragraph: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
            label: "check Now",
            img: "/img/image/slide3.jpg"
        },
        {
            id: "slide2" ,
            title: "I'M the Second Box",
            paragraph: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
            label: "check Now",
            img: "/img/image/slide2.jpeg"
        },
        {
            id: "slide3" ,
            title: "I'M the Third Box",
            paragraph: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
            label: "check Now",
            img: "/img/image/slide1.jpg"
        },
        {
            id: "slide4" ,
            title: "I'M the Fourth Box",
            paragraph: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
            label: "check Now",
            img: "/img/image/slide4.jpg"
        },
        {
            id: "slide5" ,
            title: "I'M the Fifth Box",
            paragraph: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
            label: "check Now",
            img: "/img/image/slide5.jpg"
        },
        
    ]


  return (
    <Container>
        <SliderMultiControl array={ArraySlaider} timeSecond={3000}/>
    </Container>
  )
}

export default sliderview