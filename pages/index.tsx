import type { NextPage } from "next";
// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import InputSelect from "../components/Inputs/InputSelect/InputSelect";
import TestInputsReutility from '../components/TestComponents/TestInputsReutility'
import {
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  .container-input-select{
    width: 100%;
  }
  .container-test-input{
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
  }
`;

const Home: NextPage = () => {

  const ContentDropDown = [
    {
      id: "facebook",
      label: "Facebook",
      icon: <BsFacebook />,
      value: "facebook",
    },
    {
      id: "linkedin",
      label: "Linkedin",
      icon: <AiFillLinkedin />,
      value: "linkedin",
    },
    {
      id: "instagram",
      label: "Instagram",
      icon: <BsInstagram />,
      value: "instagram",
    },
    {
      id: "twitter",
      label: "Twitter",
      icon: <AiOutlineTwitter />,
      value: "twitter",
    },
    {
      id: "youtube",
      label: "Youtube",
      icon: <AiFillYoutube />,
      value: "youtube",
    },
  ];

  return (
    <>
      <Container>
        <div className="container-input-select">
          <InputSelect dataSelectList={ContentDropDown} useIcons={true} />
        </div>
        <div className="container-test-input">
         {/* <TestInputsReutility/> */}<h1>Hola Comercio Correo@correo.com</h1>
        </div>
      </Container>
    </>
  );
};

export default Home;
