import React, { useState } from "react";
import InputTextArea from "./InputTextArea";
import {IoMdTrash} from 'react-icons/io';
import {AiFillEdit} from 'react-icons/ai';
import {HiSave} from 'react-icons/hi'
import {
  ConteinerGeneral,
  ContainerList,
  Container,
  OptionsList,
  ContainerInput,
  InputAdd
} from "./StylesInputTextArea";

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
        <InputTextArea
          isBorderNone={isBorderNone}
          label={label}
          id={id}
          type={"area"}
          value={valueNewText}
          onChange={(e) => setValueNewText(e.target.value)}
          onBlur={onBlur}
        />
        <button onClick={addTextArea}>Agregar</button>
      </ContainerInput>
      {listTexts &&
        listTexts.map((ltext, index) => (
          <ContainerList key={index}>
            <InputAdd>
              <label> Texto nº {parseInt(index) + 1}</label>
              <InputTextArea
                value={indexChange === index ? changedText : ltext}
                onChange={(e) => setChangedText(e.target.value)}
                disabled={indexChange === index ? false : true}
                isBgNone={indexChange === index ? false : true}
                isBorderNone={indexChange === index ? true : false}
              />
            </InputAdd>
            <OptionsList>
              {indexChange === index ? (
                <button className="button-style" onClick={() => handleSaveTextChanged(index)}>
                  <HiSave/>
                </button>
              ) : (
                <button className="button-style" onClick={() => handleActivateEdit(index)}><AiFillEdit/></button>
              )}
              <button className="button-style" onClick={() => handleDelete(index)}><IoMdTrash/></button>
            </OptionsList>
          </ContainerList>
        ))}
    </ConteinerGeneral>
  );
};

export default InputTextAreaArray;
