import React, { useState } from 'react'
import ButtonIcon from '../../components/Buttons/ButtonIcon/ButtonIcon';
import { ContainerCardForm, Header, ContainImages, ContainInfo, DivLinks, InputTextview, ContainText } from './StyleEditConvenios';
import { IoMdTrash, IoMdSave } from 'react-icons/io';
import { RiEdit2Fill } from 'react-icons/ri';
import InputList from '../../components/Inputs/InputList/InputList'
import InputKeySelect from '../../components/Inputs/InputKeySelect/InputKeySelect';
import InputLink from '../../components/Inputs/InputLink/InputLink';
import InputTextAreaArray from '../../components/Inputs/InputTextArea/InputTextAreaArray';

const ViewEditConvenios = ({ array }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const ArrayInfoEdit = [
    {
      id: "infoedit1",
      label: "Estado del Convenio",
      placeholder: "Activo",
    },
    {
      id: "infoedit2",
      label: "Categoria Principal",
      placeholder: "Mi Bienestar",
    },
    {
      id: "infoedit3",
      label: "Categoria Secundaria",
      placeholder: "Vamos a Estudiar",
    },
    {
      id: "infoedit4",
      label: "Nombre o Titulo",
      placeholder: "El Michi Financiero Interprace",
    },
    {
      id: "infoedit5",
      label: "Sub Categoria",
      placeholder: "Mi Hogar",
    },
    {
      id: "infoedit6",
      label: "Porcentaje de Descuento",
      placeholder: "60%",
    },
  ];

  const funInputsEdits = (id) => {
    return (
      ArrayInfoEdit.map((sec, index) => (
        sec.id === id
          ?
          <>
            <h3>{sec.label}</h3>
            <div className='container-input'>
              {
                isEditing
                  ?
                  <InputTextview
                    type={"text"}
                    value={inputValue}
                    onChange={event => setInputValue(event.target.value)}
                    isEditing={isEditing ? true : false}
                  />
                  :
                  <InputTextview
                    type={"text"}
                    value={inputValue ? inputValue : sec.placeholder}
                  />
              }
              <ButtonIcon
                icon={isEditing ? <IoMdSave /> : <RiEdit2Fill />}
                func={isEditing ? handleSave : handleEdit}
              />
            </div>
          </>
          : null
      ))
    )
  };

  const funHeader = (text,array, id) => {
    return array.map((sec, index) => {
      if (sec.id === id) {
        return <Header>
          <div className="container-img">
            {sec.icon}
          </div>
          <div className="container-title">
            <h3>{text}{sec.editlabel}</h3>
          </div>
        </Header>
      }
    })
  };

  const funInputKeySelect = () => {
    const keywordsBusqueda = [
      { title: "alprenolol", year: 1994 },
      { title: "hidralazina", year: 1972 },
      { title: "isoproterenol", year: 1974 },
      { title: "lidocaína", year: 2008 },
      { title: "meperidina", year: 1957 },
      { title: "nifedipina", year: 1993 },
      { title: "nitroglicerina", year: 1994 },
      { title: "propranolol", year: 2003, },
      { title: "testosterona", year: 1966 },
      { title: "verapamilo", year: 1999 },
      { title: "Difusión pasiva,", year: 2001, },
      { title: "Difusión facilitada", year: 1980, },
      { title: "Transporte activo", year: 1994 },
      { title: "Inception", year: 2010 },
      { title: "Pinocitosis.", year: 2002, },
    ];

    const cobertura = [
      { title: "Mercedes-benz Clase B 1.6 Blueefficiency", year: 1940 },
      { title: "Chevrolet Sonic 1.6 Lt 4 P", year: 1988 },
      { title: "Toyota Rav4 2.5 Limited 4x4", year: 2006 },
      { title: "Ford Explorer 2.3 Limited", year: 1988 },
      { title: "Opel Crossland X", year: 1957 },
      { title: "Ford F-150 3.5", year: 2012 },
      { title: "Renault Duster 2.0 Dynamique 4x4", year: 1980 },
      { title: "Chevrolet Joy 1.4 Mt", year: 2008 },
      { title: "Toyota Prado 3.0 Tx-l", year: 1999 },
      { title: "Toyota Prado 3.4 Vxa", year: 2012 },
      { title: "Renault Duster Oroch 2.0 Intens 4x4", year: 1997 },
      { title: "Subaru Xv 2.0i-s Es Cvt", year: 1986 },
      { title: "Mitsubishi Montero 2.5 Sport", year: 2003 },
      { title: "Bmw X1 2.0 F48 Sdrive 20i", year: 1984 },
      { title: "Ford Explorer 4.6 Eddie Bauer", year: 1957 },
      { title: "Mercedes-benz Clase E 1.8 Cgi Cabriolet", year: 1981 },
      { title: "Kia Picanto 1.25 Gt Line", year: 1941 },
      { title: "Toyota Prado 2.8 Txl Diesel", year: 1959 },
      { title: "Kia Sportage 2.0 Desire Aut", year: 1958 },
    ];
    const ArraykeySelect = [
      {
        id: "tags-standard",
        label: "Keyword de busqueda",
        array: keywordsBusqueda,
        placeholder: "Selecciona o crea una keyword",
        variant: "standard"
      },
      {
        id: "tags-standard",
        label: "Cobertura del convenio",
        array: cobertura,
        placeholder: "Selecciona los lugares de cobertura",
        variant: "standard"
      },
    ];

    return <div className='inputkeyselect'><InputKeySelect array={ArraykeySelect} /></div>

  };

  const funInputLink = () => {
    const { values, errors, handlesubmit, handleChange } = InputList();
    const { conv_links } = values;
    const ArrayLink = [
      {
        label: "Selecciona Red",
        id: "conv_links",
        value: conv_links,
        onChange: handleChange,
        onBlur: (e) => handleBlur(e.target.name),
        type: "links"
      },
    ]
    return <div className='inputlink'><InputLink data={ArrayLink} /></div>
  };

  const funTextAreaArrray = () => {
    const { values, errors, handlesubmit, handleChange } = InputList();
    const { conv_textos } = values;
    const ArrayTA = [
      {
        label: "Texto",
        id: "conv_textos",
        type: "parrafos",
        value: conv_textos,
        onChange: handleChange,
        placeholder: "",
        rows: 3,
      },
    ]

    return ArrayTA.map((input, index) => (
      <div className='textarearray'>
        <InputTextAreaArray
          key={index}
          label={input.label}
          id={input.id}
          isBorderNone={true}
          value={input.value}
          onChange={input.onChange}
          buttonAdd={true}
        />
      </div>
    ))
  };

  return (
    <ContainerCardForm>
      {array.map((sec, index) => (
        <>
          {
            sec.arrayheader.map((edit, index) => (
              edit.id === "editimg"
                ?
                funHeader("Editar",sec.arrayheader, edit.id)
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
                funHeader("Editar",sec.arrayheader, edit.id)
                :
                null
            ))
          }
          <ContainInfo>
            <div className='container-left'>
              <DivLinks>
                <>
                  {funInputsEdits("infoedit1")}
                </>
                <>
                  {funInputsEdits("infoedit2")}
                </>
                <>
                  {funInputsEdits("infoedit3")}
                </>
              </DivLinks>
            </div>
            <div className='container-right'>
              <DivLinks>
                <>
                  {funInputsEdits("infoedit4")}
                </>
                <>
                  {funInputsEdits("infoedit5")}
                </>
                <>
                  {funInputsEdits("infoedit6")}
                </>
              </DivLinks>
            </div>
          </ContainInfo>
          {
            sec.arrayheader.map((edit, index) => (
              edit.id === "edittext"
                ?
                funHeader("Editar",sec.arrayheader, edit.id)
                :
                null
            ))
          }
          <ContainText>
            {funTextAreaArrray()}
            {funInputLink()}
            {funInputKeySelect()}
          </ContainText>
        </>
      ))}
    </ContainerCardForm>
  )
}

export default ViewEditConvenios