import React from 'react'
import { ContainSeccionCtrls } from "./StylesNavbar";

const SeccionRight = ({ SeccionLogsCtrls }) => {

  function FuntionActivate(s){
    s.funcion(!s.ctrol)
  }  

  return (
    <>
        {SeccionLogsCtrls.map((logs, index) => (
            <ContainSeccionCtrls  onClick={() => FuntionActivate(logs)} handle={logs.ctrol} isView={logs.state} id={logs.id} key={index}>
            {logs.icon1}   
            </ContainSeccionCtrls>
        ))}
    </>
  )
}

export default SeccionRight