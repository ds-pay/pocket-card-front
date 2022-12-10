import React, { useState } from "react";
import FormularioCrearCliente from "./FormularioCrearCliente";
import FormularioCrearComercio from "./FormularioCrearComercio";
import { MdOutlineGroupAdd, MdCloudUpload } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiUserAddFill, RiUserSearchFill } from "react-icons/ri";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContentCard = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 4rem;
  top: 0;
  background: var(--nextui-colors-backgroundNavbar);

  .cardContent {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

const Card = styled.div`
  position: relative;
  width: 9rem;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0rem 0.5rem 0rem 0.5rem;
  color: ${({ isSelection }) =>
    !isSelection ? "var(--nextui-colors-textColorCardAnimate)" : "var(--nextui-colors-textFormColor)"};
  border-radius: 1rem 1rem 0 0;
  transition: 0.3s all ease;
  background-color: ${({ isSelection }) =>
    isSelection ? "var(--nextui-colors-backgroundForm)" : null};
  @media (max-width: 1024px) {
    width: 3rem;
    height: 3rem;
    border-radius: 1rem;
    .container-icon {
      font-size: 1.5rem;
    }
  }

  :hover {
    cursor: pointer;
    color: var(--nextui-colors-textFormColor);
    background-color: var(--nextui-colors-backgroundForm);
  }
  .container-icon {
    font-size: 1.2rem;
  }
  .container-label {
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1024px) {
      display: none;
    }
  }

  .curva-izquierda,
  .curva-derecha {
    position: absolute;
    width: 0.8rem;
    height: 1rem;
    bottom: 0;
    transition: 0.4s all ease;
    @media (max-width: 1024px) {
      display: none;
    }
  }
  .curva-izquierda {
    left: -0.8rem;
    border-bottom-right-radius: 20px;
    box-shadow: ${({ isSelection }) =>
    isSelection ? "4px 1.5px 0 1.5px var(--nextui-colors-backgroundForm)" : null};
  }
  .curva-derecha {
    right: -0.8rem;
    border-bottom-left-radius: 30px;
    box-shadow: ${({ isSelection }) =>
    isSelection ? "-4px 1.5px 0 1.5px var(--nextui-colors-backgroundForm)" : null};
  }
`;

const Content = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const BottonBack = styled.div`
  width: 5rem;
  position: relative;
  padding: 0.5rem;
  background-color: var(--nextui-colors-backgroundNavbar);
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
  border-radius: 0.5rem;
  transition: 0.5s all ease;
  :hover {
    background-color: var(--nextui-colors-bgThridGlass);
    cursor: pointer;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

const index = () => {
  const [isSelection, setIsSelection] = useState(false);
  const [section, setSection] = useState("");

  const handleClick = (id) => {
    setIsSelection(!isSelection);
    setSection(id);
  };

  const SeleccionSeccion = [
    {
      id: "search",
      content: <FormularioCrearComercio />,
      Label: "Buscar Cuenta",
      icon: <RiUserSearchFill />,
    },
    {
      id: "formClient",
      content: <FormularioCrearCliente />,
      Label: "Crear Cliente",
      icon: <RiUserAddFill />,
    },
    {
      id: "formCommerce",
      content: <FormularioCrearComercio />,
      Label: "Crear Comercio",
      icon: <MdOutlineGroupAdd />,
    },
    {
      id: "bulkload",
      content: <FormularioCrearComercio />,
      Label: "Carga Masiva",
      icon: <MdCloudUpload />,
    },
  ];

  const handleCreateSection = () => {
    return (
      <>
        {SeleccionSeccion.map((sec, index) =>
          section === sec.id ? sec.content : null
        )}
      </>
    );
  };

  return (
    <Container>
      <ContentCard>
        <div className="cardContent">
          {SeleccionSeccion.map((sec, index) => (
            <Card
              isSelection={section === sec.id ? true : false}
              className="card"
              onClick={() => handleClick(sec.id)}
            >
              <div className="curva-izquierda"></div>
              <div className="curva-derecha"></div>
              <div className="container-icon">{sec.icon}</div>
              <div className="container-label">{sec.Label}</div>
            </Card>
          ))}
        </div>
      </ContentCard>
      <Content>
        {isSelection &&
          <>
            {handleCreateSection()}
          </>
        }
      </Content>
    </Container>
  );
};

export default index;
