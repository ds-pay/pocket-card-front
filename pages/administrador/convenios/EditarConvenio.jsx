import React, { useState } from 'react'
import { ContainerCardForm, ContainerEdit, ContainerHeadEdit, ContainerCardEdit, Card } from './StylesConvenios'
import { FaEdit, FaImages, FaHandshake } from 'react-icons/fa';
import { GrTextAlignFull } from 'react-icons/gr'
import { BiArrowBack } from 'react-icons/bi';
import ViewEditConvenios from '../../../views/ViewEditConvenios/ViewEditConvenios';

const EditarConvenio = () => {
  const [selectedId, setSelectedId] = useState("")
  const [isSelection, setSelection] = useState(false)

  const ArrayConvenioEdit = [
    {
      id: "gato1",
      img: "img/image/gatodenegocios.jpeg",
      title: "Michi de negocios ",
      button1: "Ver convenio",
      button2: "Editar Convenio",
      array: [
        {
          id: "gato1",
          img: "img/image/gatodenegocios.jpeg",
          title: "Michi de negocios 1",
          arrayheader: [
            {
              id: "editimg",
              editimglabel: "Editar Imagenes",
              iconimages: <FaImages />,
            },
            {
              id: "editinfo",
              editinfolabel: "Editar Informacion",
              iconinfo: <FaHandshake />,
            },
            {
              id: "edittext",
              edittextlabel: "Editar Textos y Busqueda",
              icontext: <GrTextAlignFull />,
            }
          ]
        }
      ],
    },
    {
      id: "gato2",
      img: "img/image/gatodenegocios.jpeg",
      title: "Michi de negocios",
      button1: "Ver convenio",
      button2: "Editar Convenio",
      array: [
        {
          id: "gato2",
          img: "img/image/gatodenegocios.jpeg",
          title: "Michi de negocios 2",
          arrayheader:[
            {
              id: "editimg",
              editimglabel: "Editar Imagenes",
              iconimages: <FaImages />,
            },
            {
              id: "editinfo",
              editinfolabel: "Editar Informacion",
              iconinfo: <FaHandshake />,
            },
            {
              id: "edittext",
              edittextlabel: "Editar Textos y Busqueda",
              icontext: <GrTextAlignFull />,
            } 
          ]
        }
      ],
    },
    {
      id: "gato3",
      img: "img/image/gatodenegocios.jpeg",
      title: "Michi de negocios",
      button1: "Ver convenio",
      button2: "Editar Convenio",
      array: [
        {
          id: "gato3",
          img: "img/image/gatodenegocios.jpeg",
          title: "Michi de negocios 3",
          arrayheader:[
            {
              id: "editimg",
              editimglabel: "Editar Imagenes",
              iconimages: <FaImages />,
            },
            {
              id: "editinfo",
              editinfolabel: "Editar Informacion",
              iconinfo: <FaHandshake />,
            },
            {
              id: "edittext",
              edittextlabel: "Editar Textos y Busqueda",
              icontext: <GrTextAlignFull />,
            } 
          ]
        }
      ],
    },
    {
      id: "gato4",
      img: "img/image/gatodenegocios.jpeg",
      title: "Michi de negocios",
      button1: "Ver convenio",
      button2: "Editar Convenio",
      array: [
        {
          id: "gato4",
          img: "img/image/gatodenegocios.jpeg",
          title: "Michi de negocios 4",
          arrayheader:[
            {
              id: "editimg",
              editimglabel: "Editar Imagenes",
              iconimages: <FaImages />,
            },
            {
              id: "editinfo",
              editinfolabel: "Editar Informacion",
              iconinfo: <FaHandshake />,
            },
            {
              id: "edittext",
              edittextlabel: "Editar Textos y Busqueda",
              icontext: <GrTextAlignFull />,
            } 
          ]
        }
      ],
    },
    {
      id: "gato5",
      img: "img/image/gatodenegocios.jpeg",
      title: "Michi de negocios",
      button1: "Ver convenio",
      button2: "Editar Convenio",
      array: [
        {
          id: "gato5",
          img: "img/image/gatodenegocios.jpeg",
          title: "Michi de negocios 5",
          arrayheader:[
            {
              id: "editimg",
              editimglabel: "Editar Imagenes",
              iconimages: <FaImages />,
            },
            {
              id: "editinfo",
              editinfolabel: "Editar Informacion",
              iconinfo: <FaHandshake />,
            },
            {
              id: "edittext",
              edittextlabel: "Editar Textos y Busqueda",
              icontext: <GrTextAlignFull />,
            } 
          ]
        }
      ],
    }
  ];

  const handleView = (id, array) => {
    setSelection(!isSelection)
    setSelectedId(id)
  }

  const funheader = () => {
    return selectedId
      ?
      <div className="container-header">
        <div onClick={() => setSelectedId("")} className="container-butonback">
          <BiArrowBack />
        </div>
        <div className="container-title">
          <h3>Editar Convenio {selectedId}</h3>
        </div>
      </div>
      :
      <div className="container-header">
        <div className="container-img">
          <FaEdit />
        </div>
        <div className="container-title">
          <h3>Editar Convenio</h3>
        </div>
      </div>
  }

  const funContent = () => {
    return selectedId
      ?
      ArrayConvenioEdit.map((sec, index) => (
        selectedId === sec.id ? <ViewEditConvenios array={sec.array} /> : null
      ))
      :
      ArrayConvenioEdit.map((sec, index) => (
        <Card isSelection={isSelection === sec.id ? true : false}>
          <div className='logo'>
            <img src={sec.img} alt="" />
          </div>
          <div className='title'>
            <h3>{sec.title} {parseInt(index += 1)}</h3>
            <div onClick={() => handleView(sec.id)} className='button'>{sec.button1}</div>
            <div onClick={() => handleView(sec.id)} className='button'>{sec.button2}</div>
          </div>
        </Card>
      ))
  }

  return (
    <ContainerCardForm>
      <ContainerEdit>
        <ContainerHeadEdit>
          {funheader()}
        </ContainerHeadEdit>
        <ContainerCardEdit>
          {funContent()}
        </ContainerCardEdit>
      </ContainerEdit>
    </ContainerCardForm>
  )
}

export default EditarConvenio