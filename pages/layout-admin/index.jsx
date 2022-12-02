import React, { useState } from 'react'
import styled from '@emotion/styled'
import Sidebar from './Sidebar/Sidebar';
import Cuentas from '../administrador/cuentas'
import Convenios from '../administrador/convenios'
import Bonos from '../administrador/bonos'
import SlideShow from '../administrador/slider'
import Noticias from '../administrador/noticias'
import Notificaciones from '../administrador/notificaciones'
import Estadisticas from '../administrador/stadistics'

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 0 2rem;
`;


const index = () => {
  const [isSelected, setIsSelected] = useState("cuentas");
  
  const ContentMenu = [
    {
      id: "cuentas",
      route: <Cuentas />,
    },
    {
      id: "convenios",
      route: <Convenios />,
    },
    {
      id: "bonos",
      route: <Bonos />,
    },
    {
      id: "slider",
      route: <SlideShow />,
    },
    {
      id: "noticias",
      route: <Noticias />,
    },
    {
      id: "notificaciones",
      route: <Notificaciones />,
    },
    {
      id: "estadisticas",
      route: <Estadisticas />,
    },
  ]


  return (
    <>
      <Sidebar isSelected={isSelected} setIsSelected={setIsSelected} />
      <Container>
        {ContentMenu.map((sec, index) => (
          isSelected === sec.id 
          ?<Content> {sec.route} </Content>
          : null
        ))}
      </Container>
    </>
  );
}

export default index