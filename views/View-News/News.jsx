import { useRouter } from 'next/router'
import ButtonIcon from '../../components/Buttons/ButtonIcon/ButtonIcon'
import { ContainerGeneral, BodyHeader, ContentNews, CardNews } from './StylesNews'

const News = ({ data }) => {
  const router = useRouter()
  const handleRouter = (newId) => {
    router.push(`/news/${newId}`)
  }

  return (
    <ContainerGeneral>
      <BodyHeader>
        <div className="container-title">
          <h2><strong>Noticias My PocketCard</strong></h2>
        </div>
        <div className="container-img">
          <img src="/img/image/news/newspocket.png" alt={`img-bonus`} />
        </div>
      </BodyHeader>
      <ContentNews>
        {data.map((sec, index) => (
          <CardNews key={index}>
            <div className='container-img'>
              <img src={sec.img} alt="new-img"/>
            </div>
            <div className='container-title'>
              <h2>{sec.label}</h2>
              <div className='container-button'>
                <ButtonIcon func={() => handleRouter(sec.id)} text={"Ver Mas"}/>
              </div>
            </div>
          </CardNews>
        ))}
      </ContentNews>
    </ContainerGeneral>
  )
}

export default News