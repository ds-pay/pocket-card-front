import { ContainerGeneral, BodyHeader, ContentBond } from './StylesMyBonus'

const Bond = ({ data, clickBack }) => {
  return (
    <ContainerGeneral>
      <BodyHeader>
        <div className="container-title">
          <h2>Bono Nº: {data.id}</h2>
        </div>
        <div className="container-title">
          <h2>{data?.label}</h2>
        </div>
        <div className="container-img">
          <img src={data?.img} alt={`img-bonus`} />
        </div>
      </BodyHeader>
      <ContentBond>
        {data.terms.map((sec, index) => (
          <div className='container-terms'>
            <li>{sec.paragraph}</li>
          </div>
        ))}
      </ContentBond>
      {console.log(data)}
    </ContainerGeneral>
  )
}

export default Bond