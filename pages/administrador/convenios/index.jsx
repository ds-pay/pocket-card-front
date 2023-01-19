import React, { useState } from 'react'
import Submenu from '../../../components/Submenu/Submenu'
import styled from '@emotion/styled'
import NuevoConvenio from './NuevoConvenio'
import BuscarConvenio from './BuscarConvenio'
import { FiPlusCircle } from 'react-icons/fi'
import { FaSearch } from 'react-icons/fa'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Content = styled.div`
  padding-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const index = () => {

  const [isSelection, setIsSelection] = useState(false);
  const [section, setSelection] = useState("");

  const handleClick = (id) => {
    setIsSelection(!isSelection)
    setSelection(id)
  }

  const SelectionSeccion = [
    {
      id: "createagreements",
      label: "Nuevo Convenio",
      content: <NuevoConvenio />,
      icon: <FiPlusCircle />
    },
    {
      id: "searchagreements",
      label: "Buscar Convenio",
      content: <BuscarConvenio/>,
      icon: <FaSearch/>
    },
  ];

  return (
    <Container>
      <Submenu array={SelectionSeccion} section={section} handleClick={handleClick}/>
      <Content>
        {SelectionSeccion.map((sec, index) => (
          section === sec.id ? sec.content : null
        ))}
      </Content>
    </Container>
  )
}

export default index