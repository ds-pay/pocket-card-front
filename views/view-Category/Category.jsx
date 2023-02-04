import React, { useState } from 'react'
import { ContainerGeneral, BodyHeader, MediumBody, CardCategory, ContentCategory } from './StylesCategory'

const Category = () => {

  const [categorySelected, setCategorySelected ] = useState("")

  const ArrayCategory = [
    {
      id:"bienestar",
      icon: "img/Icons/cat_bienestar.svg",
      label: "Mi Bienestar",
    },
    {
      id:"diversion",
      icon: "img/Icons/cat_diversion.svg",
      label: "Vamos a Divertirnos",
    },
    {
      id:"estudiar",
      icon: "img/Icons/cat_estudiar.svg",
      label: "Vamos a Estudiar",
    },
    {
      id:"hogar",
      icon: "img/Icons/cat_hogar.svg",
      label: "Mi Hogar",
    },
    {
      id:"mascotas",
      icon: "img/Icons/cat_mascotas.svg",
      label: "Mi Mascota",
    },
    {
      id:"seguridad",
      icon: "img/Icons/cat_seguridad.svg",
      label: "Mi Seguridad",
    },
    {
      id:"shopping",
      icon: "img/Icons/cat_shopping.svg",
      label: "Vamos de Shopping",
    },
    {
      id:"transporte",
      icon: "img/Icons/cat_transporte.svg",
      label: "Mi Transporte",
    },
    {
      id: "viajar",
      icon: "img/Icons/cat_viajar.svg",
      label: "Vamos a Viajar",
    },
  ]

  return (
    <ContainerGeneral>
      <BodyHeader>
        <h1>Categorias</h1>
      </BodyHeader>
      <MediumBody>
        <div className='container-categorys'> 
          {
            ArrayCategory.map((sec, index) => (
              <CardCategory key={index}>
                <div className='container-icon'>
                  <img src={sec.icon} alt={sec.id} />
                </div>
                <div className='container-title'>
                  <h3>{sec.label}</h3>
                </div>
              </CardCategory>
            ))
          }
        </div>
        <ContentCategory>
          {
            categorySelected
              ?
              <div>holis</div>
              :
              <div className='seleccion'><h3>Selecciona una Categoria</h3></div>
          }
        </ContentCategory>

      </MediumBody>
    </ContainerGeneral>
  )
}

export default Category