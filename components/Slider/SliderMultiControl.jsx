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

const SliderMultiControl = ({ array }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImge, setSelectedImage] = useState(array[selectedIndex].img);
  const sliderCarousel = useRef(null)

  const selectedNewImage = (index, array, next = true) => {
    const condition = next
      ? selectedIndex < array.length - 1
      : selectedIndex > 0;
    const nexIndex = next
      ? condition
        ? selectedIndex + 1
        : 0
      : condition
      ? selectedIndex - 1
      : array.length - 1;
    setSelectedImage(array[nexIndex]);
    setSelectedIndex(nexIndex);
  };

  const Previus = () => {
    if(sliderCarousel.current.children.length > 0){
			const index = sliderCarousel.current.children.length - 1;
      const lastElement = sliderCarousel.current.children[index];
      sliderCarousel.current.insertBefore(
        lastElement,
        sliderCarousel.current.firstChild
      );
      sliderCarousel.current.style.transition = 'none';
      const slideSize = sliderCarousel.current.children[0].offsetWidth;
      sliderCarousel.current.style.transform = `translateX(-${slideSize}px)`;
      setTimeout(() =>{
        sliderCarousel.current.style.transition = '700ms ease-out all';
        sliderCarousel.current.style.transform = `translateX(0)`;
      },0)
      
		}
    selectedNewImage(selectedIndex, array, false);
  };

  const Next = () => {
    if( sliderCarousel.current.children.length > 0) {
      const firtElement = sliderCarousel.current.children[0];
      const slideSize = sliderCarousel.current.children[0].offsetWidth;
      const transition = () => {
        sliderCarousel.current.style.transition = 'none';
        sliderCarousel.current.style.transform = `translateX(0)`;
        sliderCarousel.current.appendChild(firtElement)
        sliderCarousel.current.removeEventListener('transitionend', transition)
      }
      sliderCarousel.current.style.transition = `700ms ease-out all`;
      sliderCarousel.current.style.transform = `translateX(-${slideSize}px)`;
      sliderCarousel.current.addEventListener('transitionend', transition)
    }
    selectedNewImage(selectedIndex, array);
  };

  const handleClick = (params) => {
    setSelectedIndex(params);
  };

  useEffect(() => {
    setInterval(() => {
      Next();
    }, 5000);
  }, []);

  const viewTrail = () => {
    return (
      <Trails>
        {array.map((sec, index) => (
          <Trail
            onClick={() => handleClick(index)}
            isSelected={selectedIndex === index ? true : false}
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
      <Slider ref={sliderCarousel}>
        {array.map((sec, index) =>
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
        )}
      </Slider>
      {viewTrail()}
      {viewArrws()}
    </ContainerSlider>
  );
};

export default SliderMultiControl;
