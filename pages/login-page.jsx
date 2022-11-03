import React from 'react'
import LoginView from '../views/login/indexLogin'
import Navbar from '../components/Navbar/Navbar'

const loginPage = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          margin: "0",
          padding: "0",
          display: "flex",
          width: "100%",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <LoginView />
      </div>
    </>
  );
}

export default loginPage 