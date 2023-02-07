import React, { useState } from 'react'
import { ContainerGeneral, BodyHeader, MediumBody, CardCategory, ContentCategory } from './StylesCategory';
import ButtonIcon from '../../components/Buttons/ButtonIcon/ButtonIcon'
import { FaImages, FaHandshake } from 'react-icons/fa';


const Category = ({ category }) => {

  const [categoryIdSelect, setCategoryIdSelect ] = useState("")

  return (
    <ContainerGeneral>
      <BodyHeader>
        <div className="container-img">
          <FaImages/>
        </div>
        <div className="container-title">
          <h3>Categorias</h3>
        </div>
      </BodyHeader>
      <MediumBody>
        <div className='container-categorys'> 
          {
            category.map((sec, index) => (
              <CardCategory 
                onClick={() => setCategoryIdSelect(sec.id)} 
                key={index}
                isSelected={categoryIdSelect === sec.id ? true : false}
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
                  <ButtonIcon text={"More"}/>
                </div>
              </CardCategory>
            ))
          }
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

export default Category