import React from "react";
import { ContainerCarForm, UpFormClient, DownFormClient } from "./StylesCuentas";
import InputSelect from "../../../components/Inputs/InputSelect/InputSelect";
import InputText from '../../../components/Inputs/InputText/InputText';
import { MdDriveFileRenameOutline } from "react-icons/md";
import { HiOutlineIdentification } from "react-icons/hi";
import { BsFillCreditCard2FrontFill } from "react-icons/bs"
import { FaUserAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";

const FormularioCrearCliente = () => {

  const { register, formState: { errors }, handleSubmit } = useForm()

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

  const ArrayInfoClient = [
    {
      id: "nombre",
      name: "Nombre del Cliente",
      color: true,
      type: "nombre",
      img: <MdDriveFileRenameOutline />,
      regis: "name",
      error: errors.name?.type === "required" && (<p>El campo Nombre es Requerido</p>),
    },
    {
      id: "apellido",
      name: "Apellido del Cliente",
      color: true,
      type: "apellido",
      img: <MdDriveFileRenameOutline />,
      regis: "apellido",
      error: errors.apellido?.type === "required" && (<p>El campo Nombre es Requerido</p>),
    },
    {
      id: "cedula",
      name: "Cedula del Cliente",
      color: true,
      type: "cedula",
      img: <HiOutlineIdentification />,
      regis: "cedula",
      error: errors.cedula?.type === "required" && (<p>El campo Nombre es Requerido</p>),
    },
  ]


  return (
    <ContainerCarForm>
      <UpFormClient>
        <div className="container-header">
          <div className="container-img">
            <BsFillCreditCard2FrontFill />
          </div>
          <div className="container-title">
            <h3>Informacion de la Credencial</h3>
          </div>
        </div>
        <div className="content-up">
          <div className="content-left">
            {ArrayCredencial.map((sec, index) => (
              <div className="content-credencial">
                <h3>{sec.label}</h3>
                <InputSelect
                  dataSelectList={ArrayCredencial}
                  useIcons={false}
                />
              </div>
            ))}
          </div>
          <div className="content-right">
            <div className="content-credencial" >
              <h3>Tipo de Credencial</h3>
              <InputSelect dataSelectList={ArrayCredencial} icon={false} />
            </div>
            <div className="inputtext">
              <InputText
                id={"id"}
                name={"ID Credencial Pocket Card"}
                color={true}
                type={"text"}
              />
            </div>
          </div>
        </div>
      </UpFormClient>
      <DownFormClient>
        <div className="content-down">
          <div className="container-header">
            <div className="container-img">
              <FaUserAlt />
            </div>
            <div className="container-title">
              <h3>Informacion del Cliente</h3>
            </div>
          </div>
          {ArrayInfoClient.map((sec, index) => (
            <div className="container-inputs">
              <div className="img">{sec.img}</div>
              <div className="inputtext">
                <InputText
                  id={sec.id}
                  name={sec.name}
                  color={sec.color}
                  type={sec.type}
                  regis={{
                    ...register(sec.regis, {
                      required: true,
                    }),
                  }}
                />
                {sec.error}
              </div>
            </div>
          ))}
        </div>
      </DownFormClient>
      {/* <InputSelect dataSelectList={ContentDropDown} useIcons={false} />
        <InputSelect dataSelectList={ContentDropDown} useIcons={false} /> */}
    </ContainerCarForm>
  );
};

export default FormularioCrearCliente;
