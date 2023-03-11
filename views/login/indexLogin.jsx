import React, { useState, useEffect } from "react";
import { ContainerCard, ContainerPrimary } from "./stylesIndexLogin";
import { useTheme } from "@nextui-org/react";
import axios from "axios";
import LoginClient from "./LoginClient";
import LoginCommerce from "./LoginCommerce";
import Router from "next/router";

const LoginView = () => {
  const [isCommerce, setIsCommerce] = useState(false);
  // const [idPocket, setIdPocket] = useState("");
  // const [password, setPassword] = useState("");
  const { isDark } = useTheme();
  
  const onSubmitClient = async (data) => {
    // setIdPocket(data.idpocket)
    // setPassword(data.passwordpock)
    try {
      const response = await axios.post('http://localhost:3001/api/login', { idpocket: data.idpocket, passwordpock: data.passwordpock });
      alert(response.data.message)
      Router.push("/layout-admin")
    } catch (error) {
      alert(error.response.data.message)
    }
  };
  const onSubmitCommerce = async (data) => {
    try {
      const response = await axios.post('http://localhost:3001/api/login', { email: data.emailcommerce, password: data.password });
      alert(response.data.message);
      Router.push("/")
    } catch (error) {
      alert(error.response.data.message)
    }
  };


  const ArrayStyleTest = [
    {
      random: Math.random() * 30,
      color: "#329642",
      boxshadow: "0 0 0 10px #32964244, 0 0 50px #329642, 0 0 100px #329642",
    },
    {
      random: Math.random() * 30,
      color: "#F3E830",
      boxshadow: "0 0 0 10px #F3E83044, 0 0 50px #F3E830, 0 0 100px #F3E830",
    },
    {
      random: Math.random() * 30,
      color: "#B72035",
      boxshadow: "0 0 0 10px #B7203544, 0 0 50px #B72035, 0 0 100px #B72035",
    },
    {
      random: Math.random() * 30,
      color: "#B21F66",
      boxshadow: "0 0 0 10px #B21F6644, 0 0 50px #B21F66, 0 0 100px #B21F66",
    },
    {
      random: Math.random() * 30,
      color: "#399F9E",
      boxshadow: "0 0 0 10px #399F9E44, 0 0 50px #399F9E, 0 0 100px #399F9E",
    },
    {
      random: Math.random() * 30,
      color: "#736625",
      boxshadow: "0 0 0 10px #73662544, 0 0 50px #736625, 0 0 100px #736625",
    },
    {
      random: Math.random() * 30,
      color: "#FF1F5A",
      boxshadow: "0 0 0 10px #FF1F5A44, 0 0 50px #FF1F5A, 0 0 100px #FF1F5A",
    },
    {
      random: Math.random() * 30,
      color: "#1C257A",
      boxshadow: "0 0 0 10px #1C257A44, 0 0 50px #1C257A, 0 0 100px #1C257A",
    },
    {
      random: Math.random() * 30,
      color: "#2980B9",
      boxshadow: "0 0 0 10px #2980B944, 0 0 50px #2980B9, 0 0 100px #2980B9",
    },
    {
      random: Math.random() * 30,
      color: "#329642",
      boxshadow: "0 0 0 10px #32964244, 0 0 50px #329642, 0 0 100px #329642",
    },
    {
      random: Math.random() * 30,
      color: "#F3E830",
      boxshadow: "0 0 0 10px #F3E83044, 0 0 50px #F3E830, 0 0 100px #F3E830",
    },
    {
      random: Math.random() * 30,
      color: "#2980B9",
      boxshadow: "0 0 0 10px #2980B944, 0 0 50px #2980B9, 0 0 100px #2980B9",
    },
    {
      random: Math.random() * 30,
      color: "#B21F66",
      boxshadow: "0 0 0 10px #B21F6644, 0 0 50px #B21F66, 0 0 100px #B21F66",
    },
    {
      random: Math.random() * 30,
      color: "#399F9E",
      boxshadow: "0 0 0 10px #399F9E44, 0 0 50px #399F9E, 0 0 100px #399F9E",
    },
    {
      random: Math.random() * 30,
      color: "#736625",
      boxshadow: "0 0 0 10px #73662544, 0 0 50px #736625, 0 0 100px #736625",
    },
  ];

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
                <span
                  style={{
                    boxShadow: `${sec.boxshadow}`,
                    background: `${sec.color}`,
                    animationDuration: `calc( 125s / ${parseInt(
                      sec.random
                    )})`,
                  }}
                  key={index}
                ></span>
              ))}
            </div>
          </div>
        </ContainerCard>
        <LoginClient setIsCommerce={setIsCommerce} isCommerce={isCommerce} onSubmitClient={onSubmitClient} />
        <LoginCommerce setIsCommerce={setIsCommerce} isCommerce={isCommerce} onSubmitCommerce={onSubmitCommerce}/>
        
      </ContainerPrimary>
    </>
  );
};

export default LoginView;
