import React from 'react'
import styled from '@emotion/styled'
import Sidebar from './Sidebar/Sidebar';

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
`;


const index = () => {
  return (
    <Container>
        <Sidebar />
    </Container>
  )
}

export default index