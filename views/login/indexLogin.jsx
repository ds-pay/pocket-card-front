import React, { useState, useEffect } from "react";
import { ContainerLogin, ContainerCard, ContainerNetworks, Login, ContainerPrimary } from "./stylesIndexLogin";
import InputText from "../../components/Inputs/InputText/InputText";
import { FaUserAlt, FaLock, FaFacebookSquare, FaInstagram, } from "react-icons/fa";

const LoginView = () => {

  const [ open , setOpen ] = useState(false)

  useEffect(() =>{
    setOpen(!open)
  },[])

  const ArrayInputsText = [
    {
      name: "ID Pocket Card",
      color: true,
      type: "email",
      img: <FaUserAlt />,
    },
    {
      name: "Password",
      color: true,
      type: "password",
      img: <FaLock />,
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

  return (
    <>
      <ContainerPrimary >
        <ContainerCard translate={open}>
          <h1>Holis como estas</h1>
        </ContainerCard>
        <ContainerLogin translate={open}>
          <Login>
            <div className="img-user">
              <img src="/img/image/user.png" alt="userImg" />
            </div>
            <div className="container-title">
              <h1>Iniciar Sesion</h1>
            </div>
            <div className="seccionLogin">
              {ArrayInputsText.map((sec, index) => (
                <div className="container">
                  <div className="container-img">{sec.img}</div>
                  <div className="container-text">
                    <InputText
                      name={sec.name}
                      color={sec.color}
                      type={sec.type}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="container-button">
              <button>Login</button>
            </div>
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

export default LoginView;
