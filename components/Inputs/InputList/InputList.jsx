import React, { useEffect, useState } from "react";
import InputTextArea from "../InputTextArea/InputTextArea";
import { Container } from "./StylesInputList";

const InputList = () => {
  const [value, setValue] = useState([]);
  const [ errores, setErrores ] = useState({});
  const [submitForm, setSubmitForm] = useState(false);

  useEffect( () => {
    if (submitForm) {
        const noErrores = Object.keys(errores).length === 0;

        if(noErrores){
            setSubmitForm(false)
            setValue([])
        }
    }
  },[errores])

  const handleChange = e => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handlesubmit = e =>{
    e.preventDefault();
    const erroresValidacion = validar(value)
    setErrores(erroresValidacion);
    setSubmitForm(true);
  };

  const handleBlur = e => {
    const erroresValidacion = validar(value);
    let er = {
        [e]: erroresValidacion[e]
    }
    setErrores(er)
  }

  const arrayTA = [
    {
      label: "Textos",
      id: "conv-textos",
      isBorderNone: true,
      type: "parrafos",
      value: [],
      onChange: handleChange,
      onBlur: (e) => handleBlur(e.target.name)
    },
  ];

  return (
    <Container>
      <form className="contain-form">
        {arrayTA.map((sec, index) => (
          <InputTextArea
            key={index}
            label={sec.label}
            id={sec.id}
            isBorderNone={sec.isBorderNone}
            type={sec.type}
            value={sec.value}
            onChange={sec.onChange}
            onBlur={sec.onBlur}
          />
        ))}
        <button  onClick={handlesubmit}> add</button>
      </form>
    </Container>
  );
};

export default InputList;
