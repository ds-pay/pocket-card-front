import FindClient from './FindClient'
import styled from '@emotion/styled'
import { useEffect } from 'react';
import { UserCommerceData } from "./indefaces";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const index = ({ data, terms }: UserCommerceData) => {

  return (
    <Container>
      <FindClient terms={terms} data={data}/>
    </Container>
  )
}




export default index