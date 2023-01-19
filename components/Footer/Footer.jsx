import React from 'react'
import { ContainerFooter } from './StylesFooter'
import {FaHeadset, FaNewspaper} from 'react-icons/fa'
import {BsFillQuestionCircleFill} from 'react-icons/bs'

const Footer = () => {

    const ArrayItems = [
        {
            id: "button1",
            className: "sectionFooter",
            label: "Habla con nosotros",
            icon: <FaHeadset />,
            labelbutton: "Servicio al cliente"
        },
        {
            id: "button2",
            className: "sectionFooter",
            label: "Conoce lo nuevo",
            icon: <FaNewspaper />,
            labelbutton: "Noticias de Viajes"
        },
        {
            id: "button3",
            className: "sectionFooter",
            label: "Resuelve tus dudas",
            icon: <BsFillQuestionCircleFill />,
            labelbutton: "Preguntas Frecuentes"
        }
    ]

    return (
        <ContainerFooter>
            <div className='divFooterPrimary'>
                {ArrayItems.map((sec, index) => (
                    <div key={index} className={sec.className}>
                        <h1>{sec.label}</h1>
                        <button>{sec.icon} {sec.labelbutton}</button>
                    </div>
                ))}
            </div>
            <div className='divFooterSecundary'> <h1>Pocket Card - Todos los derechos reservados © {new Date().getFullYear()}</h1></div>
        </ContainerFooter>
    )
}

export default Footer