import { useEffect, useState } from 'react';
import CardZoom from '../../components/Cards/CardZoom/CardZoom';
import { ContainerGeneral, ContainerCardsSlider, Arrows } from './StyleOutstandAgreement';
import { AiFillHeart } from 'react-icons/ai';
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";




const OutstandAgreement = ({data}) => {
  const [currentSlide, setCurrentSLide] = useState(0);

  const Previus = () => {
    const index = currentSlide > 0 ? currentSlide - 4 : data.length - 1
    setCurrentSLide(index)
  };

  const Next = () => {
    const index = currentSlide < data.length - 1 ? currentSlide + 4 : 0
    setCurrentSLide(index)
  };

  
  const arrws = () => {
    return (
      <Arrows>
        <div onClick={Previus}>{<HiOutlineArrowSmLeft />}</div>
        <div onClick={Next}>{<HiOutlineArrowSmRight />}</div>
      </Arrows>
    );
  };

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentSLide(currentSlide => currentSlide < data.length - 1 ? currentSlide + 4 : 0)
    }, 4000)

    return () => clearInterval(sliderInterval)
  }, [])

  return (
    <ContainerGeneral>
      <h2><strong>Convenios Destacados</strong></h2>
      <div className='containerslider'>
        <ContainerCardsSlider style={{ transform: `translateX(${-currentSlide * 9.8}rem)` }}>
          <CardZoom data={data && data} icon={<AiFillHeart/>}  />
        </ContainerCardsSlider>
      </div>
      {arrws()}
    </ContainerGeneral>
  )
}

export default OutstandAgreement