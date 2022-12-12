import React, { useState } from "react";
import Crearbono from "./Crearbono";
import GestionarBonus from "./GestionarBonus";
import GestionarBonosClientes from "./GestionarBonosClientes";
import Submenu from "../../layout-admin/Submenu/Submenu";
import { MdOutlineGroupAdd, MdCloudUpload } from "react-icons/md";
import { RiUserAddFill, RiUserSearchFill } from "react-icons/ri";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
      Label: "Crear Bono",
      icon: <RiUserSearchFill />,
    },
    {
      id: "gesbonus",
      content: <GestionarBonus />,
      Label: "Gestionar Bonos",
      icon: <RiUserAddFill />,
    },
    {
      id: "gesbonusclient",
      content: <GestionarBonosClientes />,
      Label: "Bonos Cliente",
      icon: <MdOutlineGroupAdd />,
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