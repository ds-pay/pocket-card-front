import { useRouter } from 'next/router'
import { CardGeneral } from './StyleCardZoom'

const CardZoom = ({ data, icon }) => {
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
            <CardGeneral onClick={() => handleClick(sec.category.id, sec.id)} key={index}>
              <div className='container-icon'>
                <img src={sec.img} alt={sec.id} />
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
          ))
          :
          null
      }
    </>
  )
}

export default CardZoom