import React, { useState } from 'react'
import FormularioCrearCliente from './FormularioCrearCliente'
import FormularioCrearComercio from './FormularioCrearComercio'
import styled from '@emotion/styled'


const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  .cardContent{
    display: flex;
    .card{
      
    }
  }

`;

const index = () => {
  const [ secSelection, setSecSelection ] = useState(false)
  const [ section, setSection ] = useState("")
  


  const SeleccionSeccion = [
    {
      id: "formClient",
      content: <FormularioCrearCliente />,
      Label: "Crear Cliente"
    },
    {
      id: "formCommerce",
      content: <FormularioCrearComercio />,
      Label: "Crear Comercio"
    }
  ]

  const handleCreateSection = () =>{
    if ( section === "formClient" ){
      return <FormularioCrearCliente />
    } else {
      return <FormularioCrearComercio />
    }
  }


  return (
    <>
      { secSelection
      ? <>{handleCreateSection()}</>
      : <ContentCard>
          <h1>Elige una opcion</h1>
          <div className='cardContent'>
            {SeleccionSeccion.map((sec, index) => (
              <div className='card'>
                holis
              </div>
            ))}
          </div>
        </ContentCard>
      }
    </>
  )
}

export default index