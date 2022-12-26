import React, { useState, useEffect } from "react";
import {
  ContainerSlider,
  Slider,
  BoxNumber,
  Details,
  Trails,
  Trail,
  Arrows,
} from "./StylesSlider";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from 'react-icons/hi'

const SliderMultiControl = ({ array }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedImge, setSelectedImage] = useState(array[selectedIndex].img)
  const [loaded, setLoaded] = useState(false)

  const selectedNewImage = (index, array, next=true ) => {
    setLoaded(false)
    setTimeout(()=>{
      const condition = next ? selectedIndex < array.length - 1 : selectedIndex > 0;
      const nexIndex = next ? condition ? selectedIndex + 1 : 0 :  condition ? selectedIndex - 1 : array.length - 1; 
      setSelectedImage(array[nexIndex]);
      setSelectedIndex(nexIndex);
    }, 500)
  };

  const Previus = () => {
    selectedNewImage(selectedIndex, array, false)
  };

  const Next = () => {
    selectedNewImage(selectedIndex, array)
  };

  const handleClick = (params) => {
    setSelectedIndex(params)
  }



  const viewTrail = () => {
    return (
      <Trails>
        {array.map((sec, index) => (
          <Trail onClick={() => handleClick(index)} isSelected={selectedIndex === index ? true : false}  key={index}><h1>{parseInt(index) + 1}</h1></Trail>
        ))}
      </Trails>
    );
    
  };

  const viewArrws = () =>{
    return (
      <Arrows>
        <div onClick={Previus}>{<HiOutlineArrowSmLeft/>}</div>
        <div onClick={Next}>{<HiOutlineArrowSmRight/>}</div>
      </Arrows>
    );
  } 

  return (
    <ContainerSlider>
      <Slider>
        {array.map((sec, index) =>
          selectedIndex === index ? (
            <>
              <BoxNumber className={loaded ? "loaded" : ""} onLoad={() => setLoaded(true)} key={index}>
                <div className="background"></div>
                <Details isAnimaActivate={loaded}>
                  <h1>{sec.title}</h1>
                  <p>{sec.paragraph}</p>
                  <button>{sec.label}</button>
                </Details>
                <div className="ilustration">
                  <img src={sec.img} alt="" />
                </div>
              </BoxNumber>
            </>
          ) : null
        )}
      </Slider>
      {viewTrail()}
      {viewArrws()}
    </ContainerSlider>
  );
};

export default SliderMultiControl;
