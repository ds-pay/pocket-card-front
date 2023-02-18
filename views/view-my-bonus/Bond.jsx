import ButtonIcon from '../../components/Buttons/ButtonIcon/ButtonIcon'
import { ContainerGeneral, BodyHeader, ContentBond } from './StylesMyBonus'

const Bond = ({ data, clickBack }) => {

  return (
    <ContainerGeneral>
      {data && <>
        <BodyHeader>
          <div className="container-img">
            <img src={data.img} alt={`img-bonus`} />
          </div>
          <div className="container-title">
            <h2>Bono Nº: <strong>{data.id}</strong></h2>
          </div>
          <div className="container-title">
            <h2>{data.label}</h2>
          </div>
        </BodyHeader>
        <ContentBond>
          {data.terms.map((sec, index) => (
            <div key={index} className='container-terms'>
              <li>{sec.paragraph}</li>
            </div>
          ))}
          <div className='cotainer-button-down'>
            <ButtonIcon text={"Descargar"}/>
          </div>
        </ContentBond>
      </>}
    </ContainerGeneral>
  )
}

export default Bond