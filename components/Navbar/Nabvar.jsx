import React from "react";
import { ContainerNav, Seccion, ContainSeccionsViews, ContainSeccionCtrls} from "./StylesNavbar";
import { FaHome, FaBell } from "react-icons/fa";
import { HiUsers, HiUser, HiViewGridAdd } from "react-icons/hi";
import { ImNewspaper } from 'react-icons/im'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSearchAlt2 } from "react-icons/bi";
import { TiArrowSortedDown } from 'react-icons/ti';


const Nabvar = () => {
  const SeccionViews = [
    {
      id: "home",
      icon: <FaHome />,
    },
    {
      id: "screen",
      icon: <ImNewspaper />,
    },
    {
      id: "users",
      icon: <HiUsers />,
    },
    {
      id: "user",
      icon: <HiUser />,
    },

    // {
    //   id: "carousel",
    //   icon: <MdViewCarousel />,
    // },
  ];

  const SeccionLogsCtrls = [
    {
      id: "ctrl-theme",
      icon: <BsFillSunFill />,
    },
    {
      id: "bell",
      icon: <FaBell />,
    },
    {
      id: "img",
      icon: <img src="/img/image/289103911_2199402636883740_4251348543198983925_n.jpg" alt="" />
    },
    {
      id: "burguer-menu",
      icon: <GiHamburgerMenu />,
    },
  ];

  return (
    <ContainerNav>
      <Seccion>
        <div className="browser">
          <input type="text" placeholder="Busca en Pocket" />
          <BiSearchAlt2 />
        </div>
      </Seccion>
      <Seccion>
        {SeccionViews.map((viw, index) => (
          <ContainSeccionsViews id={viw.id} key={index}>
            {viw.icon}
          </ContainSeccionsViews>
        ))}
      </Seccion>
      <Seccion>
        {SeccionLogsCtrls.map((logs, index) => (
          <ContainSeccionCtrls id={logs.id} key={index}>
            {logs.icon}   
          </ContainSeccionCtrls>
        ))}
      </Seccion>
    </ContainerNav>
  );
};

export default Nabvar;
