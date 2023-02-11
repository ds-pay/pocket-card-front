import { ContainerGeneral, BodyHeader } from './StylesMyBonus';
import ButtonIcon from '../../components/Buttons/ButtonIcon/ButtonIcon';

const MyBonus = () => {
  return (
    <ContainerGeneral>
      <BodyHeader>
        {/* <div className="container-butonback">
          <ButtonIcon icon={<BiArrowBack />} func={clickAction} />
        </div> */}
        <div className="container-title">
          <h3>Mis Bonos</h3>
        </div>
        <div className="container-img">
          <img src={`img/Icons/gift-box.svg`} alt={`img-bonus`} />
        </div>
      </BodyHeader>
    </ContainerGeneral>
  )
}

export default MyBonus