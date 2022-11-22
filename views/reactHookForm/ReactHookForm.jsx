import React from 'react'
import { ContainerPrimary, ContainerLogin, Login, ContainerNetworks } from './stylesReacthookFrom';
import { FaUserAlt, FaLock, FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { MdEmail} from 'react-icons/md'
import InputText from '../../components/Inputs/InputText/InputText'
import { useForm } from 'react-hook-form';


const ReactHookForm = () => {
    const { register, formState: { errors } , handleSubmit } = useForm();

  const ArrayInputsText = [
    {
      id: "name",
      name: "Name Completed",
      color: true,
      type: "text",
      img: <FaUserAlt />,
      regis: "name",
      error: errors.name?.type === "required" && (<p>El campo Name Completed es requerido</p>)
    },
    {
      id: "email",
      name: "Email",
      color: true,
      type: "email",
      img: <MdEmail />,
      regis: "email",
      error: errors.email?.type === "required" && (<p>El campo Email es requerido</p>)
    },
    {
      id: "pass",
      name: "Password",
      color: true,
      type: "password",
      img: <FaLock />,
      regis: "password",
      eyetrue: true,
      error: errors.password?.type === "required" && (<p>El campo Password es requerido</p>)
    },
    {
      id: "pass",
      name: "Confirm Password",
      color: true,
      type: "password",
      img: <FaLock />,
      regis: "confirmpassword",
      eyetrue: true,
      error: errors.confirmpassword?.type === "required" && (<p>El campo Confirm Password es requerido</p>)
    },
  ];

  const ArrayNetworks = [
    {
      id: "facebook",
      img: <FaFacebookSquare size={"2rem"} />,
      alt: "facebook",
    },
    {
      id: "instagram",
      img: <FaInstagram size={"2rem"} />,
      alt: "instagram",
    },
  ];

  const onSubmit = (data) => {
    console.log(data)
  };

  return (
    <>
      <ContainerPrimary>
        <ContainerLogin>
          <Login>
            <div className="container-title">
              <h2>Formulario</h2>
            </div>
            <form className="seccionLogin" onSubmit={handleSubmit(onSubmit)}>
              {ArrayInputsText.map((sec, index) => (
                <div className="container">
                  <div className="container-img">{sec.img}</div>
                  <div className="container-text">
                    <InputText
                      id={sec.id}
                      name={sec.name}
                      color={sec.color}
                      type={sec.type}
                      regis={{...register(sec.regis, {
                          required: true,
                        }),
                      }}
                      eyetrue={sec.eyetrue}
                    />
                    {sec.error}
                  </div>
                </div>
              ))}
              <div className="container-button">
                <input type="submit" value="Resgister" />
              </div>
            </form>
          </Login>
          <ContainerNetworks>
            <h3 className="text-networks">Nuestras Redes</h3>
            <div className="networks">
              {ArrayNetworks.map((sec, index) => (
                <div className="network">{sec.img}</div>
              ))}
            </div>
          </ContainerNetworks>
        </ContainerLogin>
      </ContainerPrimary>
    </>
  );
};

export default ReactHookForm