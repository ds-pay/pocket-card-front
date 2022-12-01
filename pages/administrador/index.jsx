import React, { useState } from 'react'
import styled from '@emotion/styled'
import { FaHome } from "react-icons/fa";
import { HiUser } from "react-icons/hi";
import { ImNewspaper } from 'react-icons/im'
import { BiCategoryAlt } from 'react-icons/bi'
import { useRouter } from 'next/router';
import Cuentas from './cuentas'
import Convenios from './convenios'
import Bonos from './bonos'
import SlideShow from './slider'
import Noticias from './noticias'
import Notificaciones from './notificaciones'
import Estadisticas from './stadistics'

const StyledBurger = styled.div`
  position: fixed;
  width: 2rem;
  height: 2rem;
  top: 8rem;
  right: 20px;
  z-index: 5;
  display: none;
  transition: 0.5s all ease;

  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2.5rem;
    height: 0.3rem;
    background: ${({ menuOpen }) => (menuOpen ? "white" : "#d2d2d2")};
    border-radius: 10px;
    transform-origin: 5px;
    transition: all 0.3s linear;
    border-bottom: 2px solid #000;

    &:nth-child(1) {
      transform: ${({ menuOpen }) => (menuOpen ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ menuOpen }) => (menuOpen ? "translateX(100%)" : "translate(0)")};
      opacity: ${({ menuOpen }) => (menuOpen ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ menuOpen }) => (menuOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const Seccion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s all ease;
  @media(max-width: 1024px) {
    display: none;
  }
`;

const ContainSeccionsAdmin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  width: auto;
  height: auto;
  transition: all 0.3s;
  font-size: 1.3rem;
  border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
  margin: 0.15rem 0.15rem;
  background-color: ${({ isSelected }) => isSelected ? "#9b9b9b": null };
  :hover {
    background-color: #9b9b9b;
    cursor: pointer;
  }
  @media(max-width: 1024px) {
    position: relative;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
  padding: 0.5rem;
  transition: 0.5s all ease;
  .container-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: var(--nextui-colors-bgAdminMenu);
    border-radius: 1rem;
    .seccion {
      margin: 1rem;
    }
  }
  @media (max-width: 1024px) {
    height: ${({menuOpen}) => menuOpen ? "100%" : null};
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Body = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  .body-content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: var(--nextui-colors-bgAdminMenu);
    border-radius: 1rem;
    .seccion {
      margin: 1rem;
    }
  }
`;

const index = ({ children }) => {
  const [ selection, setSelection ] = useState("cuentas")
  const [ menuOpen, setMenuOpen ] =useState(false)


  const selectionMenu = (id, route) => {
    setSelection(id)
    
  }

  const AdminMenu = [
    {
      route: <Cuentas/>,
      id: "cuentas",
      icon: <FaHome />,
      label: 'Cuentas',
    },
    {
      route: <Convenios />,
      id: "convenios",
      icon: <ImNewspaper />,
      label: 'Convenios',

    },
    {
      route: <Bonos />,
      id: "bonos",
      icon: <BiCategoryAlt />,
      label: 'Bonos',

    },
    {
      route: <SlideShow />,
      id: "slideshow",
      icon: <HiUser />,
      label: 'Slide Show',
    },
    {
      route: <Noticias />,
      id: "noticias",
      icon: <ImNewspaper />,
      label: 'Noticias',

    },
    {
      route: <Notificaciones />,
      id: "notificaciones",
      icon: <BiCategoryAlt />,
      label: 'Notificaciones',

    },
    {
      route: <Estadisticas />,
      id: "estadisticas",
      icon: <HiUser />,
      label: 'Estadisticas',
    },
  ];

  const MenuBurger = ({ menuOpen, setMenuOpen }) => {
    return (
      <StyledBurger menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <div />
          <div />
          <div />
      </StyledBurger>
    )
  }
  
  return (
    <Container>
      <Content>
        <Header menuOpen={menuOpen}>
          <div className="container-nav">
            <div className="seccion">
              <h3>Admin Menu</h3>
            </div>
            <Seccion menuOpen={menuOpen}>
              {AdminMenu.map((sec, index) => (
                <ContainSeccionsAdmin
                  isSelected={selection === sec.id ? true : false}
                  onClick={() => selectionMenu(sec.id, sec.route)}
                  key={index}
                >
                  <h4>{sec.label}</h4>
                </ContainSeccionsAdmin>
              ))}
            </Seccion>
          </div>
        </Header>
        <Body>
          <div className="body-content">
            {<>{AdminMenu.map((sec, index) => selection === sec.id ? <div>{sec.route}</div> : null)}</>}
          </div>
        </Body>
      </Content>
    </Container>
  );
}

export default index