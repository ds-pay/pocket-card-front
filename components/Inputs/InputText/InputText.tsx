import { useState } from "react";
import { ContainInputText } from "./StylesInputsText";
import { dataText } from "./Interface";
import { GoEye, GoEyeClosed } from "react-icons/go";

const InputText = ({ name, color, type, regis, eyetrue, id }: dataText) => {
  const [passIsView, setPassIsView] = useState(false);

  const handleClick = () => {
    setPassIsView(!passIsView);
  };

  return (
    <>
      <ContainInputText IsColor={color}>
        <form className="form">
          { eyetrue ? (
            <>
              <input
                {...regis}
                type={passIsView ? (type = "text") : (type = "password")}
                required
              />
              <label className="lbl-name">
                <span className="text-name">{name}</span>
              </label>
            </>
          ) : (
            <>
              <input
                {...regis}
                type={ type}
                required
              />
              <label className="lbl-name">
                <span className="text-name">{name}</span>
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
