import React from "react";
import { ContainInputText } from "./StylesInputsText";

const InputText = () => {

  return (
    <>
      <ContainInputText>
        <form className="form">
          <input type="text" required />
          <label className="lbl-name" >
            <span className="text-name">
                Nombre
            </span>
          </label>
        </form>
      </ContainInputText>
    </>
  );
};

export default InputText;
