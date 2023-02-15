import { ContainerGeneral, BodyHeader } from './StyleContactUs'
import { AiFillAlert } from 'react-icons/ai'

const ContactUs = () => {


  return (
    <ContainerGeneral>
      <BodyHeader>
        {/* <div className="container-title1">
          <h2><strong>Preguntas Frecuentes</strong></h2>
        </div> */}
        <div className="container-img">
          <AiFillAlert />
        </div>
      </BodyHeader>
    </ContainerGeneral>
  )
}

export default ContactUs