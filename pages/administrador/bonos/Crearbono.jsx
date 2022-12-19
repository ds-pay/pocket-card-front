import React from "react";
import { ContainerCardForm, UpFormBonus, DownFormBonus } from "./StylesBonos";
import { FaImages, FaInfo, FaGift } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";
import Dropozone from "../../../components/Dropzone/Dropozone";
import { useForm } from "react-hook-form";
import InputText from "../../../components/Inputs/InputText/InputText";
import InputTextArea from "../../../components/Inputs/InputTextArea/InputTextArea";
import index from ".";

const Crearbono = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const ArrayLeft = [
    {
      id: "texto1",
      name: "texto1",
      isBgNone: true,
      isBorderNone: true,
      placeholder: "Terminos Texto 1",
      img: <MdDriveFileRenameOutline />,
      regis: "texto1",
      error: errors.texto1?.type === "required" && (
        <p>El campo ID es Requerido</p>
      ),
    },
    {
      id: "text2",
      name: "text2",
      isBgNone: true,
      isBorderNone: true,
      placeholder: "Terminos Texto 2",
      img: <MdDriveFileRenameOutline />,
      regis: "text2",
      error: errors.text2?.type === "required" && (
        <p>El campo ID es Requerido</p>
      ),
    },
  ];

  const ArrayRight = [
    {
      id: "text3",
      name: "text3",
      isBgNone: true,
      isBorderNone: true,
      placeholder: "Terminos Texto 3",
      img: <MdDriveFileRenameOutline />,
      regis: "text3",
      error: errors.text3?.type === "required" && (
        <p>El campo ID es Requerido</p>
      ),
    },
    {
      id: "text4",
      name: "text4",
      isBgNone: true,
      isBorderNone: true,
      placeholder: "Terminos Texto 4",
      img: <MdDriveFileRenameOutline />,
      regis: "text4",
      error: errors.text4?.type === "required" && (
        <p>El campo ID es Requerido</p>
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
            <div className="container-inputs">
              <div className="img">
                <MdDriveFileRenameOutline />
              </div>
              <div className="inputtext">
                <InputText
                  id={"idcomercio"}
                  name={"Titulo del Bono"}
                  color={true}
                  type={"text"}
                  regis={{
                    ...register("idcomercio", {
                      required: true,
                    }),
                  }}
                />
                {errors.idcomercio?.type === "required" && (
                  <p>El campo Titulo es Requerido</p>
                )}
              </div>
            </div>
            {ArrayLeft.map((sec, index) => (
              <div className="container-inputs" key={index}>
                <div className="img">{sec.img}</div>
                <div className="inputtext">
                  <InputTextArea
                    isBgNone={sec.isBgNone}
                    isBorderNone={sec.isBorderNone}
                    id={sec.id}
                    name={sec.name}
                    placeholder={sec.placeholder}
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
                  <InputTextArea
                    isBgNone={sec.isBgNone}
                    isBorderNone={sec.isBorderNone}
                    id={sec.id}
                    name={sec.name}
                    placeholder={sec.placeholder}
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
              <div className="img">
                <MdDriveFileRenameOutline />
              </div>
              <div className="inputtext">
                <InputText
                  id={"linkinfo"}
                  name={"Link Informativo"}
                  color={true}
                  type={"text"}
                  regis={{
                    ...register("linkinfo", {
                      required: true,
                    }),
                  }}
                />
                {errors.linkinfo?.type === "required" && (
                  <p>El campo Link es Requerido</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </DownFormBonus>
    </ContainerCardForm>
  );
};

export default Crearbono;
