import React, { useEffect } from "react";
import {
  ContainerCarForm,
  UpFormComerce,
  DownFormComerce,
} from "./StylesCuentas";
import { FaImages, FaBoxes } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { BiImageAdd } from "react-icons/bi";
import { RiImageAddFill } from "react-icons/ri";
import InputText from "../../../components/Inputs/InputText/InputText";
import { useForm } from "react-hook-form";
import Dropozone from "../../../components/Dropzone/Dropozone";

const FormularioCrearComercio = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const ArrayLeft = [
    {
      id: "idcomercio",
      name: "ID Comercio",
      color: true,
      type: "text",
      img: <MdDriveFileRenameOutline />,
      regis: "idcomercio",
      error: errors.idcomercio?.type === "required" && (
        <p>El campo ID es Requerido</p>
      ),
    },
    {
      id: "nombre",
      name: "Nombre",
      color: true,
      type: "text",
      img: <MdDriveFileRenameOutline />,
      regis: "nombre",
      error: errors.nombre?.type === "required" && (
        <p>El campo Nombre es Requerido</p>
      ),
    },
    {
      id: "apellido",
      name: "Apellido",
      color: true,
      type: "text",
      img: <MdDriveFileRenameOutline />,
      regis: "apellido",
      error: errors.apellido?.type === "required" && (
        <p>El campo Apellido es Requerido</p>
      ),
    },
    {
      id: "nit",
      name: "Nit/Cedula",
      color: true,
      type: "text",
      img: <MdDriveFileRenameOutline />,
      regis: "nit",
      error: errors.nit?.type === "required" && (
        <p>El campo Nit es Requerido</p>
      ),
    },
  ];

  const ArrayRight = [
    {
      id: "telefonoprimary",
      name: "Telefono Primario",
      color: true,
      type: "text",
      img: <MdDriveFileRenameOutline />,
      regis: "telefonoprimary",
      error: errors.telefonoprimary?.type === "required" && (
        <p>El campo ID es Requerido</p>
      ),
    },
    {
      id: "telefonosecundary",
      name: "Telefono Secundario",
      color: true,
      type: "text",
      img: <MdDriveFileRenameOutline />,
      regis: "telefonosecundary",
      error: errors.telefonosecundary?.type === "required" && (
        <p>El campo Nombre es Requerido</p>
      ),
    },
    {
      id: "email",
      name: "Correo Electronico",
      color: true,
      type: "text",
      img: <MdDriveFileRenameOutline />,
      regis: "email",
      error: errors.email?.type === "required" && (
        <p>El campo Apellido es Requerido</p>
      ),
    },
    {
      id: "contraseña",
      name: "Contrasesña",
      color: true,
      type: "text",
      img: <MdDriveFileRenameOutline />,
      regis: "contraseña",
      error: errors.contraseña?.type === "required" && (
        <p>El campo Nit es Requerido</p>
      ),
    },
  ];

  return (
    <ContainerCarForm>
      <UpFormComerce>
        <div className="container-header">
          <div className="container-img">
            <FaImages />
          </div>
          <div className="container-title">
            <h3>Logo del Comercio</h3>
          </div>
        </div>
        <div className="container-dropzone">
          <Dropozone>
            <RiImageAddFill size={120} />
            <p className="parrafo-drop">Arrastra el logo</p>
          </Dropozone>
        </div>
      </UpFormComerce>
      <DownFormComerce>
        <div className="container-header">
          <div className="container-img">
            <FaBoxes />
          </div>
          <div className="container-title">
            <h3>Informacion del Comercio</h3>
          </div>
        </div>
        <div className="content-down">
          <div className="content-left">
            {ArrayLeft.map((sec, index) => (
              <div className="container-inputs" key={index}>
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
          <div className="content-right">
            {ArrayRight.map((sec, index) => (
              <div className="container-inputs" key={index}>
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
        </div>
      </DownFormComerce>
    </ContainerCarForm>
  );
};

export default FormularioCrearComercio;
