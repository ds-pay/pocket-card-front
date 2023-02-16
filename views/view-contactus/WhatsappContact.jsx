import { useRouter } from 'next/router'
import ButtonIcon from '../../components/Buttons/ButtonIcon/ButtonIcon'
import { ContainerContact, ContainerHeadWhatsapp } from './StyleContactUs'

const WhatsappContact = () => {
  const router = useRouter()

  return (
    <ContainerContact>
      <ContainerHeadWhatsapp>
        <div className='container-text'>
          <h2>Cotactanos por Whatsapp</h2>
        </div>
        <div className='container-img'>
          <img src="/img/Icons/contact/whatsapp.svg" alt="whatsapp" />
        </div>
      </ContainerHeadWhatsapp>
      <div className='container-button'>
        <ButtonIcon func={() => router.push("https://api.whatsapp.com/send/?phone=3242574768&text&type=phone_number&app_absent=0")} text={"Ir a Whatsapp"} />
      </div>
    </ContainerContact>
  )
}

export default WhatsappContact