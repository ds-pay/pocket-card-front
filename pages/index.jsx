import React, { useState } from 'react'
// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import InputSelect from "../components/Inputs/InputSelect/InputSelect";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import styled from "@emotion/styled";
// import Navbar from "../components/Navbar/Navbar";
// import Home from '../views/view-home/Home'
// import News from '../views/view-notices/Notices'
// import Category from '../views/view-categories/Categories'
// import User from '../views/view-user/User'
// import Footer from '../components/Footer/Footer';

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

const Index = () => {
  const [seleccionar, setSeleccionar] = useState("home")
  
  // const selectedBody =
  // {
  //   "home": <Home/>,
  //   "news": <News/>,
  //   "category": <Category/>,
  //   "user": <User/>,
  // }

  // const renderBody = selectedBody[seleccionar];

  // const selectionBody = (s) => {
  //   setSeleccionar(s)
  // }

  return (
    <>
      {/* <Container>
        {renderBody}
      </Container> */}
    </>
  );
};

export default Index;
