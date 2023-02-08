import React, { useState } from 'react'
import { ContainerGeneral, BodyHeader, MediumBody, CardCategory, ContentCategory } from './StylesCategories';
import ButtonIcon from '../../components/Buttons/ButtonIcon/ButtonIcon'
import { FaImages } from 'react-icons/fa';
import { BiCategoryAlt } from 'react-icons/bi'
import { useRouter } from 'next/router';

const Categories = ({ category }) => {

  const [categoryIdSelect, setCategoryIdSelect ] = useState("")

  const router = useRouter();
  const handleViewCategory = (categoryId) => {
    router.push(`/categories/${categoryId}`);
  };

  return (
    <ContainerGeneral>
      <BodyHeader>
        <div className="container-img">
          <BiCategoryAlt />
        </div>
        <div className="container-title">
          <h3>Categorias</h3>
        </div>
      </BodyHeader>
      <MediumBody>
        <div className='container-categories'> 
          {
            category.map((sec, index) => (
              <CardCategory 
                onClick={() => setCategoryIdSelect(sec.id)} 
                key={index}
                // isSelected={categoryIdSelect === sec.id ? true : false}
              >
                <div className='container-icon'>
                  <img src={sec.icon} alt={sec.id} />
                </div>
                <div className='container-title'>
                  <h3>{sec.label}</h3>
                </div>
                <div className='container-text'>
                  <p>{sec.text}</p>
                </div>
                <div className='container-button'>
                  <ButtonIcon func={() => handleViewCategory(sec.id)} text={"More"}/>
                </div>
              </CardCategory>
            ))
          }
        </div>
        <div>
        </div>
        {/* <ContentCategory>
          {
            categoryIdSelect
              ?
              category.map((sec, index) => (
                categoryIdSelect === sec.id 
                ?
                <>
                  <h1>{sec.label}</h1>
                </>
                :null
              ))
              :
              <div className='seleccion'><h3>Selecciona una Categoria</h3></div>
          }
        </ContentCategory> */}
      </MediumBody>
    </ContainerGeneral>
    
  )
}

export default Categories