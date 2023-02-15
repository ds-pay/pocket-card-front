import { ContainerGeneral, BodyHeader, ContentQuestions } from './StyleQuestions'
import { AiFillAlert } from 'react-icons/ai'

const Questions = ({ data }) => {


  return (
    <ContainerGeneral>
      <BodyHeader>
        {/* <div className="container-title1">
          <h2><strong>Preguntas Frecuentes</strong></h2>
        </div> */}
        <div className="container-img">
          <img src={<AiFillAlert/>} alt={`img-bonus`} />
        </div>
      </BodyHeader>
      {
        data && 
        data.map((sec, index) => (
          <ContentQuestions key={index}>
            <h2><strong>{parseInt(index += 1)}. {sec.label}</strong></h2>
            <p>{sec.text}</p>
          </ContentQuestions>
        ))
      }
    </ContainerGeneral>
  )
}

export default Questions