import React, { useState } from "react";
import FormularioCrearCliente from "./FormularioCrearCliente";
import FormularioCrearComercio from "./FormularioCrearComercio";
import FormularioBuscarCliente from "./FormularioBuscarCliente";
import FormularioCargaMasiva from "./FormularioCargaMasiva";
import Submenu from "../../../components/Submenu/Submenu";
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
      id: "search",
      content: <FormularioBuscarCliente />,
      label: "Buscar Cuenta",
      icon: <RiUserSearchFill />,
    },
    {
      id: "formClient",
      content: <FormularioCrearCliente />,
      label: "Crear Cliente",
      icon: <RiUserAddFill />,
    },
    {
      id: "formCommerce",
      content: <FormularioCrearComercio />,
      label: "Crear Comercio",
      icon: <MdOutlineGroupAdd />,
    },
    {
      id: "bulkload",
      content: <FormularioCargaMasiva />,
      label: "Carga Masiva",
      icon: <MdCloudUpload />,
    },
  ];


  return (
    <Container>
      <Submenu handleClick={handleClick} array={SeleccionSeccion} section={section} />
      <Content>
        {SeleccionSeccion.map((sec, index) =>
          section === sec.id ? sec.content : null
        )}
      </Content>
    </Container>
  );
};

export default index;
