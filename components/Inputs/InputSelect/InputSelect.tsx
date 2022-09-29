import React, { useState } from "react";
import DropDown from './DropDown'
import {
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { TiArrowSortedDown } from "react-icons/ti";
import { ContainerInput, ContainerDrop } from "./StylesInputs";
import { ContentDropDown } from './Interfaces'

const InputSelect = () => {

  const [selection, setSelection] = useState(true);
  const [currentId, setCurrentId] = useState("facebook");


  const ContentDropDown: ContentDropDown[] = [
    {
      id: "facebook",
      icon: <BsFacebook />,
      label: "Facebook",
    },
    {
      id: "linkedin",
      icon: <AiFillLinkedin />,
      label: "Linkedin",
    },
    {
      id: "instagram",
      icon: <BsInstagram />,
      label: "Instagram",
    },
    {
      id: "twitter",
      icon: <AiOutlineTwitter />,
      label: "Twitter",
    },
    {
      id: "youtube",
      icon: <AiFillYoutube />,
      label: "Youtube",
    },
  ];

  const selectNewValue = (id: string) => {
    setCurrentId(id)
  };

  return (
    <>
      <ContainerInput
        id="drop"
        onClick={() => setSelection(!selection)}
        isSelection={selection}
      >
        <span className="drop-title-icon">
          <div className="svg-logo"><BsFacebook /></div>
          <span className="drop-title-text">
            <h3>Fecabook</h3>
          </span>
        </span>
        <span className="drop-arrow">
          <div>
            <TiArrowSortedDown />
          </div>
        </span>
      </ContainerInput>
      <ContainerDrop>
        <DropDown
          isSelection={selection}
          contentdropDown={ContentDropDown}
          selectNewValue={selectNewValue}
        />
      </ContainerDrop>
    </>
  );
};

export default InputSelect
