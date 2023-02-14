import React, { Fragment } from "react";
import { ContainerDropdown, DrpdownBurguer, Seccion } from "./StyleDropDown";
import { HiUser } from "react-icons/hi";
import { GoGear } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa";
import { VscSignOut } from "react-icons/vsc";
import { IoIosRibbon } from "react-icons/io";
import { useRouter } from "next/router";

const DropDown = ({ handleBurguer }) => {
  const router = useRouter()

  const handleRouter = (href) => {
    router.push(`/${href}`)
  }

  const SeccionConfig = [
    {
      id: "profile",
      icon: <HiUser />,
      description: "Mi perfil",
      href: "/"
    },
    {
      id: "bonus",
      icon: <IoIosRibbon />,
      description: "Mis Bonos",
      href: "/my-bonus"
    },
    {
      id: "settings",
      icon: <GoGear />,
      description: "Configuraciones",
      arrow: <FaArrowRight />,
      href: "/"
    },
    {
      id: "quit",
      icon: <VscSignOut />,
      description: "Cerrar Sesión",
      href: "/"
    },
  ];
  // const render = () => {
  //   if (!handleBurguer) return;
  //   return (

  //   );
  // };

  return (
    <ContainerDropdown handleBurguer={handleBurguer}>
    <DrpdownBurguer handleBurguer={handleBurguer}>
      {SeccionConfig.map((sec, index) => (
        <Seccion onClick={() => handleRouter(sec.href)} id={sec.id} key={index}>
          <div className="seccion-1">
            {sec.icon}
            <p>{sec.description}</p>
          </div>
          <div className="seccion-2">
            {sec.arrow}
          </div>
        </Seccion>
      ))}
    </DrpdownBurguer>
  </ContainerDropdown>
  );
};

export default DropDown;
