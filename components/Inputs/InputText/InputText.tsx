import { ContainInputText } from "./StylesInputsText";
import { dataText } from './Interface'

const InputText = ({ name, color, type}: dataText)  => {

  return (
    <>
      <ContainInputText IsColor={color}>
        <form className="form">
          <input type={type} required />
          <label className="lbl-name" >
            <span className="text-name">
              {name}
            </span>
          </label>
        </form>
      </ContainInputText>
    </>
  );
};

export default InputText;
