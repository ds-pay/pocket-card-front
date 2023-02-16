import { ContainerGeneral, BodyHeader, IconContactUs, ContentContactUS } from './StyleContactUs'
import { AiFillAlert } from 'react-icons/ai'
import { useState } from 'react'
import ContactEmail from './ContactEmail'
import PhoneContact from './PhoneContact'
import WhatsappContact from './WhatsappContact'

const ContactUs = () => {
  const [selected, setSelected] = useState("Selecciona un Icono")

  const contactUsArray = [
    {
      id: "14234",
      icon: "/img/Icons/contact/email.svg",
      content: <ContactEmail/>,
    },
    {
      id: "24234",
      icon: "/img/Icons/contact/call.svg",
      content: <PhoneContact />,
    },
    {
      id: "34234",
      icon: "/img/Icons/contact/whatsapp.svg",
      content: <WhatsappContact/>,
    },
  ]

  return (
    <ContainerGeneral>
      <BodyHeader>
        {contactUsArray.map((sec, index) => (
          <IconContactUs isSelected={selected === sec.id ? true : false} onClick={() => setSelected(sec.id)} key={index}>
            <img src={sec.icon} alt="icon-contact" />
          </IconContactUs>
        ))}
      </BodyHeader>
      {contactUsArray.map((sec, index) => (
        selected === sec.id
          ?
          <ContentContactUS key={index}>
            {sec.content}
          </ContentContactUS>
          :null
      ))}
    </ContainerGeneral>
  )
}

export default ContactUs