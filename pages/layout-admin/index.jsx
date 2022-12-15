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
import { IoMdNotifications } from "react-icons/io";
import { SiTheconversation } from "react-icons/si";
import { HiUser } from "react-icons/hi";
import { FaNewspaper } from "react-icons/fa";
import { TbAntennaBars5, TbSlideshow } from "react-icons/tb";
import { MdDoNotDisturbOnTotalSilence } from "react-icons/md";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 0 0 4rem;
`;


const index = () => {
  const [isSelected, setIsSelected] = useState("cuentas");
  
  const ContentMenu = [
    {
      id: "cuentas",
      route: <Cuentas />,
      img: <HiUser />,
      label: "Cuentas",
    },
    {
      id: "convenios",
      route: <Convenios />,
      img: <SiTheconversation />,
      label: "Convenios",
    },
    {
      id: "bonos",
      route: <Bonos />,
      img: <MdDoNotDisturbOnTotalSilence />,
      label: "Bonos",
    },
    {
      id: "slider",
      route: <SlideShow />,
      img: <TbSlideshow />,
      label: "Slider Show",
    },
    {
      id: "noticias",
      route: <Noticias />,
      img: <FaNewspaper />,
      label: "Noticias",
      notifications: "15",
      notifyBolean: true,
    },
    {
      id: "notificaciones",
      route: <Notificaciones />,
      img: <IoMdNotifications />,
      label: "Notificaciones",
      notifications: "15",
      notifyBolean: true,
    },
    {
      id: "estadisticas",
      route: <Estadisticas />,
      img: <TbAntennaBars5 />,
      label: "Estadisticas",
    },
  ];

  return (
    <>
      <Sidebar ContentMenu={ContentMenu} isSelected={isSelected} setIsSelected={setIsSelected} />
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