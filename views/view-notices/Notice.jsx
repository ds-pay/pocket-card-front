import ButtonIcon from '../../components/Buttons/ButtonIcon/ButtonIcon';
import { ContainerGeneral, BodyHeader, ContentNews, ContentLinks, LinkUrl } from './StylesNews';
import { IoMdArrowRoundBack } from 'react-icons/io'
import { useRouter } from 'next/router';
import { BiLinkAlt } from 'react-icons/bi'
import Head from 'next/head';
const Notice = ({ data, clickBack }) => {
  const router = useRouter()
  const handleRouter = (urlLink) => {
    router.push(urlLink)
  }

  return (
    <ContainerGeneral>
      <Head>
        <title>{data.label}</title>
      </Head>
      <ContentNews>
        <div className='container-buttonback'>
          <ButtonIcon icon={<IoMdArrowRoundBack/>} text={"Regresar"} func={clickBack}/>
        </div>
        <h2 className='title-notice'><strong>{data.label}</strong></h2>
        <div className='container-text'>
          <div className="container-img">
            <img src={data.img} alt={data.id} />
          </div>
          <div className='container-description'>
            <h2><strong>Descripcion de la noticia:</strong></h2>
            <p>{data.description}</p>
            {
              data.links &&
              <div className='container-links'>
                <h2><strong>Links:</strong></h2>
                <ContentLinks>
                  {data.links.map((sec, index) => (
                    <LinkUrl key={index}>
                      <ButtonIcon func={() => handleRouter(sec.link)} icon={<BiLinkAlt />} text={sec.label} />
                    </LinkUrl>
                  ))}
                </ContentLinks>
              </div>

            }
          </div>
        </div>
      </ContentNews>
    </ContainerGeneral>
  );
};

export default Notice;