import React, { useState } from 'react'
import FormularioCrearCliente from './FormularioCrearCliente'
import FormularioCrearComercio from './FormularioCrearComercio'
import { MdGroups, MdCloudUpload } from 'react-icons/md'
import { RiUserAddFill, RiUserSearchFill } from 'react-icons/ri'
import styled from '@emotion/styled'


const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  
  .cardContent{
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;

    h3{
      cursor: pointer;
    }
    .card{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 10rem;
      height: 12rem;
      background-color: aqua;
      border-radius: 1rem;
      transition: 0.3s all ease;
      cursor: pointer;
      :hover{
        transform: scale(1.2, 1.2);
      }
      .container-icon{
        font-size: 3rem;
      }
    }
  }

`;

const index = () => {
  const [ isSelection, setIsSelection ] = useState(false)
  const [ section, setSection ] = useState("")
  

  const handleClick = (id) => {
    setIsSelection(!isSelection)
    setSection(id)
  }

  const SeleccionSeccion = [
    {
      id: "search",
      content: <FormularioCrearComercio />,
      Label: "Buscar Cuenta",
      icon: <RiUserSearchFill />
    },
    {
      id: "formClient",
      content: <FormularioCrearCliente />,
      Label: "Crear Cliente",
      icon: <RiUserAddFill />
    },
    {
      id: "formCommerce",
      content: <FormularioCrearComercio />,
      Label: "Crear Comercio",
      icon: <MdGroups />
    },
    {
      id: "bulkload",
      content: <FormularioCrearComercio />,
      Label: "Carga Masiva",
      icon: <MdCloudUpload />
    }
  ];

  const handleCreateSection = () =>{
    // if ( section === "formClient" ){
    //   return <><FormularioCrearCliente /></>
    // } else {
    //   return <><FormularioCrearComercio /></>
    // }
    return (
      <>
        {SeleccionSeccion.map((sec,index) => (
          section === sec.id
          ? sec.content
          :null
        ))}
      </>
    )
  };


  return (
    <>
      { isSelection
      ? <>
          <div onClick={() => setIsSelection(!isSelection) }>regresar</div>
          {handleCreateSection()}
        </>
      : <ContentCard>
          <h1>Elige una opcion</h1>
          <div className='cardContent'>
            {SeleccionSeccion.map((sec, index) => (
              <div className='card' onClick={ () => handleClick(sec.id)}>
                <div className='container-icon'>{sec.icon}</div>
                {sec.Label}
              </div>
            ))}
          </div>
        </ContentCard>
      }
    </>
  )
}

export default index