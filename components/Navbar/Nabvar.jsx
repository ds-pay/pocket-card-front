import React from "react";
import { Seccion, ContainSeccionsViews, ContainSeccionCtrls} from "./StylesNavbar";
import { FaHome, FaBell } from "react-icons/fa";
import { HiUsers, HiUser, HiViewGridAdd } from "react-icons/hi";
import { CgScreen } from "react-icons/cg";
import { ImNewspaper } from 'react-icons/im'
import { MdPolicy } from 'react-icons/md'
import { MdViewCarousel } from "react-icons/md";
import { BsChatDotsFill } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import { TiArrowSortedDown } from 'react-icons/ti';
import styled from 'styled-components'

const ContainerNav = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-between;
  padding: 0rem 0.75rem 0rem 0.75rem;
  align-items: center;
  width: 100%;
  height: 3.2rem;
  background-color: #272727;
  border-bottom: solid #535353 1px;
`;

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
      id: "view-grid",
      icon: <HiViewGridAdd />,
    },
    {
      id: "chat",
      icon: <BsChatDotsFill />,
    },
    {
      id: "bell",
      icon: <FaBell />,
    },
    {
      id: "arrow-down",
      icon: <TiArrowSortedDown />,
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
        {SeccionViews.map((sec, index) => (
          <ContainSeccionsViews id={sec.id} key={index}>
            {sec.icon}
          </ContainSeccionsViews>
        ))}
      </Seccion>
      <Seccion>
        {SeccionLogsCtrls.map((sec, index) => (
          <ContainSeccionCtrls id={sec.id} key={index}>
            {sec.icon}
          </ContainSeccionCtrls>
        ))}
      </Seccion>
    </ContainerNav>
  );
};

export default Nabvar;
