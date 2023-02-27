
import { useRouter } from 'next/router';
import { CardGeneral, Content } from './StyleCardZoom';
import { FaShareSquare } from 'react-icons/fa';

const CardZoom = ({ data, icon, handleShare }) => {

  const router = useRouter()
  const handleClick = (categoryId, agreementId ) => {
    router.push(`/categories/${categoryId.toLowerCase()}/${agreementId}`)
  }



  return (
    <>
      {
        data
          ?
          data.map((sec, index) => (
            <>
              <CardGeneral key={index}>
                <div className='container-icon'>
                  <div className='button-share' onClick={() => handleShare(sec.id)}>
                    <h4><FaShareSquare /></h4>
                    <h2>Compartir</h2>
                  </div>
                  <img onClick={() => handleClick(sec.category.id, sec.id)} src={sec.img} alt={sec.id} />
                </div>
                <div className='container-text'>
                  <div className='container-title'>
                    <h3>{sec.title}</h3>
                  </div>
                  <div className='container-content'>
                    <div><h3>{icon} {sec.hearts}</h3></div>
                    <div><h3>{sec.percent}</h3></div>
                  </div>
                </div>
              </CardGeneral>
            </>
          ))
          :
          null
      }
    </>
  )
}

export default CardZoom