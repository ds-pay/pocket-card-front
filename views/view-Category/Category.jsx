import React, { useState } from 'react'
import ButtonIcon from '../../components/Buttons/ButtonIcon/ButtonIcon'
import { ContainerGeneral, BodyHeader, MediumBody, CardCategory } from './StyleCategory'
import { BiArrowBack } from 'react-icons/bi'
import { AiFillHeart } from 'react-icons/ai'
import { useRouter } from 'next/router'

const Category = ({ data, clickAction }) => {
  const [titleCategory, setTitleCategory] = useState(data.label);
  const [imageCategory, setImageCategory] = useState(data.icon);
  const [idCategory, setIdCategory] = useState(data.id);
  const [agreementsCategory, serAgreementsCategory] = useState(data.agreements);

  const router = useRouter()

  const handleViewAgreement = (Categoryid, idAgreement) => {
    router.push(`/categories/${Categoryid}/${idAgreement}`)
  }

  return (
    <ContainerGeneral>
      <BodyHeader>
        <div className="container-butonback">
          <ButtonIcon icon={<BiArrowBack/>} func={clickAction}/>
        </div>
        <div className="container-title">
          <h3>{titleCategory}</h3>
        </div>
        <div className="container-img">
          <img src={`${imageCategory}`} alt={`img-${idCategory}`} />
        </div>
      </BodyHeader>

      <MediumBody>
        {
          agreementsCategory.map((sec, index) => (
            <CardCategory onClick={() => handleViewAgreement(data.id, sec.id)}>
              <div className='container-icon'>
                <img src={sec.img} alt={sec.id} />
              </div>
              <div className='container-text'>
                <div className='container-title'>
                  <h3>{sec.title}</h3>
                </div>
                <div className='container-content'>
                  <div><h3><AiFillHeart /> {sec.hearts}</h3></div>
                  <div><h3>{sec.percent}</h3></div>
                </div>
              </div>
              {/* <div className='container-button'>
                <ButtonIcon func={() => handleViewCategory(sec.id)} text={"More"} />
              </div> */}
            </CardCategory>
          ))
        }
      </MediumBody>
    </ContainerGeneral>
  )
}

export default Category