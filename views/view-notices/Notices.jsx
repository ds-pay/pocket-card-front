import { useRouter } from 'next/router';
import ButtonIcon from '../../components/Buttons/ButtonIcon/ButtonIcon';
import { ContainerGeneral, ContentNews, CardNews } from './StylesNews';
import BodyHeader from '../../components/BodyHeader/BodyHeader';

const Notices = ({ data }) => {
  const router = useRouter()
  const handleRouter = (newId) => {
    router.push(`/news/${newId}`)
  }

  return (
    <ContainerGeneral>
      <BodyHeader title={"Noticias My PocketCard"} img={"/img/image/news/newspocket.png"} alt={"img-bonus"}/>
      <ContentNews>
        {data.map((sec, index) => (
          <CardNews onClick={() => handleRouter(sec.id)} key={index}>
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

export default Notices