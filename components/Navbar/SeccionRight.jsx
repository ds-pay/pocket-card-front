import React from 'react'
import { Seccion, ContainSeccionCtrls } from "./StylesNavbar";

const SeccionRight = ({ SeccionLogsCtrls }) => {

  function FuntionActivate(s){
    console.log("me he activado")
    s.funcion(!s.ctrol)
  }  

  return (
    <Seccion>
        {SeccionLogsCtrls.map((logs, index) => (
            <ContainSeccionCtrls  onClick={() => FuntionActivate(logs)} handle={logs.ctrol} isView={logs.state} id={logs.id} key={index}>
            {logs.icon1}   
            </ContainSeccionCtrls>
        ))}
    </Seccion>
  )
}

export default SeccionRight