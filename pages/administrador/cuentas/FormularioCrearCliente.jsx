import React from "react";
import { ContainerNewClient, ContentUp, ContentDown } from "./StylesCuentas";
import InputSelect from "../../../components/Inputs/InputSelect/InputSelect";
import InputText from '../../../components/Inputs/InputText/InputText'

const FormularioCrearCliente = () => {
  const ArrayCredencial = [
    {
      id: "cobertura",
      label: "Cobertura de la Credencial",
      icon: "",
      value: "cobertura",
    },
    {
      id: "vigencia ",
      label: "Vigencia de la Credencial",
      icon: "",
      value: "vigencia",
    },
    {
      id: "comercio",
      label: "Comercio Vendedor",
      icon: "",
      value: "comercio",
    },
  ];


  return (
    <ContainerNewClient>
      <ContentUp>
        <div className="content-left">
          {ArrayCredencial.map((sec, index) => (
            <>
              <h3>{sec.label}</h3>
              <InputSelect dataSelectList={ArrayCredencial} useIcons={false} />
            </>
          ))}
        </div>

        <div className="content-right">
          <div>
            <h3>Tipo de Credencial</h3>
            <InputSelect dataSelectList={ArrayCredencial} icon={false} />
          </div>

          <div>
            <h3>Id Credencial Pocket Card</h3>
            <InputText 
              id={"id"}
              name={"Id Credencial Pocket Card"}
              color={true}
              type={"text"}
            />
          </div>
        </div>
      </ContentUp>
      <ContentDown>
        <div className="content-down">holis</div>
      </ContentDown>
      {/* <InputSelect dataSelectList={ContentDropDown} useIcons={false} />
        <InputSelect dataSelectList={ContentDropDown} useIcons={false} /> */}
    </ContainerNewClient>
  );
};

export default FormularioCrearCliente;
