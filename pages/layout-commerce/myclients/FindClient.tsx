import TableReusable from '../../../components/Table/TableReusable'
import styled from '@emotion/styled'
import { BsArrowRight } from "react-icons/bs";
import { useState } from 'react';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100%;
`;

const FindClient = () => {

  const [currentId, setCurrentId] = useState('')

  const arrayClients = [
    {
      id: "123432",
      name: "Anderson Lopez",
      email: "anderson@gmail.com",
      state: "Activo",
      card: "Gold",
      number: "4.3",
      cliente: <BsArrowRight/>
    },
    {
      id: "2123432",
      name: "Braiyan Rodriguez",
      email: "braiyan@gmail.com",
      state: "Activo",
      card: "Blue",
      number: "4.9",
      cliente: <BsArrowRight/>
    },
    {
      id: "3123432",
      name: "Elian Jhon",
      email: "elian@gmail.com",
      state: "Activo",
      card: "Blue",
      number: "6.0",
      cliente: <BsArrowRight/>
    },
    {
      id: "4123432",
      name: "Eliezer Lopez",
      email: "eliezer@gmail.com",
      state: "Activo",
      card: "Black",
      number: "4.0",
      cliente: <BsArrowRight/>
    },
    {
      id: "5123432",
      name: "Melmira Mirian",
      email: "melmira@gmail.com",
      state: "Activar",
      card: "Blue",
      number: "3.9",
      cliente: <BsArrowRight/>
    },
    {
      id: "6123432",
      name: "Nathan Champes",
      email: "nathan@gmail.com",
      state: "Activar",
      card: "Gold",
      number: "6.5",
      cliente: <BsArrowRight/>
    },
    {
      id: "7123432",
      name: "Maiborys Milñi",
      email: "maiborys@gmail.com",
      state: "Activo",
      card: "Black",
      number: "4.3",
      cliente: <BsArrowRight/>
    },
    {
      id: "8123432",
      name: "Juan Camilo",
      email: "juan@gmail.com",
      state: "Activo",
      card: "Gold",
      number: "0.0",
      cliente: <BsArrowRight/>
    },
    {
      id: "9123432",
      name: "KitKat",
      email: "kitKat@gmail.com",
      state: "Activar",
      card: "Black",
      number: "7.0",
      cliente: <BsArrowRight/>
    },
    {
      id: "10123432",
      name: "Jean Carlos",
      email: "jean@gmail.com",
      state: "Activo",
      card: "Blue",
      number: "0.0",
      cliente: <BsArrowRight/>
    },
    {
      id: "11123432",
      name: "Marol Nean",
      email: "marol@gmail.com",
      state: "Activar",
      card: "Black",
      number: "2.0",
      cliente: <BsArrowRight/>
    },
    {
      id: "12123432",
      name: "Morgan Nevean",
      email: "morgan@gmail.com",
      state: "Activo",
      card: "Gold",
      number: "37.0",
      cliente: <BsArrowRight/>
    },
    {
      id: "13123432",
      name: "Humberto Norean",
      email: "humberto@gmail.com",
      state: "Activar",
      card: "Blue",
      number: "4.0",
      cliente: <BsArrowRight/>
    },
  ]

  const funContent = () => {
    return currentId
    ?
      arrayClients.map((sec) => (
        currentId === sec.id
        ?
          <h1 onClick={() => setCurrentId("")}>{sec.name}</h1>
        : null
      ))
    : <TableReusable setCurrentId={setCurrentId} data={arrayClients} />

  }

  return (
    <Container>
      {funContent()}
    </Container>
  )
}

export default FindClient


