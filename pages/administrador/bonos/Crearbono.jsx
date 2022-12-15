import React from "react";
import { ContainerCardForm, UpFormBonus, DownFormBonus } from "./StylesBonos";
import { FaImages, FaInfo,FaGift } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";
import Dropozone from "../../../components/Dropzone/Dropozone";
import { useForm } from "react-hook-form";
import InputText from "../../../components/Inputs/InputText/InputText";

const Crearbono = () => {

    const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const ArrayLeft = [
    {
      id: "idcomercio",
      name: "Titulo del Bono",
      color: true,
      type: "text",
      img: <MdDriveFileRenameOutline />,
      regis: "idcomercio",
      error: errors.idcomercio?.type === "required" && (
        <p>El campo ID es Requerido</p>
      ),
    }
  ];

  const ArrayRight = [
    {
      id: "telefonoprimary",
      name: "Terminos Texto 3",
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
      name: "Terminos Texto 4",
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
      name: "Link Informativo",
      color: true,
      type: "text",
      img: <MdDriveFileRenameOutline />,
      regis: "email",
      error: errors.email?.type === "required" && (
        <p>El campo Apellido es Requerido</p>
      ),
    },
  ];

  return (
    <ContainerCardForm>
      <UpFormBonus>
        <div className="container-header">
          <div className="container-img">
            <FaImages />
          </div>
          <div className="container-title">
            <h3>Logo del Bono</h3>
          </div>
        </div>
        <div className="container-dropzone">
          <Dropozone text={"Arrastra el Bono"} requiredfile={"image/*"} />
        </div>
      </UpFormBonus>
      <DownFormBonus>
        <div className="container-header">
          <div className="container-img">
            <FaGift />
          </div>
          <div className="container-title">
            <h3>Informacion del Bono</h3>
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
            <div className="container-inputs">
              <div className="img"><MdDriveFileRenameOutline /></div>
              <div className="inputtext">
                <textarea name="" id="" cols="10" ></textarea>
              </div>
            </div>
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
      </DownFormBonus>
    </ContainerCardForm>
  );
};

export default Crearbono;
