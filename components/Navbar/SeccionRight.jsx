import React from 'react'
import { Seccion, ContainSeccionCtrls } from "./StylesNavbar";

const SeccionRight = ({ SeccionLogsCtrls }) => {
  return (
    <Seccion>
        {SeccionLogsCtrls.map((logs, index) => (
            <ContainSeccionCtrls onClick={() => logs.funcion(!logs.ctrol)} handle={logs.ctrol} isView={logs.state} id={logs.id} key={index}>
            {logs.icon}   
            </ContainSeccionCtrls>
        ))}
    </Seccion>
  )
}

export default SeccionRight