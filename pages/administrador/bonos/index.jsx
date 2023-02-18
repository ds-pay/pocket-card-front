import React, { useState } from "react";
import Crearbono from "./Crearbono";
import GestionarBonus from "./GestionarBonus";
import GestionarBonosClientes from "./GestionarBonosClientes";
import Submenu from "../../../components/Submenu/Submenu";
import { FaGift, FaGifts } from "react-icons/fa";

import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Content = styled.div`
  padding-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
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
      id: "create",
      content: <Crearbono />,
      label: "Crear Bono",
      icon: <FaGift />,
    },
    {
      id: "gesbonus",
      content: <GestionarBonus />,
      label: "Gestionar Bonos",
      icon: <FaGifts />,
    },
    {
      id: "gesbonusclient",
      content: <GestionarBonosClientes />,
      label: "Bonos Cliente",
      icon: <FaGift />,
    },
  ];

  return (
    <Container>
      <Submenu array={SeleccionSeccion} section={section} handleClick={handleClick}/>
      <Content>
        {SeleccionSeccion.map((sec, index) =>
          section === sec.id ? sec.content : null
        )}
      </Content>
    </Container>
  );
};

export default index;