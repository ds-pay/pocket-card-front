import InputText from '../../components/Inputs/InputText/InputText';
import { ContainerContact, ContainerHeadPhone, ContainerForm } from './StyleContactUs';
import { MdDriveFileRenameOutline } from 'react-icons/md';
import ButtonIcon from '../../components/Buttons/ButtonIcon/ButtonIcon';

const PhoneContact = () => {
  const formArray = [
    {
      id: "user",
      name: "Nombre del propietario",
      color: true,
      type: "text",
      img: <MdDriveFileRenameOutline />,
      // regis: "name",
      // error: errors.name?.type === "required" && (
      //   <p>El campo Nombre es Requerido</p>
      // ),
    },
    {
      id: "number",
      name: "Numero Celular",
      color: true,
      type: "text",
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
      <ContainerHeadPhone>
        <div className='container-text'>
          <h2><strong>Proporciona tu Nº Movil</strong></h2>
        </div>
        <div className='container-img'>
          <img src="/img/Icons/contact/call.svg" alt="" />
        </div>
      </ContainerHeadPhone>
      <ContainerForm>
        <form className='container-form'>
          <div className="first-forms">
            <div className='container-left'>
              {inputSection("user")}
            </div>
            <div div className='container-right'>
              {inputSection("number")}
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

export default PhoneContact