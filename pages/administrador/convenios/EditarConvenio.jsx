import React, { useState } from 'react'
import { ContainerCardForm, ContainerEdit, ContainerHeadEdit, ContainerCardEdit, Card } from './StylesConvenios'
import { FaEdit, FaImages, FaHandshake } from 'react-icons/fa';
import { GrTextAlignFull } from 'react-icons/gr'
import { BiArrowBack } from 'react-icons/bi';
import ViewEditConvenios from '../../../views/ViewEditConvenios/ViewEditConvenios';
import DetailsAgreement from '../../../views/DetailsAgreement/DetailsAgreement';
import ButtonIcon from '../../../components/Buttons/ButtonIcon/ButtonIcon';

const EditarConvenio = () => {
  const [selectedId, setSelectedId] = useState("")
  const [selectedEdit, setSelectedEdit] = useState("")
  const [isSelection, setSelection] = useState(false)

  const ArrayConvenioEdit = [
    {
      id: "gato1",
      img: "img/image/gatodenegocios.jpeg",
      title: "Michi de negocios ",
      button1: "Detalles del convenio",
      button2: "Editar Convenio",
      array: [
        {
          id: "gato1",
          img: "img/image/gatodenegocios.jpeg",
          title: "Michi de negocios 1",
          arrayheader: [
            {
              id: "editimg",
              editlabel: "Editar Imagenes",
              icon: <FaImages />,
            },
            {
              id: "editinfo",
              editlabel: "Editar Informacion",
              icon: <FaHandshake />,
            },
            {
              id: "edittext",
              editlabel: "Editar Textos y Busqueda",
              icon: <GrTextAlignFull />,
            }
          ]
        }
      ],
    },
    {
      id: "gato2",
      img: "img/image/gatodenegocios.jpeg",
      title: "Michi de negocios",
      button1: "Detalles del convenio",
      button2: "Editar Convenio",
      array: [
        {
          id: "gato2",
          img: "img/image/gatodenegocios.jpeg",
          title: "Michi de negocios 2",
          arrayheader:[
            {
              id: "editimg",
              editlabel: "Editar Imagenes",
              icon: <FaImages />,
            },
            {
              id: "editinfo",
              editlabel: "Editar Informacion",
              icon: <FaHandshake />,
            },
            {
              id: "edittext",
              editlabel: "Editar Textos y Busqueda",
              icon: <GrTextAlignFull />,
            } 
          ]
        }
      ],
    },
    {
      id: "gato3",
      img: "img/image/gatodenegocios.jpeg",
      title: "Michi de negocios",
      button1: "Detalles del convenio",
      button2: "Editar Convenio",
      array: [
        {
          id: "gato3",
          img: "img/image/gatodenegocios.jpeg",
          title: "Michi de negocios 3",
          arrayheader:[
            {
              id: "editimg",
              editlabel: "Editar Imagenes",
              icon: <FaImages />,
            },
            {
              id: "editinfo",
              editlabel: "Editar Informacion",
              icon: <FaHandshake />,
            },
            {
              id: "edittext",
              editlabel: "Editar Textos y Busqueda",
              icon: <GrTextAlignFull />,
            } 
          ]
        }
      ],
    },
    {
      id: "gato4",
      img: "img/image/gatodenegocios.jpeg",
      title: "Michi de negocios",
      button1: "Detalles del convenio",
      button2: "Editar Convenio",
      array: [
        {
          id: "gato4",
          img: "img/image/gatodenegocios.jpeg",
          title: "Michi de negocios 4",
          arrayheader:[
            {
              id: "editimg",
              editlabel: "Editar Imagenes",
              icon: <FaImages />,
            },
            {
              id: "editinfo",
              editlabel: "Editar Informacion",
              icon: <FaHandshake />,
            },
            {
              id: "edittext",
              editlabel: "Editar Textos y Busqueda",
              icon: <GrTextAlignFull />,
            } 
          ]
        }
      ],
    },
    {
      id: "gato5",
      img: "img/image/gatodenegocios.jpeg",
      title: "Michi de negocios",
      button1: "Detalles del convenio",
      button2: "Editar Convenio",
      array: [
        {
          id: "gato5",
          img: "img/image/gatodenegocios.jpeg",
          title: "Michi de negocios 5",
          arrayheader:[
            {
              id: "editimg",
              editlabel: "Editar Imagenes",
              icon: <FaImages />,
            },
            {
              id: "editinfo",
              editlabel: "Editar Informacion",
              icon: <FaHandshake />,
            },
            {
              id: "edittext",
              editlabel: "Editar Textos y Busqueda",
              icon: <GrTextAlignFull />,
            } 
          ]
        }
      ],
    }
  ];

  const handleView = (id, array) => {
    // setSelection(!isSelection)
    setSelectedId(id)
  };

  const handleEdit = (id, array) => {
    setSelectedEdit(id)
    setSelection(!isSelection)
  }

  const funheader = () => {
    return selectedEdit 
      ?
      <div className="container-header">
        <div onClick={() => setSelectedEdit("") } className="container-butonback">
          <BiArrowBack />
        </div>
        <div className="container-title">
          <h3>Detalles del convenio  {selectedId}</h3>
        </div>
      </div>
      : selectedId
      ?
        <div className="container-header">
          <div onClick={() => setSelectedId("")} className="container-butonback">
            <BiArrowBack />
          </div>
          <div className="container-title">
            <h3>Editar Convenio {selectedEdit}</h3>
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
        selectedId === sec.id 
        ? <ViewEditConvenios array={sec.array} /> 
        :null 
      ))
      : selectedEdit 
      ?
        ArrayConvenioEdit.map((sec, index) => (
          selectedEdit === sec.id 
          ? <DetailsAgreement  array={sec.array}/>
          :null 
        ))
      : 
      ArrayConvenioEdit.map((sec, index) => (
        <Card isSelection={isSelection === sec.id ? true : false}>
          <div className='logo'>
            <img src={sec.img} alt="" />
          </div>
          <div className='title'>
            <h3>{sec.title} {parseInt(index += 1)}</h3>
            <ButtonIcon func={() => handleView(sec.id)} text={sec.button2} className='button'/>
            <ButtonIcon func={() => handleEdit(sec.id)} text={sec.button1} className='button'/>
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