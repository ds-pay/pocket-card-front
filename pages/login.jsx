import React from 'react'
import LoginView from '../views/login/indexLogin'
import Navbar from '../components/Navbar/Navbar'
import styled from '@emotion/styled';
// import { LoginPage } from '../views/login/stylesIndexLogin'

const LoginPage = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const loginPage = () => {
  return (
    <>
      <Navbar />
      <LoginPage>
        <LoginView />
      </LoginPage>
    </>
  );
}

export default loginPage 