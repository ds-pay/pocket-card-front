import React, { useState } from "react";
import DropDown from "./DropDown";
import { TiArrowSortedDown } from "react-icons/ti";
import { ContainerInput, ContainerDrop } from "./StylesInputs";
import { InputSelectProps, dataSelect } from "./Interfaces";

const InputSelect = ({ dataSelectList, useIcons,}: InputSelectProps) => {

  const [isActive, setIsActive] = useState(false);
  const [currentSelection, setCurrentSelection] = useState<dataSelect>();

  const handleSelect = (selection: dataSelect) => {
    setCurrentSelection(selection);
  };

  const viewSelection = () => {
    return (
      <span className={`no-selection ${currentSelection && "selection-title"}`}>
        {currentSelection ? currentSelection.label : "Selecciona una opción"}
      </span>
    );
  };

  const viewIconSelection = () => {
    return (
      useIcons && (
        <span className="selection-icon">
          {currentSelection && currentSelection.icon}
        </span>
      )
    );
  };

  return (
    <>
      <ContainerInput onClick={() => setIsActive(!isActive)} isActive={isActive}
      >
        <div className="input-content">
          {viewIconSelection()}
          {viewSelection()}
          <span className="selection-arrow">
            <TiArrowSortedDown />
          </span>
        </div>
      </ContainerInput>
      <ContainerDrop>
        <DropDown
          dataSelectList={dataSelectList}
          isActive={isActive}
          handleSelect={handleSelect}
          setIsActive={setIsActive}
        />
      </ContainerDrop>
    </>
  );
};

export default InputSelect;
