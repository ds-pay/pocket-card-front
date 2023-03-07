import React, { useState, FC } from "react";
import { ContainerNav, Seccion, ContainSeccionCtrls} from "./StylesNavbar";
import { FaHome, FaBell } from "react-icons/fa";
import { HiUser } from "react-icons/hi";
import { ImNewspaper } from 'react-icons/im'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { BiCategoryAlt } from 'react-icons/bi'
import { GiHamburgerMenu } from "react-icons/gi";
import { changeTheme, Text, useTheme } from '@nextui-org/react'
import DropDownBurguer from '../DropDown/DropDownBurguer'
import DropDownNotifications from '../DropDown/DropDownNotifications'
import Search from './Search'
import SeccionMedium from './SeccionMedium'
import SeccionRight from './SeccionRight'


const Navbar = () => {

  // const [ handleTheme, setHandleTheme ] = useState(true)
  const [ handleBurguer, setHandleBurguer ] = useState(false);
  const [ handleBell, setHandleBell ] = useState(true);
  const [ selection, setSelection ] = useState("home");

  const { isDark } = useTheme();
  
  const handleChange = () => {
    const nextTheme = isDark ? 'light' : 'dark';
    window.localStorage.setItem('theme', nextTheme);
    changeTheme(nextTheme);
  };

  const selectionViw = (sec) => {
    setSelection(sec)
  };

  const SeccionViews = [
    {
      state: true,
      id: "home",
      icon: <FaHome />,
      href: '/home'
    },
    {
      state: true,
      id: "news",
      icon: <ImNewspaper />,
      href: '/news'
    },
    {
      state: true,
      id: "category",
      icon: <BiCategoryAlt />,
      href: '/categories'
    },
    {
      state: true,
      id: "user",
      icon: <HiUser />,
      href: '/my-profile'
    },
  ];

  const SeccionLogsCtrls = [
    {
      state: true,
      id: "ctrl-theme",
      icon1: isDark ? <BsFillMoonFill /> : <BsFillSunFill />,
      ctrol: isDark,
      funcion: handleChange,
    },
    {
      state: true,
      id: "bell",
      icon1: <FaBell />,
      ctrol: handleBell,
      funcion: setHandleBell
    },
    {
      state: true,
      id: "img",
      icon1: <img className="imgUser" src="/img/image/gatodenegocios.jpeg" alt="" />
    },
    {
      state: false,
      id: "burguer-menu",
      icon1: <GiHamburgerMenu />,
      ctrol: handleBurguer,
      funcion: setHandleBurguer
    },
  ];

  return (
    <ContainerNav isDark={isDark} >
      <Seccion isDark={isDark}>
        <Search/>
      </Seccion>
      <Seccion>
        <SeccionMedium isDark={isDark} selection={selection} setSelection={setSelection} selectionViw={selectionViw} SeccionViews={SeccionViews}/>
      </Seccion>
      <Seccion>
        <SeccionRight isDark={isDark} SeccionLogsCtrls={SeccionLogsCtrls}/>
      </Seccion>
      <DropDownBurguer isDark={isDark} handleBurguer={handleBurguer} setHandleBurguer={setHandleBurguer}/>
      <DropDownNotifications isDark={isDark} handleBell={handleBell} setHandleBell={setHandleBell}/>
    </ContainerNav>
  );
};


export async function getStaticProps() {
  const url = `${process.env.API_LOCAL}/api/notifications`;
  const res = await fetch(url);
  const json = await res.json();
  console.log(json.notifications)

  return {
    props: {
      notifications: json.notifications
    }
  }
}

export default Navbar;
