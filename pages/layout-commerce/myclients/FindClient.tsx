import TableReusable from '../../../components/Table/TableReusable';
import { useState } from 'react';
import { UserCommerceData } from "./indefaces";
import ViewProfile from '../../../components/Cards/CardUser/ViewProfile';
import { Container } from "./StylesContentClient";
import { BiLeftArrowAlt } from "react-icons/bi";

const FindClient = ({ data, terms }: UserCommerceData) => {

  const [currentId, setCurrentId] = useState('')

  const handleSelected = (id: string) => {
    setCurrentId(id)
  };
  const backArrow = () => {
    setCurrentId("")
  }

  const funContent = () => {
    return currentId
      ?
      data.map((sec) => (
        currentId === sec.id
          ?
          <div className='container-tabla'>
            <ViewProfile data={data} dataTerms={terms} currentId={currentId} />
          </div>
          //   <div onClick={() => setCurrentId("")}>
          // </div>
          // <h1 onClick={() => setCurrentId("")}>{sec.name}</h1>
          : null
      ))
      :
      <div className='container-tabla'>
        <TableReusable handleSelected={handleSelected} data={data} />
      </div>

  }

  return (
    <Container>
      {
        data.map((user) => (
          user.id === currentId
            ?
            <div className='content-button'>
              <div className='button-back' onClick={() => backArrow()}>
                <BiLeftArrowAlt />
                <h2>Volver</h2>
              </div>
            </div>
            : null
        ))
      }
      {funContent()}
    </Container>
  )
}

export default FindClient


