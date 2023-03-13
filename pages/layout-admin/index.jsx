import React, { useState } from 'react'
import styled from '@emotion/styled'
import Sidebar from '../../components/Sidebar/Sidebar';
import Cuentas from './cuentas'
import Convenios from './convenios'
import Bonos from './bonos'
import SlideShow from './slider'
import Noticias from './noticias'
import Notificaciones from './notificaciones'
import Estadisticas from './stadistics'
import { IoMdNotifications } from "react-icons/io";
import { SiTheconversation } from "react-icons/si";
import { HiUser } from "react-icons/hi";
import { FaNewspaper } from "react-icons/fa";
import { TbAntennaBars5, TbSlideshow } from "react-icons/tb";
import { MdDoNotDisturbOnTotalSilence } from "react-icons/md";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 150vh;
  overflow: hidden;
  overflow-y: scroll;
  @media(max-width: 600px){
    height: 100vh;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
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
    <Container>
      <Sidebar
        ContentMenu={ContentMenu}
        isSelected={isSelected}
        setIsSelected={setIsSelected}
        title={"PocketCard"}
        img={"/img/Icons/Icono-Pocket.png"}
      />
      {ContentMenu.map((sec) =>
        isSelected === sec.id ? <Content> {sec.route} </Content> : null
      )}
    </Container>
  );
}

export default index