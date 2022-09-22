import React from 'react'
import { Seccion, ContainSeccionsViews } from "./StylesNavbar";


const SeccionMedium = ({ SeccionViews, selection, setSelection, selectionViw }) => {


  return (
    <Seccion>
        {SeccionViews.map((viw, index) => (
            <ContainSeccionsViews isSelected={ selection === viw.id? true : false } onClick={() => selectionViw(viw.id)} id={viw.id} key={index}>
                {viw.icon}
            </ContainSeccionsViews>
        ))}
    </Seccion>
  )
}

export default SeccionMedium