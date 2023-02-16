import { ContainerContact, ContainerHeadEmail, ContainerForm } from './StyleContactUs';
import { MdDriveFileRenameOutline } from 'react-icons/md';
import InputText from '../../components/Inputs/InputText/InputText';
import InputTextArea from '../../components/Inputs/InputTextArea/InputTextArea';
import ButtonIcon from '../../components/Buttons/ButtonIcon/ButtonIcon'

const ContactEmail = () => {

  const formArray = [
    {
      id: "nombre",
      name: "Nombre",
      color: true,
      type: "nombre",
      img: <MdDriveFileRenameOutline />,
      // regis: "name",
      // error: errors.name?.type === "required" && (
      //   <p>El campo Nombre es Requerido</p>
      // ),
    },
    {
      id: "apellido",
      name: "Apellido",
      color: true,
      type: "nombre",
      img: <MdDriveFileRenameOutline />,
      // regis: "name",
      // error: errors.name?.type === "required" && (
      //   <p>El campo Nombre es Requerido</p>
      // ),
    },
    {
      id: "asunto",
      name: "Titulo del Email",
      color: true,
      type: "nombre",
      img: <MdDriveFileRenameOutline />,
      // regis: "name",
      // error: errors.name?.type === "required" && (
      //   <p>El campo Nombre es Requerido</p>
      // ),
    },
  ];

  const inputSection = (sectiionID) => {
    return (
      formArray.map((sec, index) => (
        sectiionID === sec.id
          ?
          <div className='container-inputs'>
            <div className='img'>{sec.img}</div>
            <div className='inputtext'>
              <InputText
                name={sec.name}
                color={sec.color}
                type={sec.type}
                id={sec.id}
              />
            </div>
          </div>
          : null
      ))
    )
  }


  return (
    <ContainerContact>
      <ContainerHeadEmail>
        <div className='container-text'>
          <h2>Envianos un Email</h2>
        </div>
        <div className='container-img'>
          <img src="/img/Icons/contact/email.svg" alt="" />
        </div>
      </ContainerHeadEmail>
      <ContainerForm>
        <form className='container-form'>
          <div className="first-forms">
            <div className='container-left'>
              {inputSection("nombre")}
            </div>
            <div div className='container-right'>
              {inputSection("apellido")}
            </div>
          </div>
          <div className="secund-form">
            {inputSection("asunto")}
          </div>
          <div className="third-form">
            <div className="input-textarea">
              <InputTextArea
                isBgNone={true}
                isBorderNone={true}
                id={"descripcion"}
                name={"Especificanos tu problema"}
                placeholder={"Especificanos tu problema"}
                isMargin={true}
              />
            </div>
          </div>
          <div className='container-button'>
            <ButtonIcon text={"Enviar"} />
          </div>
        </form>
      </ContainerForm>
    </ContainerContact>
  )
}

export default ContactEmail