import Table from '../../../components/Table/Table'
import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100%;
`;

const FindClient = () => {
  return (
    <Container>
      <Table/>
    </Container>
  )
}

export default FindClient