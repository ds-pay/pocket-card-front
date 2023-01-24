import React, { useState, useEffect } from 'react';
import { ContainerGeneral, Container, DivLinks, InputTextview } from './StyleInputLink';
import { IoMdTrash } from 'react-icons/io';
import { FiPlusCircle } from 'react-icons/fi';
import InputText from '../InputText/InputText'
import ButtonSelect from '../../Buttons/ButtonSelect/ButtonSelect';
import ButtonIcon from '../../Buttons/ButtonIcon/ButtonIcon';

const InputLink = ({ data }) => {
  const { label, id, value, onChange, onBlur } = data;
  const [selection, setSelection] = useState("");
  const [labelInput, setLabelInput] = useState(label)
  const [links, setLinks] = useState(value ? value : []);
  const [textLink, setTextLink] = useState("");

  const addLink = () => {

    if (selection && textLink) {
      let newLink = {
        link: textLink,
        type: selection.value,
        icon: selection.icon,
      }

      let arr = [...links, newLink]
      setLinks(arr);
      handleUpdateToForm(arr)
      setSelection("");
      setTextLink("");
    }
  };

  const handleDelete = (index) => {
    const newArray = [...links];
    newArray.splice(index, 1);
    setLinks(newArray);
    handleUpdateToForm(newArray);
  };

  const dataToInput = {
    label: labelInput,
    id,
    value: textLink,
    type: "text",
    onChange: (e) => setTextLink(e.target.value),
    onBlur
  };

  const handleUpdateToForm = (linkToSave) => {
    let name = id;
    let value = linkToSave;
    let a = {
      target: {
        name,
        value,
      },
    };
  }

  useEffect(() => {
    selection ? setLabelInput("link " + selection.label) : setLabelInput("Ejmp: Link Facebook")
  }, [selection])

  return (
    <ContainerGeneral>
      <Container>
        <ButtonSelect selection={selection} setSelection={setSelection} />
        <div className='inputtext'>
          <InputText
            name={dataToInput.label}
            color={true}
            type={dataToInput.type}
            id={dataToInput.id}
            value={dataToInput.value}
            onChange={dataToInput.onChange}
            onBlur={dataToInput.onBlur}
          />
        </div>
        <ButtonIcon
          icon={<FiPlusCircle/>}
          func={addLink}
          text={"Agregar"}
        />
      </Container>

      {
        links &&
        links.map((link, index) => (
          <DivLinks key={index}>
            <ButtonIcon
              icon={link.icon}
              func={() => { }}
              onlyView={true}
            />
            <InputTextview type={"text"} value={link.link} disabled />
            <ButtonIcon
              icon={<IoMdTrash />}
              func={() => handleDelete(index)}
            />
          </DivLinks>
        ))
      }
    </ContainerGeneral>
  )
}

export default InputLink