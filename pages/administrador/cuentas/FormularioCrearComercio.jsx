import React from 'react'
import { ContainerNewCommerce, UpComerce, DownComerce } from './StylesCuentas';
import { FaImages, FaBoxes } from 'react-icons/fa'
import { MdDriveFileRenameOutline } from 'react-icons/md'
import InputText from '../../../components/Inputs/InputText/InputText';
import { useForm } from "react-hook-form";

const FormularioCrearComercio = () => {
  const { register, formState: { errors }, handleSubmit } = useForm()

  const ArrayLeft = [
    {
      id: "idcomercio",
      name: "ID Comercio",
      color: true,
      type: "idcomercio",
      img: <MdDriveFileRenameOutline />,
      regis: "idcomercio",
      error: errors.idcomercio?.type === "required" && (<p>El campo ID es Requerido</p>),
    },
    {
      id: "nombre",
      name: "Nombre",
      color: true,
      type: "nombre",
      img: <MdDriveFileRenameOutline />,
      regis: "nombre",
      error: errors.nombre?.type === "required" && (<p>El campo Nombre es Requerido</p>),
    },
    {
      id: "apellido",
      name: "Apellido",
      color: true,
      type: "apellido",
      img: <MdDriveFileRenameOutline />,
      regis: "apellido",
      error: errors.apellido?.type === "required" && (<p>El campo Apellido es Requerido</p>),
    },
    {
      id: "nit",
      name: "Nit/Cedula",
      color: true,
      type: "nit",
      img: <MdDriveFileRenameOutline />,
      regis: "nit",
      error: errors.nit?.type === "required" && (<p>El campo Nit es Requerido</p>),
    },
  ]

  const ArrayRight = [
    {
      id: "idcomercio",
      name: "ID Comercio",
      color: true,
      type: "text",
      img: <MdDriveFileRenameOutline />,
      regis: "idcomercio",
      error: errors.idcomercio?.type === "required" && (<p>El campo ID es Requerido</p>),
    },
    {
      id: "nombre",
      name: "Nombre",
      color: true,
      type: "text",
      img: <MdDriveFileRenameOutline />,
      regis: "nombre",
      error: errors.nombre?.type === "required" && (<p>El campo Nombre es Requerido</p>),
    },
    {
      id: "apellido",
      name: "Apellido",
      color: true,
      type: "text",
      img: <MdDriveFileRenameOutline />,
      regis: "apellido",
      error: errors.apellido?.type === "required" && (<p>El campo Apellido es Requerido</p>),
    },
    {
      id: "nit",
      name: "Nit/Cedula",
      color: true,
      type: "text",
      img: <MdDriveFileRenameOutline />,
      regis: "nit",
      error: errors.nit?.type === "required" && (<p>El campo Nit es Requerido</p>),
    },
  ]

  return (
    <ContainerNewCommerce>
      <UpComerce>
        <div className="container-header">
          <div className="container-img">
            <FaImages />
          </div>
          <div className="container-title">
            <h3>Logo del Cliente</h3>
          </div>
        </div>
        <div className="conteiner-load-img"></div>
      </UpComerce>
      <DownComerce>
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
                <div className="container-img">{sec.img}</div>
                <div className="container-info-client">
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
            {ArrayLeft.map((sec, index) => (
              <div className="container-inputs" key={index}>
                <div className="container-img">{sec.img}</div>
                <div className="container-info-client">
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
      </DownComerce>
    </ContainerNewCommerce>
  );
}

export default FormularioCrearComercio