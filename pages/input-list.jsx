import React from 'react'
import InputList from '../components/Inputs/InputList/InputList'
import InputTextArea from '../components/Inputs/InputTextArea/InputTextArea';
import styled from "@emotion/styled";
import {STATE_INICIAL_CONVENIO} from './administrador/convenios/config'
import InputTextAreaArray from '../components/Inputs/InputTextArea/InputTextAreaArray';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .contain-form {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .contain-add{
      background: black;
      color: white;
      cursor: pointer;
    }
  }
`;


function validateAgreement(values){
  let errors = {}

  if (values.conv_textos.length===0) {
    errors.conv_textos = "Debe anexar almenos un parrafo"
  }

  return errors
}

const inputlist = ({ agreement=null }) => {

  const {values, errors, handlesubmit, handleChange} = InputList()

  const {conv_textos} = values

  const arrayTA = [
    {
      section: "textos",
      label: "Textos y Busqueda",
      icon: "align-left",
      contInputs: [
        {
          label: "Texto",
          id: "conv_textos",
          type: "parrafos",
          value: conv_textos,
          onChange: handleChange,
          placeholder: "",
          rows: 3,
        },
      ],
    },
  ];

  const loadInputs = (arrInputs) => {
    return arrInputs.map((input, index) => {
      if(input.type==="parrafos"){
        return <InputTextAreaArray key={index} label={input.label} id={input.id} isBorderNone={true} value={input.value} onChange={input.onChange} />
      }
    })
  }

  const handleViewForm = (array) => {
    return array.map((sec, index) => (
      <div key={index}>
        <label>{sec.label}</label>
        <div>
          <div key={index}>{loadInputs(sec.contInputs)}</div>
        </div>
      </div>
    ));
  }

  return (
    <Container>
      <div>
        {handleViewForm(arrayTA)}
      </div>
    </Container>
  );
}

export default inputlist