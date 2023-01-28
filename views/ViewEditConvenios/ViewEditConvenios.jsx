import React from 'react'
import ButtonIcon from '../../components/Buttons/ButtonIcon/ButtonIcon';
import { ContainerCardForm, Header, ContainImages, ContainInfo, DivLinks, InputTextview } from './StyleEditConvenios';
import { IoMdTrash, IoMdSave } from 'react-icons/io';
import { RiEdit2Fill } from 'react-icons/ri'

const ViewEditConvenios = ({ array }) => {

  const ArrayInfoEdit = [
    {
      id: "infoedit1",
      label: "Estado del Convenio",
      placeholder: "",
    },
    {
      id: "infoedit2",
      label: "categoriaprimaria",
      placeholder: "",
    },
    {
      id: "infoedit3",
      label: "categoriasecundaria",
      placeholder: "",
    },
    {
      id: "infoedit4",
      label: "subcategoria",
      placeholder: "",
    },
    {
      id: "infoedit5",
      label: "Estado del Convenio",
      placeholder: "",
    },
    {
      id: "infoedit6",
      label: "categoriaprimaria",
      placeholder: "",
    },
    {
      id: "infoedit7",
      label: "categoriasecundaria",
      placeholder: "",
    },
    {
      id: "infoedit8",
      label: "subcategoria",
      placeholder: "",
    }
  ]

  const funHeader = (array, id) => {
    return array.map((sec, index) => {
      if (sec.id === id) {
        return <Header>
          <div className="container-img">
            {sec.icon}
          </div>
          <div className="container-title">
            <h3>{sec.editlabel}</h3>
          </div>
        </Header>
      }
    })
  }

  return (
    <ContainerCardForm>
      {array.map((sec, index) => (
        <>
          {
            sec.arrayheader.map((edit, index) => (
              edit.id === "editimg"
                ?
                funHeader(sec.arrayheader, edit.id)
                :
                null
            ))
          }
          <ContainImages>
            <div className="container-images">
              <div className="img">
                <img src={sec.img} alt="" />
                <h3>Imagen Principal</h3>
              </div>
              <div className="img">
                <img src={sec.img} alt="" />
                <h3>Imagen Logo</h3>
              </div>
            </div>
          </ContainImages>
          {
            sec.arrayheader.map((edit, index) => (
              edit.id === "editinfo"
                ?
                funHeader(sec.arrayheader, edit.id)
                :
                null
            ))
          }
          <ContainInfo>
            <div className='container-left'>
              <DivLinks key={index}>
              {
                ArrayInfoEdit.map((sec, index) => (
                  <>
                    <h3>{sec.label}</h3>
                    <div className='container-input'>
                      <InputTextview
                        type={"text"}
                        placeholder={sec.placeholder}
                      // disabled={indexChange === index ? false : true}
                      />
                      <ButtonIcon
                        icon={<IoMdTrash />}
                        func={() => handleDelete(index)}
                      />
                    </div>
                  </>
                ))
              }
              </DivLinks>
            </div>
            <div className='container-right'>
              <h1>Holis, como estas?</h1>
            </div>
          </ContainInfo>
          {
            sec.arrayheader.map((edit, index) => (
              edit.id === "edittext"
                ?
                funHeader(sec.arrayheader, edit.id)
                :
                null
            ))
          }
        </>
      ))}
    </ContainerCardForm>
  )
}

export default ViewEditConvenios