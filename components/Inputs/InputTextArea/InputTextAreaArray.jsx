import React, { useState } from "react";
import InputTextArea from "./InputTextArea";
import { IoMdTrash } from 'react-icons/io';
import { AiFillEdit } from 'react-icons/ai';
import { HiSave } from 'react-icons/hi';
import { BiUpArrow, BiDownArrow } from 'react-icons/bi';
import { GrAddCircle } from 'react-icons/gr'
import {
  ConteinerGeneral,
  ContainerList,
  Container,
  OptionsList,
  ContainerInput,
  InputAdd
} from "./StylesInputTextArea";
import ButtonIcon from "../../Buttons/ButtonIcon";

const InputTextAreaArray = ({
  data,
  label,
  id,
  isBorderNone,
  value,
  onChange,
  onBlur,
}) => {
  const [listTexts, setListTexts] = useState([]);
  const [changedText, setChangedText] = useState("");
  const [indexChange, setIndexChange] = useState("");
  const [valueNewText, setValueNewText] = useState("");

  const addTextArea = () => {
    if (valueNewText) {
      let arr = [...listTexts, valueNewText];
      setListTexts(arr);
      updateToForm(arr);
      setValueNewText("");
    }
  };

  const handleDelete = (index) => {
    let arr = [...listTexts];
    arr.splice(index, 1);
    setListTexts(arr);
    updateToForm(arr);
  };

  const handleActivateEdit = (index) => {
    setIndexChange(index);
    setChangedText(listTexts[index]);
  };

  const handleSaveTextChanged = (index) => {
    let arr = [...listTexts];
    arr[index] = changedText;
    setListTexts(arr);
    updateToForm(arr);
    setChangedText("");
    setIndexChange("");
  };

  const handleUpText = (index) => {
    if(index !== 0){
      let arr = [...listTexts];
      let value = arr[index];
      arr.splice(index, 1);
      arr.splice(index - 1, 0, value);
      setListTexts(arr);
      updateToForm(arr)
    }
  };

  const handleDownText = (index) => {
    if(index < listTexts.length) {
      let arr = [...listTexts];
      let value = arr[index];
      arr.splice(index, 1);
      arr.splice(index + 1, 0, value);
      setListTexts(arr);
      updateToForm(arr);
    }
  } 

  const updateToForm = (list) => {
    let name = id;
    let value = list;
    let a = {
      target: {
        name,
        value,
      },
    };
    onChange(a);
  };

  return (
    <ConteinerGeneral>
      <ContainerInput>
        <div className="contain-input">
          <InputTextArea
            isBorderNone={isBorderNone}
            isBgNone={true}
            id={id}
            type={"area"}
            value={valueNewText}
            onChange={(e) => setValueNewText(e.target.value)}
            onBlur={onBlur}
            label={label}
            isMargin={true}
          />
        </div>
        <OptionsList>
          <ButtonIcon icon={<GrAddCircle/>} func={addTextArea} text={"Agregar"} />
        </OptionsList>
      </ContainerInput>
      {listTexts &&
        listTexts.map((ltext, index) => (
          <ContainerList  key={index}>
            <InputAdd isBackground={indexChange === index ? false : true}>
              <label > Texto nº {parseInt(index) + 1}</label>
              <div className="contain-input">
                <InputTextArea
                  value={indexChange === index ? changedText : ltext}
                  onChange={(e) => setChangedText(e.target.value)}
                  disabled={indexChange === index ? false : true}
                  isBgNone={indexChange === index ? false : true}
                  isBorderNone={indexChange === index ? false : true}
                  isMargin={true}
                />
              </div>
            </InputAdd>
            <OptionsList>
              {indexChange === index ? (
                <button className="button-style" onClick={() => handleSaveTextChanged(index)}>
                  <HiSave/>
                </button>
              ) : (
                <ButtonIcon className="button-style" icon={<AiFillEdit/>} func={() => handleActivateEdit(index)}/>
              )}
              <ButtonIcon className="button-style" icon={<IoMdTrash/>} func={() => handleDelete(index)}/>
              <ButtonIcon className="button-style" icon={<BiDownArrow/>} func={() => handleDownText(index)}/>
              <ButtonIcon className="button-style" icon={<BiUpArrow/>} func={() => handleUpText(index)}/>
            </OptionsList>
          </ContainerList>
        ))}
    </ConteinerGeneral>
  );
};

export default InputTextAreaArray;
