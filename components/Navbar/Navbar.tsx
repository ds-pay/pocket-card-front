import React, { useState, FC } from "react";
import { ContainerNav, Seccion, ContainSeccionsViews, ContainSeccionCtrls} from "./StylesNavbar";
import { FaHome, FaBell } from "react-icons/fa";
import { HiUsers, HiUser, HiViewGridAdd } from "react-icons/hi";
import { ImNewspaper } from 'react-icons/im'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSearchAlt2 } from "react-icons/bi";
import { TiArrowSortedDown } from 'react-icons/ti';
import DropDownBurguer from '../DropDown/DropDownBurguer'
import DropDownNotifications from '../DropDown/DropDownNotifications'


const Navbar: FC = () => {

  const [ handleSun, setHandleSun ] = useState(true)
  const [ handleBurguer, setHandleBurguer ] = useState(false)
  const [ handleBell, setHandleBell ] = useState(true)


  const SeccionViews = [
    {
      state: true,
      id: "home",
      icon: <FaHome />,
    },
    {
      state: true,
      id: "screen",
      icon: <ImNewspaper />,
    },
    {
      state: true,
      id: "users",
      icon: <HiUsers />,
    },
    {
      state: true,
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
      state: true,
      id: "ctrl-theme",
      icon: <BsFillSunFill />,
      ctrol: handleSun,
      funcion: setHandleSun
    },
    {
      state: true,
      id: "bell",
      icon: <FaBell />,
      ctrol: handleBell,
      funcion: setHandleBell
    },
    {
      state: true,
      id: "img",
      icon: <img className="imgUser" src="/img/image/289103911_2199402636883740_4251348543198983925_n.jpg" alt="" />
    },
    {
      state: false,
      id: "burguer-menu",
      icon: <GiHamburgerMenu />,
      ctrol: handleBurguer,
      funcion: setHandleBurguer
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
{/*       <Seccion>
        {SeccionLogsCtrls.map((logs, index) => (
          <ContainSeccionCtrls onClick={() => logs.funcion(!logs.ctrol)} handle={logs.ctrol} isView={logs.state} id={logs.id} key={index}>
            {logs.icon}   
          </ContainSeccionCtrls>
        ))}
        <DropDownBurguer handleBurguer={handleBurguer} setHandleBurguer={setHandleBurguer}/>
        <DropDownNotifications handleBell={handleBell} setHandleBell={setHandleBell}/>
      </Seccion> */}
    </ContainerNav>
  );
};

export default Navbar;
