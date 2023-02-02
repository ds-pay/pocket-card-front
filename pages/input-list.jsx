import React, { useState } from "react";
import InputList from "../components/Inputs/InputList/InputList";
import styled from "@emotion/styled";
import InputTextAreaArray from "../components/Inputs/InputTextArea/InputTextAreaArray";
import Navbar from "../components/Navbar/Navbar";
import InputLink from "../components/Inputs/InputLink/InputLink";
import InputTextEdit from "../components/Inputs/InputTextEdit/InputTextEdit";
import { FiPlusCircle } from 'react-icons/fi'
import { IoMdTrash, IoMdSave } from 'react-icons/io';
import ButtonIcon from "../components/Buttons/ButtonIcon/ButtonIcon";
import InputText from "../components/Inputs/InputText/InputText";



export const App = () => {

  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState('');


  const ArrayInfoEdit = [
    {
      id: "infoedit1",
      label: "Estado del Convenio",
      placeholder: "EditaEstado del Convenio",
    },
    {
      id: "infoedit2",
      label: "Categoria Primaria",
      placeholder: "Edita Categoria Primaria",
    },
    {
      id: "infoedit3",
      label: "Categoria Secundaria",
      placeholder: "Edita Categoria Secundaria",
    },
    {
      id: "infoedit4",
      label: "Sub Categoria",
      placeholder: "Edita Sub Categoria",
    },
    {
      id: "infoedit5",
      label: "Estado del Convenio",
      placeholder: "Edita Estado del Convenio",
    },
    {
      id: "infoedit6",
      label: "Categoria Primaria",
      placeholder: "Edita Categoria Primaria",
    },
    {
      id: "infoedit7",
      label: "Categoria Secundaria",
      placeholder: "Edita Categoria Secundaria",
    },
    {
      id: "infoedit8",
      label: "Sub Categoria",
      placeholder: "Edita Sub Categoria",
    }
  ]


  const handleEdit = (index) => {
    setIsEditing(true);
  };

  const handleSave = (index) => {
    setIsEditing(false);
  };

  const handleUpdate = (id) => {
    let name = id;
    let value = inputValue;
    let a = {
      target: {
        name,
        value,
      },
    };
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const funInputedit = (id) => {
    return(
      ArrayInfoEdit.map((sec, index) => (
        sec.id === id 
        ?
        <div>
          {isEditing ?
            (
              <>
                <InputText
                  value={inputValue}
                  onChange={handleInputChange}
                />
                <ButtonIcon text={"Save"} func={handleSave} />

              </>
            )
            :
            (
              <>
                <InputText disabled value={inputValue ? inputValue  : sec.placeholder} />
                <ButtonIcon text={"Edit"} func={handleEdit} />
              </>
            )}
        </div>
        :null
      ))
    )
  }

  return (
    <div style={{display :"flex", flexDirection: "column"}}>
      <div>
        {funInputedit("infoedit1")}
      </div>
      <div>
        {funInputedit("infoedit2")}
      </div>
      <div>
        {funInputedit("infoedit3")}
      </div>
      <div>
        {funInputedit("infoedit4")}
      </div>
    </div>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .contain-form {
    width: 50rem;
    height: 50rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: var(--nextui-colors-backgroundForm);
    overflow-y: scroll;
    border-radius: 1rem;
    -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
    ::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 15px;
      height: 15px;
      border: 1px solid black;
    }
  }
`;


const inputlist = () => {

  return (
    <>
      <Navbar />
      <Container>
        <h1>Elige tu Red Social</h1>

        <div className="contain-form">
          {App()}
        </div>
      </Container>
    </>
  );
};

export default inputlist;
