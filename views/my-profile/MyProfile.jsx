import { ContainerGeneral, BodyUser } from './StyleMyProfile';
import BodyHeader from '../../components/BodyHeader/BodyHeader'

const MyProfile = ({data}) => {
  return (
    <ContainerGeneral>
      <BodyHeader title={"Mi Perfil"} img={"/img/Icons/user.png"} alt={"profile"}/>
      <BodyUser>
        {
          data &&
          data.map((sec, index) => (
            <>
              <div className='container-img-user' key={index}>
                <h2><strong>Imagen del Perfil</strong></h2>
                <div className='img-user'><img src={sec.img} alt={sec.id} /></div>
              </div>
            </>
          ))
        }
      </BodyUser>
    </ContainerGeneral>
  )
}

export default MyProfile