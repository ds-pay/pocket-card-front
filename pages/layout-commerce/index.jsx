import { useState } from 'react';
import styled from '@emotion/styled';
import SideBar from '../../components/Sidebar/Sidebar'
import { HiUser } from "react-icons/hi";
import { MdDoNotDisturbOnTotalSilence } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { TbAntennaBars5 } from "react-icons/tb";
import { FaNewspaper } from "react-icons/fa";
import MyClients from './myclients/index'
import MyBonus from './mybonus/index'
import MyStats from './mystats/index'
import MyNotifications from './mynotifications/index'
import MyNews from './mynews/index'

const Container = styled.div`
  display: flex;
  position: relative;
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const index = () => {

  const [isSelected, setIsSelected] = useState("1243")

  const ContentMenu = [
    {
      id: "1243",
      route: <MyClients />,
      img: <HiUser />,
      label: "Mis Clientes"
    },
    {
      id: "254432",
      route: <MyBonus />,
      img: <MdDoNotDisturbOnTotalSilence />,
      label: "Mis Bonos"
    },
    {
      id: "3523",
      route: <MyStats />,
      img: <TbAntennaBars5 />,
      label: "Mis Estadisticas"
    },
    {
      id: "464535",
      route: <MyNotifications />,
      img: <IoMdNotifications />,
      label: "Mis Notificaciones"
    },
    {
      id: "5536",
      route: <MyNews />,
      img: <FaNewspaper />,
      label: "Mis Noticias",
    },
  ]


  return (
    <Container>
      <SideBar isSelected={isSelected} setIsSelected={setIsSelected} title={"OnlineService"} ContentMenu={ContentMenu} />
      {ContentMenu.map((sec) =>
        isSelected === sec.id ? <Content> {sec.route} </Content> : null
      )}
    </Container>
  )
}

export default index