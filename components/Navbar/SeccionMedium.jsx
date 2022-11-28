import React from 'react'
import { ContainSeccionsViews } from "./StylesNavbar";


const SeccionMedium = ({ SeccionViews, selection, setSelection, selectionViw, isDark }) => {


  return (
    <>
        {SeccionViews.map((viw, index) => (
            <ContainSeccionsViews isDark={isDark} isSelected={ selection === viw.id? true : false } onClick={() => selectionViw(viw.id)} id={viw.id} key={index}>
                {viw.icon}
            </ContainSeccionsViews>
        ))}
    </>
  )
}

export default SeccionMedium