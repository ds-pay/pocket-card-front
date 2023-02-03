import React, { useState } from 'react'
import ButtonIcon from '../../components/Buttons/ButtonIcon/ButtonIcon';
import { ContainerCardForm, Header, ContainImages, ContainInfo, DivLinks, InputTextview, ContainText, ContainInputText } from './StylesDetails';
import { BsFacebook } from 'react-icons/bs';
import { TbWorld } from 'react-icons/tb';
import { FaWhatsapp } from 'react-icons/fa';
import InputList from '../../components/Inputs/InputList/InputList'
import InputKeySelect from '../../components/Inputs/InputKeySelect/InputKeySelect';
import InputLink from '../../components/Inputs/InputLink/InputLink';
import InputTextAreaArray from '../../components/Inputs/InputTextArea/InputTextAreaArray';
import InputTextArea from '../../components/Inputs/InputTextArea/InputTextArea';
import InputText from '../../components/Inputs/InputText/InputText';

const DetailsAgreement = ({ array }) => {
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
                    isEditing={isEditing ? true :false}
                  />
                  :
                  <InputTextview
                    type={"text"}
                    value={inputValue ? inputValue : sec.placeholder}
                  />
              }
              {/* <ButtonIcon
                icon={isEditing ? <IoMdSave /> : <RiEdit2Fill />}
                func={isEditing ? handleSave : handleEdit}
              /> */}
            </div>
          </>
          : null
      ))
    )
  };

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

  const funLink = () => {
    const ArrayLink = [
      {
        id: "web",
        icon: <TbWorld/>,
        label: "www.https://michinegocios.com.co"
      },
      {
        id: "facebook",
        icon: <BsFacebook/>,
        label: "www.https://facebook.com/michinedegocios/"
      },
      {
        id: "whatsapp",
        icon: <FaWhatsapp/>,
        label: "www.https://whatsapp.com/michinedegocios/3245587855"
      },
    ]

    return ArrayLink.map((sec, index) => (
      <div className='inputlink'>
        <div className='link-button'>
          <ButtonIcon  icon={sec.icon} func={() =>{}}/>
        </div>
        <InputTextview value={sec.label} />
      </div>
    ))
  }

  const funTextAreaArrray = () => {
    const ArrayTA = [
      {
        id: "conv_textos1",
        label: "Texto nº 1:",
        type: "parrafos",
        value: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        isBorderNone: true,
        buttonAdd: false
      },
      {
        id: "conv_textos2",
        label: "Texto nº 2:",
        type: "parrafos",
        value: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        isBorderNone: true,
        buttonAdd: false
      },
    ]

    return(
      <div className='contain'>
        {
          ArrayTA.map((input, index) => (
            <>
              <h1>{input.label}</h1>
              <div className='contain-input'>
                <InputTextArea
                  isBorderNone={true}
                  isBgNone={true}
                  type={"area"}
                  value={input.value}
                  isMargin={true}
                />
              </div>
            </>
          ))
        }
      </div>
    ) 
  };

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
                funHeader(sec.arrayheader, edit.id)
                :
                null
            ))
          }
          <ContainText>
            {funTextAreaArrray()}
            {funLink()}
            {funInputKeySelect()}
          </ContainText>
        </>
      ))}
    </ContainerCardForm>
  )
}

export default DetailsAgreement