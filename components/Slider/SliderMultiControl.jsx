import React from "react";
import {
  ContainerSlider,
  Slider,
  BoxNumber,
  Details,
  Trails,
} from "./StylesSlider";

const SliderMultiControl = ({ array }) => {
  const viewTrail = (array) => {
    return array.map((sec, index) => <Trails key={index}>loakmsdfklasdlñkmaslkmdlksmaldk </Trails>);
    
  };

  return (
    <ContainerSlider>
      <Slider>
        {array.map((sec, index) => (
          <BoxNumber key={index}>
            <div className="background"></div>
            <Details>
              <h1>{sec.title}</h1>
              <p>{sec.paragraph}</p>
              <button>{sec.label}</button>
            </Details>
            <div className="ilustration">
              <img src={sec.img} alt="" />
            </div>
          </BoxNumber>
        ))}
      </Slider>
      {viewTrail(array)}
    </ContainerSlider>
  );
};

export default SliderMultiControl;
