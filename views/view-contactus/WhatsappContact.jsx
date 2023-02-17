import ButtonIcon from '../../components/Buttons/ButtonIcon/ButtonIcon';
import { ContainerContact, ContainerHeadWhatsapp, ContainerForm } from './StyleContactUs';
import { FiSend } from 'react-icons/fi'
import { useState } from 'react';

const WhatsappContact = () => {
  const [selected, setSelected]  = useState("");
  const [mensaje, setMensaje] = useState("");
  
  const handleSelected = (opt, name, dni, idtarj) => {
    const saludo = handleSaludo();
    let message = `Hola,%20${saludo},%20mi%20nombre%20es:%20${name},%20mi%20documento%20es:%20${dni}%20mi%20tarjeta%20Pocket%20Card%20es:%20${idtarj},%20${opt.message}.`;
    setSelected(opt.id)
    setMensaje(message)
  }

  const handleSaludo = () => {
    let hours = new Date().getHours();
    let saludo =
      hours >= 12
        ? hours >= 19
          ? "buenas noches"
          : "buenas tardes"
        : "buenos dias";
    return saludo;
  };

  const handleSend = () => {
    window.open(`https://wa.me/573507023740?text=${mensaje}`, "_blank");
  };

  const optionArray = [
    {
      id: "12343",
      message: "¿Como puedo puedo utilizar mi Pocket Card ?",
      show :"¿Como puedo puedo utilizar mi Pocket Card ?",
      color: true,
      type: "checkbox",
    },
    {
      id: "432123",
      message: "Tengo una duda con un convenio",
      show :"Tengo una duda con un convenio",
      color: true,
      type: "checkbox",
    },
    {
      id: "3244",
      message: "Deseo utilizar mis bonos 2x1",
      show :"Deseo utilizar mis bonos 2x1",
      color: true,
      type: "checkbox",
    },
    {
      id: "34235",
      message: "No me dieron el descuento en el establecimiento",
      show :"No me dieron el descuento en el establecimiento",
      color: true,
      type: "checkbox",
    },
    {
      id: "645654",
      message: "Deseo hablar con un asesor",
      show :"Otro",
      color: true,
      type: "checkbox",
    },
  ];

  const inputSection = (sectiionID) => {
    return (
      optionArray.map((opt, index) => (
        sectiionID === opt.id
          ?
          <div key={index} className='container-inputs'>
            <div className='checkbox'>
              <input type={opt.type} onClick={sectiionID === opt.id ? () => handleSelected(opt, "Anderson Lopez", "28425070", "90336") : null} />
            </div>
            <div className='inputtext'>
              <h2>{opt.show}</h2>
            </div>
          </div>
          : null
      ))
    )
  }

  return (
    <ContainerContact>
      <ContainerHeadWhatsapp>
        <div className='container-text'>
          <h2><strong>Cotactanos por Whatsapp</strong></h2>
        </div>
        <div className='container-img'>
          <img src="/img/Icons/contact/whatsapp.svg" alt="whatsapp" />
        </div>
      </ContainerHeadWhatsapp>
      <ContainerForm>
        <form className='container-form'>
          <div className="secund-form">
            {inputSection("12343")}
            {inputSection("432123")}
            {inputSection("3244")}
            {inputSection("34235")}
            {inputSection("645654")}
          </div>
        </form>
      </ContainerForm>
      {
        selected && 
        <div className='container-button'>
            <ButtonIcon icon={<FiSend />} func={() => handleSend()} text={"Enviar a Whatsapp"} />
        </div>
      }
    </ContainerContact>
  )
}

export default WhatsappContact