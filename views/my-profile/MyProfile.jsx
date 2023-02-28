import { ContainerGeneral, BodyUser, ContainerSideBar, ContainerUser, HeaderUser, DataUser, ContentUSer, CardDate, ContactUser } from './StyleMyProfile';
import BodyHeader from '../../components/BodyHeader/BodyHeader';
import Sidebar from '../../components/Sidebar/Sidebar';
import { RiImageAddFill, RiEdit2Fill, RiLuggageDepositFill } from 'react-icons/ri';
import { FaCity } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { ImPhone } from 'react-icons/im';
import { FaMendeley } from 'react-icons/fa';
import { VscDebugCoverage } from 'react-icons/vsc';
import { AiFillSignal } from 'react-icons/ai';
import { CgEditBlackPoint } from 'react-icons/cg';
import { BsFillCreditCard2FrontFill } from 'react-icons/bs';
import { RiUser3Fill } from 'react-icons/ri'


const MyProfile = ({ data }) => {

  const contentMenu = [
    {
      id: "113",
      route: "",
      img: <RiLuggageDepositFill />,
      label: "Departamento",
    },
    {
      id: "223",
      route: "",
      img: <FaCity />,
      label: "Ciudad",
    },
    {
      id: "345",
      route: "",
      img: <HiMail />,
      label: "Correo",
    },
    {
      id: "445654",
      route: "",
      img: <ImPhone />,
      label: "Telefono",
    },
    {
      id: "5653",
      route: "",
      img: <FaMendeley />,
      label: "Tipo de Membresia",
    },
    {
      id: "62354",
      route: "",
      img: <VscDebugCoverage />,
      label: "Cobertura",
    },
    {
      id: "75435",
      route: "",
      img: <AiFillSignal />,
      label: "Vencimiento",
    },
    {
      id: "83624",
      route: "",
      img: <CgEditBlackPoint />,
      label: "Cantidad Pocket Puntos",
    },
  ];

  const Card = (title, content) => {
    return(
      <CardDate>
        <div className='title'><h2>{title}</h2></div>
        <div className="content"><h2><strong>{content}</strong></h2></div>
      </CardDate>
    )
  }

  return (
    data &&
    data.map((sec, index) => (
      <ContainerGeneral>
        {/* <ContainerSideBar>
          <Sidebar ContentMenu={contentMenu} img={sec.img} nameMenu={sec.name + " " + sec.lastname} />
        </ContainerSideBar> */}
        <ContainerUser>
          <BodyUser>
            {/* <div className="container-header">
              <div className="container-img">
                <RiUser3Fill />
              </div>
              <div className="container-title">
                <h3>Nombre e imagen del usuario</h3>
              </div>
            </div> */}
            <HeaderUser key={index}>
              {/* <RiImageAddFill size={110} />
              <div className='content-edit'>
                <div className="contain-logo">
                  <RiEdit2Fill />
                </div>
                <div className="contain-name"><h3>Editar</h3></div>
              </div> */}
              <ContentUSer>
                <div className='img-user'>
                  <img src={sec.img} alt={sec.id} />
                </div>
                <div className='name-user'>
                  <h2>{sec.name} {sec.lastname}</h2>
                  {/* <h2>{sec.lastname}</h2> */}
                  <h3>Pocket puntos: {sec.pointspocket}</h3>
                </div>
              </ContentUSer>
              <ContactUser>
                <h2>{sec.name} {sec.lastname}</h2>
                {/* <h2>{sec.lastname}</h2> */}
                <h3>Pocket puntos: {sec.pointspocket}</h3>
              </ContactUser>
            </HeaderUser>
            <div className="container-header">
              <div className="container-img">
                <BsFillCreditCard2FrontFill />
              </div>
              <div className="container-title">
                <h3>Informacion de la credencial y del usuario</h3>
              </div>
            </div>
            <DataUser >
              <div className='container-cards'>
                {Card("Departamento:", sec.department)}
                {Card("Ciudad:", sec.city)}
                {Card("Correo:", sec.email)}
                {Card("Telefono:", sec.phone)}
                {Card("Tipo de Membresia:", sec.tarjet)}
                {Card("Cobertura:", sec.coverage)}
                {Card("Vencimiento:", sec.expiration)}
                {Card("Cantidad Pocket Puntos:", sec.pointspocket)}
              </div>
            </DataUser>
          </BodyUser>
        </ContainerUser>
      </ContainerGeneral>
    ))
  )
}

export default MyProfile