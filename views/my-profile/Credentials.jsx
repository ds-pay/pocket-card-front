import { CardDate, ContainerGeneral, BackGroundTarjet } from './StyleMyProfile';
import { BsPersonFill } from 'react-icons/bs'

const Credentials = ({ data }) => {

  const Card = (title, content) => {
    return (
      <CardDate>
        <div className='title'><h2><strong>{title}</strong></h2></div>
        <div className="content"><h2>{content}</h2></div>
      </CardDate>
    )
  }

  return (
    data
      ?
      data.map((sec, index) => (
        <>
          <BackGroundTarjet>
            <div className="container">
              <img src="/img/image/tarjetgold/pocket_dorada.png" alt="card" />
              <div className="container-text">
                <div className="text-left">
                  <h1>{sec.name} {sec.lastname}</h1>
                  <h2>28425070</h2>
                  <h3>No. 90336</h3>
                </div>
                <div className="text-right">
                  <h1>Vence</h1>
                  <h2>{sec.expiration}</h2>
                  <h3>CA-04B</h3>
                </div>
              </div>
            </div>
          </BackGroundTarjet>
          <div className='container-cards'>
            {Card("Nombre (s):", sec.name)}
            {Card("Apellido (s):", sec.lastname)}
            {Card("Cedula:", "28425070")}
            {Card("Tipo de Membresia:", sec.tarjet)}
            {Card("Cobertura:", sec.coverage)}
            {Card("Vencimiento:", sec.expiration)}
            {Card("Cantidad Pocket Puntos:", sec.pointspocket)}
          </div>
        </>
      ))
      : <h1>LOADING...</h1>
  )
}

export default Credentials