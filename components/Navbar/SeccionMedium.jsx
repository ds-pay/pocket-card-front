import React from 'react'
import { ContainSeccionsViews } from "./StylesNavbar";
import Link from 'next/link';


const SeccionMedium = ({ SeccionViews, selection, setSelection, selectionViw, isDark }) => {


  return (
    <>
        {SeccionViews.map((viw, index) => (
          <Link href={viw.href} key={index}>
            <ContainSeccionsViews isDark={isDark} isSelected={ selection === viw.id? true : false } onClick={() => selectionViw(viw.id)} id={viw.id}>
              <a>{viw.icon}</a>
            </ContainSeccionsViews>
          </Link>
        ))}
    </>
  )
}

export default SeccionMedium