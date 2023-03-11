import { CardDate, ContainerGeneral } from './StyleMyProfile';
import { BsPersonFill } from 'react-icons/bs'

const Profile = ({ data }) => {

  const Card = (title, content) => {
    return (
      <CardDate>
        <div className='title'><h2>{title}</h2></div>
        <div className="content"><h2>{content}</h2></div>
      </CardDate>
    )
  }

  return (
    data
      ?
      data.map((sec, index) => (
        <>
          <div key={index} className='container-cards'>
            {Card("Nombre (s):", sec.name)}
            {Card("Apellido (s):", sec.lastname)}
            {Card("Departamento:", sec.department)}
            {Card("Ciudad:", sec.city)}
            {Card("Correo:", sec.email)}
            {Card("Telefono:", sec.phone)}
          </div>
        </>
      ))
      : <h1>LOADING...</h1>
  )
}

export default Profile