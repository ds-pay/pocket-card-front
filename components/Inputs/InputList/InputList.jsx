import React, { useEffect, useState } from "react";

const InputList = () => {
  const [values, setValues] = useState([]);
  const [errors, setErrors] = useState({});
  const [submitForm, setSubmitForm] = useState(false);


  useEffect(() => {
    if (submitForm) {
      const noErrors = Object.keys(errors).length === 0;

      if (noErrors) {
        setSubmitForm(false);
        setValues([]);
      }
    }
  }, [errors]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    setSubmitForm(true);
    // const errorsValidation = validate(values);
    // setErrors(errorsValidation);
  };

  // const handleBlur = (e) => {
  //   // const errorsValidation = validate(values);
  //   // let er = {
  //   //   [e]: errorsValidation[e],
  //   // };
  //   // setErrors(er);
  // };



  return {
    values,
    errors,
    handlesubmit,
    handleChange,
    // handleBlur
  }
};

export default InputList;
