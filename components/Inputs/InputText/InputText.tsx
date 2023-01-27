import { useState } from "react";
import { ContainInputText } from "./StylesInputsText";
import { dataText } from "./Interface";
import { GoEye, GoEyeClosed } from "react-icons/go";

const InputText = ({ name, id, color, type, regis, eyetrue, value, onChange, onBlur, label, disabled }: dataText) => {
  const [passIsView, setPassIsView] = useState(false);

  const handleClick = () => {
    setPassIsView(!passIsView);
  };

  return (
    <>
      <ContainInputText IsColor={color}>
        <form className="form">
          {eyetrue ? (
            <>
              <input
                {...regis}
                type={passIsView ? (type = "text") : (type = "password")}
                required
              />
              <label className="lbl-name">
                <div className="text-name">{name}</div>
              </label>
            </>
          ) : (
            <>
              <input
                {...regis}
                type={type}
                required
                name={id}
                id={id}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                disabled={disabled}
                placeholder={value}
              />
              <label className="lbl-name">
                <span className="text-name">{label ? label :name}</span>
              </label>
            </>
          )}
        </form>
        {eyetrue && (
          <span className="eye-pass" onClick={() => handleClick()}>
            {passIsView ? <GoEyeClosed /> : <GoEye />}
          </span>
        )}
      </ContainInputText>
    </>
  );
};

export default InputText;
