import React, { useState, useEffect } from "react";
import { ContainerLogin, ContainerCard, ContainerNetworks, Login, ContainerPrimary } from "./stylesIndexLogin";
import InputText from "../../components/Inputs/InputText/InputText";
import { FaUserAlt, FaLock, FaFacebookSquare, FaInstagram, } from "react-icons/fa";
import { useTheme } from "@nextui-org/react";
import { useForm } from "react-hook-form";

const LoginView = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const { isDark } = useTheme();
  const [ isCommerce, setIsCommerce ] = useState()

  const LoginClient = [
    {
      id: "idpocket",
      name: "ID Pocket Card",
      color: true,
      type: "text",
      img: <FaUserAlt />,
      regis: "idpocket",
      error: errors.idpocket?.type === "required" && (<p>El campo ID Pocket Card es requerido</p>)
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
  ];

  const LogiCommerce = [
    {
      id: "emailcommerce",
      name: "Correo Electronico",
      color: true,
      type: "text",
      img: <FaUserAlt />,
      regis: "emailcommerce",
      error: errors.emailcommerce?.type === "required" && (<p>El campo Correo es requerido</p>)
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
  ];

  const onSubmit = (data) => {
    console.log(data)
  };


  const ArrayStyleTest = [
    {
      random: Math.random() * 30,
      color: "#329642" ,
      boxshadow: "0 0 0 10px #32964244, 0 0 50px #329642, 0 0 100px #329642"
    },
    {
      random: Math.random() * 30,
      color: "#F3E830",
      boxshadow: "0 0 0 10px #F3E83044, 0 0 50px #F3E830, 0 0 100px #F3E830"
    },
    {
      random: Math.random() * 30,
      color: "#B72035",
      boxshadow: "0 0 0 10px #B7203544, 0 0 50px #B72035, 0 0 100px #B72035"
    },
    {
      random: Math.random() * 30,
      color: "#B21F66",
      boxshadow: "0 0 0 10px #B21F6644, 0 0 50px #B21F66, 0 0 100px #B21F66"
    },
    {
      random: Math.random() * 30,
      color: "#399F9E",
      boxshadow: "0 0 0 10px #399F9E44, 0 0 50px #399F9E, 0 0 100px #399F9E"
    },
    {
      random: Math.random() * 30,
      color: "#736625",
      boxshadow: "0 0 0 10px #73662544, 0 0 50px #736625, 0 0 100px #736625"
    },
    {
      random: Math.random() * 30,
      color: "#FF1F5A",
      boxshadow: "0 0 0 10px #FF1F5A44, 0 0 50px #FF1F5A, 0 0 100px #FF1F5A"
    },
    {
      random: Math.random() * 30,
      color: "#1C257A",
      boxshadow: "0 0 0 10px #1C257A44, 0 0 50px #1C257A, 0 0 100px #1C257A"
    },
    {
      random: Math.random() * 30,
      color: "#2980B9",
      boxshadow: "0 0 0 10px #2980B944, 0 0 50px #2980B9, 0 0 100px #2980B9"
    },
    {
      random: Math.random() * 30,
      color: "#329642",
      boxshadow: "0 0 0 10px #32964244, 0 0 50px #329642, 0 0 100px #329642"
    },
    {
      random: Math.random() * 30,
      color: "#F3E830",
      boxshadow: "0 0 0 10px #F3E83044, 0 0 50px #F3E830, 0 0 100px #F3E830"
    },
    {
      random: Math.random() * 30,
      color: "#2980B9",
      boxshadow: "0 0 0 10px #2980B944, 0 0 50px #2980B9, 0 0 100px #2980B9"
    },
    {
      random: Math.random() * 30,
      color: "#B21F66",
      boxshadow: "0 0 0 10px #B21F6644, 0 0 50px #B21F66, 0 0 100px #B21F66"
    },
    {
      random: Math.random() * 30,
      color: "#399F9E",
      boxshadow: "0 0 0 10px #399F9E44, 0 0 50px #399F9E, 0 0 100px #399F9E"
    },
    {
      random: Math.random() * 30,
      color: "#736625",
      boxshadow: "0 0 0 10px #73662544, 0 0 50px #736625, 0 0 100px #736625"
    },
  ]

  return (
    <>
      <ContainerPrimary>
        <ContainerCard isDark={isDark}>
          <div className="conteiner-title">
            <h1>Bienvenido a...</h1>
            <img src="/img/icons/logo-pocket-white.png" alt="" />
          </div>
          <div className="container-animation">
            <div className="bubbles">
              <span></span>
              {ArrayStyleTest.map((sec, index) => (
                <>
                  <span
                    inputColor="white"
                    style={{
                      boxShadow: `${sec.boxshadow}`,
                      background: `${sec.color}`,
                      animationDuration: `calc( 125s / ${parseInt(
                        sec.random
                      )})`,
                    }}
                  ></span>
                </>
              ))}
            </div>
          </div>
        </ContainerCard>
        <ContainerLogin>
          <Login>
            <div className="container-title">
              <h1>Iniciar Sesion</h1>
            </div>
            <form className="seccionLogin" onSubmit={handleSubmit(onSubmit)}>
              {isCommerce 
                ?LogiCommerce.map((sec, index) => (
                  <div className="container">
                    <div className="container-img">{sec.img}</div>
                    <div className="container-text">
                      <InputText
                        name={sec.name}
                        color={sec.color}
                        type={sec.type}
                        regis={{
                          ...register(sec.regis, {
                            required: true,
                          }),
                        }}
                        eyetrue={sec.eyetrue}
                      />
                      {sec.error}
                    </div>
                  </div>
                )) 
                :LoginClient.map((sec, index) => (
                  <div className="container">
                    <div className="container-img">{sec.img}</div>
                    <div className="container-text">
                      <InputText
                        name={sec.name}
                        color={sec.color}
                        type={sec.type}
                        regis={{
                          ...register(sec.regis, {
                            required: true,
                          }),
                        }}
                        eyetrue={sec.eyetrue}
                      />
                      {sec.error}
                    </div>
                  </div>
                )) }
              <div className="container-button">
                <input type="submit" value="Login" />
              </div>
            </form>
          </Login>
          <div className="boton-switch" onClick={() => setIsCommerce(!isCommerce)}>
            {
              isCommerce 
              ? <p>¿Eres Cliente?</p>
              : <p>¿Eres Comercio?</p>
            }
          </div>
        </ContainerLogin>
      </ContainerPrimary>
    </>
  );
};

export default LoginView;
