import React, { useEffect, useState } from "react";
import { SidebarContainer, Content, Head, ButtonArrow, ContainerSeccion} from "./StylesSidebar";
import { IoMdNotifications, IoLogoPlaystation } from "react-icons/io";
import { SiTheconversation } from "react-icons/si";
import { HiUser } from "react-icons/hi";
import { FaNewspaper } from "react-icons/fa";
import { TbAntennaBars5, TbSlideshow } from "react-icons/tb";
import { MdKeyboardArrowLeft, MdDoNotDisturbOnTotalSilence } from "react-icons/md";
// import Cuentas from './cuentas'
// import Convenios from './convenios'
// import Bonos from './bonos'
// import SlideShow from './slider'
// import Noticias from './noticias'
// import Notificaciones from './notificaciones'
// import Estadisticas from './stadistics'

const Sidebar = ({ isSelected, setIsSelected }) => {
  const [isActivate, setIsActivate] = useState(true);

  const handleClick = (id) => {
    setIsSelected(id);
  };

  const ContentSidebar = [
    {
      id: "cuentas",
      img: <HiUser />,
      label: "Cuentas",
    },
    {
      id: "convenios",
      img: <SiTheconversation />,
      label: "Convenios",
    },
    {
      id: "bonos",
      img: <MdDoNotDisturbOnTotalSilence />,
      label: "Bonos",
    },
    {
      id: "slider",
      img: <TbSlideshow />,
      label: "Slider Show",
    },
    {
      id: "noticias",
      img: <FaNewspaper />,
      label: "Noticias",
      notifications: "15",
      notifyBolean: true,
    },
    {
      id: "notificaciones",
      img: <IoMdNotifications />,
      label: "Notificaciones",
      notifications: "15",
      notifyBolean: true,
    },
    {
      id: "estadisticas",
      img: <TbAntennaBars5 />,
      label: "Estadisticas",
    },
  ];

  return (
    <SidebarContainer isActivate={isActivate}>
      <ButtonArrow
        isActivate={isActivate}
        onClick={() => setIsActivate(!isActivate)}
      >
        <MdKeyboardArrowLeft />
      </ButtonArrow>
      <Head isActivate={isActivate}>
        <div className="content">
          <div className="contain-logo">
            <IoLogoPlaystation size={30} />
          </div>
          <div className="contain-name">PocketCard</div>
        </div>
      </Head>
      <Content isActivate={isActivate}>
        <p className="title">Menu</p>
        {ContentSidebar.map((sec, index) => (
          <ContainerSeccion
            isActivate={isActivate}
            key={index}
            isSelected={isSelected === sec.id ? true : false}
            onClick={() => handleClick(sec.id)}
          >
            <div leftIsTrue={true} className="contain-img">
              {sec.img}
            </div>
            <div leftIsTrue={true} className="contain-label">
              <h3>{sec.label}</h3>
            </div>
            {sec.notifyBolean && (
              <div leftIsTrue={false} className="contain-notifi">
                <h3>{sec.notifications}</h3>
              </div>
            )}
          </ContainerSeccion>
        ))}
      </Content>
    </SidebarContainer>
  );
};

export default Sidebar;
