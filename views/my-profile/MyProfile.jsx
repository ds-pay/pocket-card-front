import { useState } from 'react';
import { ContainerGeneral, BodyUser, ContainerUser, HeaderUser, DataUser, ContentUSer, CardDate, ContactUser, ContainerSelection, SectionProfile } from './StyleMyProfile';
import Profile from './Profile';
import { RiImageAddFill, RiEdit2Fill, RiLuggageDepositFill } from 'react-icons/ri';
import { FaCity } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { ImPhone } from 'react-icons/im';
import { HiIdentification } from 'react-icons/hi';
import { AiFillHome } from 'react-icons/ai';
import { MdDateRange } from 'react-icons/md';
import { IoLogoGameControllerB } from 'react-icons/io';
import { BsFillCreditCard2FrontFill } from 'react-icons/bs';
import { RiUser3Fill } from 'react-icons/ri';
import Credentials from './Credentials';


const MyProfile = ({ data }) => {

  const [selected, setSelected] = useState("")

  const contentMenu = [
    {
      id: "113",
      route: "",
      icon: <RiLuggageDepositFill />,
      label: "Departamento",
    },
    {
      id: "223",
      route: "",
      icon: <FaCity />,
      label: "Ciudad",
    },
    {
      id: "345",
      route: "",
      icon: <HiMail />,
      label: "Correo",
    },
    {
      id: "445654",
      route: "",
      icon: <ImPhone />,
      label: "Telefono",
    },
    {
      id: "5653",
      route: "",
      icon: <HiIdentification />,
      label: "Tipo de Membresia",
    },
    {
      id: "62354",
      route: "",
      icon: <AiFillHome />,
      label: "Cobertura",
    },
    {
      id: "75435",
      route: "",
      icon: <MdDateRange />,
      label: "Vencimiento",
    },
    {
      id: "83624",
      route: "",
      icon: <IoLogoGameControllerB />,
      label: "Cantidad Pocket Puntos",
    },
  ];

  const profileSection = [
    {
      id: "14325",
      label: "Mi Perfil",
      content: <Profile data={data} />
    },
    {
      id: "23454",
      label: "Mis Credenciales",
      content: <Credentials data={data} />
    },
    {
      id: "3546",
      label: "Mis Favoritos",
      content: <Profile />
    },
  ]

  const Card = (title, content) => {
    return (
      <CardDate>
        <div className='title'><h2>{title}</h2></div>
        <div className="content"><h2><strong>{content}</strong></h2></div>
      </CardDate>
    )
  }

  const sectionContact = (sectionID, label) => {
    return (
      contentMenu.map((contact, index) => (
        sectionID === contact.id
          ?
          <div key={index} className="section">
            <div className="section-icon">
              <h2>{contact.icon} </h2>
            </div>
            <div className="section-label">
              <h2>{label}</h2>
            </div>
          </div>
          : null
      ))
    )
  }

  return (
    data &&
    data.map((sec, index) => (
      <ContainerGeneral key={index}>
        <ContainerUser>
          <BodyUser>
            <HeaderUser>
              <div className='content-edit'>
                <div className="contain-logo">
                  <RiEdit2Fill />
                </div>
                <div className="contain-name"><h3>Editar</h3></div>
              </div>
              <ContentUSer>
                <div className='img-user'>
                  <img src={sec.img} alt={sec.id} />
                </div>
                <div className='name-user'>
                  <h4>Nombre:</h4>
                  <h2>{sec.name}</h2>
                  <h2>{sec.lastname}</h2>
                </div>
              </ContentUSer>
              <ContactUser>
                {sectionContact("113", sec.department)}
                {sectionContact("223", sec.city)}
                {sectionContact("345", sec.email)}
                {sectionContact("445654", sec.phone)}
                {sectionContact("5653", sec.tarjet)}
                {sectionContact("62354", sec.coverage)}
                {sectionContact("75435", sec.expiration)}
                {sectionContact("83624", sec.pointspocket)}
              </ContactUser>
            </HeaderUser>
            <ContainerSelection>
              {
                profileSection.map((profile, index) => (
                  <SectionProfile
                    isSelected={selected === profile.id ? true : false}
                    onClick={() => setSelected(profile.id)} 
                    key={index}
                  >
                    <div className="section-selected">
                      <h3><strong>{profile.label}</strong></h3>
                    </div>
                  </SectionProfile>
                ))
              }
            </ContainerSelection>
            <DataUser >
              {
                profileSection.map((profile) => (
                  selected === profile.id
                    ?
                    profile.content
                    : null
                ))
              }
              {/* <div className="container-header">
              <div className="container-img">
                <BsFillCreditCard2FrontFill />
              </div>
              <div className="container-title">
                <h3>Informacion de la credencial y del usuario</h3>
              </div>
            </div>
              <div className='container-cards'>
                {Card("Departamento:", sec.department)}
                {Card("Ciudad:", sec.city)}
                {Card("Correo:", sec.email)}
                {Card("Telefono:", sec.phone)}
                {Card("Tipo de Membresia:", sec.tarjet)}
                {Card("Cobertura:", sec.coverage)}
                {Card("Vencimiento:", sec.expiration)}
                {Card("Cantidad Pocket Puntos:", sec.pointspocket)}
              </div> */}
            </DataUser>
          </BodyUser>
        </ContainerUser>
      </ContainerGeneral>
    ))
  )
}

export default MyProfile