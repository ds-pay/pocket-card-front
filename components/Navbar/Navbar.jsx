import React, { useState, FC } from "react";
import { ContainerNav, Seccion, ContainSeccionCtrls} from "./StylesNavbar";
import { FaHome, FaBell } from "react-icons/fa";
import { HiUsers, HiUser, HiViewGridAdd } from "react-icons/hi";
import { ImNewspaper } from 'react-icons/im'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { GiHamburgerMenu } from "react-icons/gi";
import DropDownBurguer from '../DropDown/DropDownBurguer'
import DropDownNotifications from '../DropDown/DropDownNotifications'
import Search from './Search'
import SeccionMedium from './SeccionMedium'
import SeccionRight from './SeccionRight'


const Navbar = () => {

  const [ handleSun, setHandleSun ] = useState(true)
  const [ handleBurguer, setHandleBurguer ] = useState(false)
  const [ handleBell, setHandleBell ] = useState(true)
  const [ selection, setSelection ] = useState("home") 

  const selectionViw = (mira) => {
    setSelection(mira)
  }

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
        <Search/>
      </Seccion>
      <Seccion>
        <SeccionMedium selection={selection} setSelection={setSelection} selectionViw={selectionViw} SeccionViews={SeccionViews}/>
      </Seccion>
      <Seccion>
        <SeccionRight SeccionLogsCtrls={SeccionLogsCtrls}/>
      </Seccion>
      <DropDownBurguer handleBurguer={handleBurguer} setHandleBurguer={setHandleBurguer}/>
      <DropDownNotifications handleBell={handleBell} setHandleBell={setHandleBell}/>
    </ContainerNav>
  );
};

export default Navbar;
