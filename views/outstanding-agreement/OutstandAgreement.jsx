import React from 'react';
import { ContainerGeneral } from './StyleOutstandAgreement';


const OutstandAgreement = ({data}) => {
  return (
    <ContainerGeneral>
      {
        data?.map((sec, index) => (
          <div className='cardcotainer' key={index}>
            <h1>{sec.title}</h1>
            <img src={sec.img} alt="" />
          </div>
        ))
      }
    </ContainerGeneral>
  )
}

export default OutstandAgreement