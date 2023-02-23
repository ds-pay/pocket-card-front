import { useEffect, useRef, useState } from 'react';
import CardZoom from '../../components/Cards/CardZoom/CardZoom';
import { ContainerGeneral, ContainerCardsSlider, Arrows } from './StyleOutstandAgreement';
import { AiFillHeart } from 'react-icons/ai';
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";




const OutstandAgreement = ({data}) => {
  const [currentSlide, setCurrentSLide] = useState(0);

  const slidershow = useRef(null);

  const Previus = () => {
    const index = currentSlide > 0 ? currentSlide - 1 : data.length - 1
    setCurrentSLide(index)
  };

  const Next = () => {
    const index = currentSlide < data.length - 1 ? currentSlide + 1 : 0
    setCurrentSLide(index)
    // if( slidershow.current.children.length > 0){

    //   const primerElemento = slidershow.current.children[0];

    //   slidershow.current.style.transition = `700ms ease-out all`;
      
    //   const tamañoSlide = slidershow.current.children[0].offsetWidth;

    //   slidershow.current.style.transform = `translateX(-${tamañoSlide * 1.1}px)`;

    //   const transicion = () => {
    //     slidershow.current.style.transition = 'none';
    //     slidershow.current.style.transform = `translateX(0)`;
    //     slidershow.current.appendChild(primerElemento);
    //   }

    //   slidershow.current.addEventListener('transitionend', transicion)
    // };
  };

  const arrws = () => {
    return (
      <Arrows>
        <div onClick={Previus}>{<HiOutlineArrowSmLeft />}</div>
        <div onClick={Next}>{<HiOutlineArrowSmRight />}</div>
      </Arrows>
    );
  };

  // useEffect(() => {
  //   const sliderInterval = setInterval(() => {
  //     setCurrentSLide(currentSlide => currentSlide < data.length - 1 ? currentSlide + 1 : 0)
  //   }, 4000)

  //   return () => clearInterval(sliderInterval)
  // }, []);

  return (
    <ContainerGeneral>
      <h2><strong>Convenios Destacados</strong></h2>
      <div className='containerslider'>
        <ContainerCardsSlider ref={slidershow} style={{ transform: `translateX(${-currentSlide * 11.1}%)` }}>
          <CardZoom data={data && data} icon={<AiFillHeart/>}  />
        </ContainerCardsSlider>
      </div>
      {arrws()}
    </ContainerGeneral>
  )
}

export default OutstandAgreement