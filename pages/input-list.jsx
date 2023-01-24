import React from "react";
import InputList from "../components/Inputs/InputList/InputList";
import styled from "@emotion/styled";
import InputTextAreaArray from "../components/Inputs/InputTextArea/InputTextAreaArray";
import Navbar from "../components/Navbar/Navbar";
import InputLink from "../components/Inputs/InputLink/InputLink";

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

// function validateAgreement(values) {
//   let errors = {};

//   if (values.conv_textos.length === 0) {
//     errors.conv_textos = "Debe anexar almenos un parrafo";
//   }

//   return errors;
// }

const inputlist = () => {
  const { values, errors, handlesubmit, handleChange } = InputList();

  const { conv_textos, conv_links } = values;

  const arrayTA = [
    {
      section: "textos",
      label: "Escribe Textos",
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
      if (input.type === "parrafos") {
        return (
          <InputTextAreaArray
            key={index}
            label={input.label}
            id={input.id}
            isBorderNone={true}
            value={input.value}
            onChange={input.onChange}
          />
        );
      }
    });
  };

  const Array = [
    {
      label: "Selecciona Red",
      id: "conv_links",
      value: conv_links,
      onChange: handleChange,
      onBlur: (e)=>handleBlur(e.target.name),
      type:"links"
    },
  ]

  const handleViewForm = (array) => {
    return array.map((sec, index) => (
      <div key={index} style={{ textAlign: "center" }}>
        <label>
          <h1>{sec.label}</h1>
        </label>
        <div>
          <div key={index}>{loadInputs(sec.contInputs)}</div>
        </div>
      </div>
    ));
  };

  return (
    <>
    <Navbar/>
      <Container>
      <h1>Elige tu Red Social</h1>

        <div className="contain-form">
          <InputLink data={Array}/>
        </div>
      </Container>
    </>
  );
};

export default inputlist;
