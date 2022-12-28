import React, { useState, useRef, useEffect } from "react";
import {
  ContainerSlider,
  Slider,
  BoxNumber,
  Details,
  Trails,
  Trail,
  Arrows,
  ContainImg,
} from "./StylesSlider";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";

const SliderMultiControl = ({ array, timeSecond }) => {
  const [currentSlide, setCurrentSLide] = useState(0);

  const Previus = () => {
    const index = currentSlide > 0 ? currentSlide - 1 : array.length -1
    setCurrentSLide(index)
  };

  const Next = () => {
    const index = currentSlide < array.length - 1 ? currentSlide + 1 : 0
    setCurrentSLide(index)
  };

  const handleClick = (params) => {
    setCurrentSLide(params);
  };



  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentSLide(currentSlide => currentSlide < array.length - 1 ? currentSlide + 1 : 0 )
    }, timeSecond)

    return () => clearInterval(sliderInterval)
  },[])

  const viewTrail = () => {
    return (
      <Trails>
        {array.map((sec, index) => (
          <Trail
            onClick={() => handleClick(index)}
            isSelected={currentSlide === index ? true : false}
            key={index}
          >
            <h1>{parseInt(index) + 1}</h1>
          </Trail>
        ))}
      </Trails>
    );
  };

  const viewArrws = () => {
    return (
      <Arrows>
        <div onClick={Previus}>{<HiOutlineArrowSmLeft />}</div>
        <div onClick={Next}>{<HiOutlineArrowSmRight />}</div>
      </Arrows>
    );
  };

  return (
    <ContainerSlider>
      <Slider style={{transform: `translateX(${-currentSlide * 20}%)`}}>
        {array.map((sec, index) => (
          <>
            <BoxNumber key={index}>
              <div className="background"></div>
              <Details>
                <h1>{sec.title}</h1>
                <p>{sec.paragraph}</p>
                <button>{sec.label}</button>
              </Details>
              <ContainImg>
                <img src={sec.img} alt="" />
              </ContainImg>
            </BoxNumber>
          </>
        ))}
      </Slider>
      {viewTrail()}
      {viewArrws()}
    </ContainerSlider>
  );
};

export default SliderMultiControl;
