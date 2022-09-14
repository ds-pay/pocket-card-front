import React from 'react'
import { ContainerDropOne } from './StyleDropDown'

const DropDown = ({ handleBurguer }) => {

    const SeccionConfig = [
        {
            id: "profile",
            icon: "ico",
            description: "Mi perfil"
        },
        {
            id: "settings",
            icon: "ico",
            description: "Configuraciones"
        },
        {
            id: "quit",
            icon: "ico",
            description: "Cerrar Sesión"
        }
    ]

  return (
    <ContainerDropOne handleBurguer={handleBurguer} >
        {SeccionConfig.map((sec, index) => (
            <div>

            </div>
        ))}
    </ContainerDropOne>
  )
}

export default DropDown