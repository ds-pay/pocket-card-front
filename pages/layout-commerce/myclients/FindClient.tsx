import TableReusable from '../../../components/Table/TableReusable'
import styled from '@emotion/styled'
import { useState } from 'react';
import { UserCommerceData } from "./indefaces";
import ViewProfile from '../../../components/Cards/CardUser/ViewProfile'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100%;
`;

const FindClient = ({ data, terms }: UserCommerceData) => {

  const [currentId, setCurrentId] = useState('')

  const handleSelected = (id: string ) => {
    setCurrentId(id)
  };

  const funContent = () => {
    return currentId
    ?
      data.map((sec) => (
        currentId === sec.id
        ?
          <ViewProfile data={data} dataTerms={terms} currentId={currentId} />
        //   <div onClick={() => setCurrentId("")}>
        // </div>
          // <h1 onClick={() => setCurrentId("")}>{sec.name}</h1>
        : null
      ))
      : <TableReusable handleSelected={handleSelected} data={data} />

  }

  return (
    <Container>
      {funContent()}
    </Container>
  )
}

export default FindClient


