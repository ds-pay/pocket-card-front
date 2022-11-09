import React, { useState, useEffect } from "react";
import { ContainerLogin, ContainerCard, ContainerNetworks, Login, ContainerPrimary } from "./stylesIndexLogin";
import InputText from "../../components/Inputs/InputText/InputText";
import { FaUserAlt, FaLock, FaFacebookSquare, FaInstagram, } from "react-icons/fa";

const LoginView = () => {

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

  const ArrayStyle = [
    {
      stylr: <span style={{animationDuration: `calc( 125s / ${parseInt(Math.random() * 30)})`}}></span>
    },
    {
      stylr: <span style={{animationDuration: `calc( 125s / ${parseInt(Math.random() * 30)})`}}></span>
    },
    {
      stylr: <span style={{animationDuration: `calc( 125s / ${parseInt(Math.random() * 30)})`}}></span>
    },
    {
      stylr: <span style={{animationDuration: `calc( 125s / ${parseInt(Math.random() * 30)})`}}></span>
    },
    {
      stylr: <span style={{animationDuration: `calc( 125s / ${parseInt(Math.random() * 30)})`}}></span>
    },
    {
      stylr: <span style={{animationDuration: `calc( 125s / ${parseInt(Math.random() * 30)})`}}></span>
    },
    {
      stylr: <span style={{animationDuration: `calc( 125s / ${parseInt(Math.random() * 30)})`}}></span>
    },
    {
      stylr: <span style={{animationDuration: `calc( 125s / ${parseInt(Math.random() * 30)})`}}></span>
    },
    {
      stylr: <span style={{animationDuration: `calc( 125s / ${parseInt(Math.random() * 30)})`}}></span>
    },
    {
      stylr: <span style={{animationDuration: `calc( 125s / ${parseInt(Math.random() * 30)})`}}></span>
    },
    {
      stylr: <span style={{animationDuration: `calc( 125s / ${parseInt(Math.random() * 30)})`}}></span>
    },
    {
      stylr: <span style={{animationDuration: `calc( 125s / ${parseInt(Math.random() * 30)})`}}></span>
    },
  ]
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
  ]

  return (
    <>
      <ContainerPrimary>
        <ContainerCard>
          <div className="conteiner-title">
            <h1>Bienvenido a...</h1>
            <img src="/img/icons/logo-pocket-white.png" alt="" />
          </div>
          {/* <h1>holis</h1> */}
          <div className="container-animation">
            <div className="bubbles" >
            <span ></span>
            {ArrayStyleTest.map((sec, index) => (
              <>
                <span inputColor="white" style={{boxShadow: `${sec.boxshadow}`, background: `${sec.color}`,animationDuration: `calc( 125s / ${parseInt(sec.random)})`}}></span>
              </>
            ))}
            </div>
          </div>
        </ContainerCard>
        <ContainerLogin>
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
