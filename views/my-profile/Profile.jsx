import { CardDate, ContainerGeneral } from './StyleMyProfile';
import { BsPersonFill } from 'react-icons/bs'

const Profile = ({ data }) => {

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
          <div className='container-cards'>
            {Card("Nombres:", sec.name)}
            {Card("Apellidos:", sec.lastname)}
            {Card("Departamento:", sec.department)}
            {Card("Ciudad:", sec.city)}
            {Card("Correo:", sec.email)}
            {Card("Telefono:", sec.phone)}
            {/* {Card("Tipo de Membresia:", sec.tarjet)}
            {Card("Cobertura:", sec.coverage)}
            {Card("Vencimiento:", sec.expiration)}
            {Card("Cantidad Pocket Puntos:", sec.pointspocket)} */}
          </div>
        </>
      ))
      : <h1>LOADING...</h1>
  )
}

export default Profile