import React, { useState } from 'react'
import ButtonIcon from '../../components/Buttons/ButtonIcon/ButtonIcon'
import { ContainerGeneral, BodyHeader, MediumBody, CardCategory } from './StyleCategory'
import { BiArrowBack } from 'react-icons/bi'
import { AiFillHeart } from 'react-icons/ai'
import { useRouter } from 'next/router'

const Category = ({ data, clickAction }) => {
  const { category, agreements } = data;
  const [titleCategory, setTitleCategory] = useState(category.label);
  const [imageCategory, setImageCategory] = useState(category.icon);
  const [idCategory, setIdCategory] = useState(category.id);
  const [agreementsCategory, serAgreementsCategory] = useState(agreements);

  const router = useRouter()

  const handleViewAgreement = (idAgreement) => {
    router.push(`/categories/${idCategory}/${idAgreement}`)
  }

  return (
    <ContainerGeneral>
      <BodyHeader>
        <div className="container-butonback">
          <ButtonIcon icon={<BiArrowBack />} func={clickAction} />
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
          agreementsCategory?.map((sec, index) => (
            <CardCategory key={index} onClick={() => handleViewAgreement(sec.id)}>
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