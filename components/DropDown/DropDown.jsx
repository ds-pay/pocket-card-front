import React from 'react'
import { ContainerDropdown, DrpdownBurguer, Seccion } from './StyleDropDown'
import { HiUser } from "react-icons/hi";
import { GoGear } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa"
import { VscSignOut } from "react-icons/vsc"


const DropDown = ({ handleBurguer }) => {

    const SeccionConfig = [
        {
            id: "profile",
            icon: <HiUser/>,
            description: "Mi perfil",
        },
        {
            id: "settings",
            icon: <GoGear/>,
            description: "Configuraciones",
            arrow: <FaArrowRight/>
        },
        {
            id: "quit",
            icon: <VscSignOut/>,
            description: "Cerrar Sesión",
        }
    ]

  return (
    <ContainerDropdown handleBurguer={handleBurguer} >
        <DrpdownBurguer>
            {SeccionConfig.map((sec, index) => (
                <Seccion id={sec.id} key={index}>
                    <div isJustify={true} className="seccion-1"> 
                        {sec.icon}
                        <p>{sec.description}</p> 
                    </div>
                    <div isJustify={false} className="seccion-2">
                        {sec.arrow}
                    </div>
                </Seccion>
            ))}
        </DrpdownBurguer>
        
    </ContainerDropdown>
  )
}

export default DropDown