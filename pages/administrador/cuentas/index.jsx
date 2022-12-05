import React, { useState } from 'react'
import FormularioCrearCliente from './FormularioCrearCliente'
import FormularioCrearComercio from './FormularioCrearComercio'
import { MdGroups, MdCloudUpload, MdOutlineArrowBack } from 'react-icons/md'
import { RiUserAddFill, RiUserSearchFill } from 'react-icons/ri'
import styled from '@emotion/styled'


const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  .cardContent {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;

    h3 {
      cursor: pointer;
    }
    .card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 10rem;
      height: 12rem;
      background-color: var(--nextui-colors-backgroundForm);
      color: var(--nextui-colors-textFormColor);
      border-radius: 1rem;
      transition: 0.3s all ease;
      -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
      -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
      box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
      cursor: pointer;
      :hover {
        transform: scale(1.2, 1.2);
      }
      .container-icon {
        font-size: 3rem;
      }
    }
  }
`;

const BottonBack = styled.div`
  position: absolute;
  padding: 0.5rem;
  background-color: var(--nextui-colors-backgroundNavbar);
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 0.5rem;
  transition: 0.5s all ease;
  :hover {
    background-color: var(--nextui-colors-bgThridGlass);
    cursor: pointer;
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
          <BottonBack onClick={() => setIsSelection(!isSelection) }> <MdOutlineArrowBack/>Back</BottonBack>
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