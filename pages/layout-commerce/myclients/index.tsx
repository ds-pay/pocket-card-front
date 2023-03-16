import React from 'react'
import FindClient from './FindClient'
import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const index = () => {
  return (
    <Container>
      <FindClient/>
    </Container>
  )
}

export default index