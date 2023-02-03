import React from 'react'
import { ContainerCardForm, ContainImages, ContainInfo, ContainText } from './StylesConvenios'
import { FaImages, FaHandshake } from 'react-icons/fa';
import { GrTextAlignFull } from 'react-icons/gr';
import { MdDriveFileRenameOutline } from "react-icons/md";
import { useForm } from 'react-hook-form';
import Dropozone from '../../../components/Dropzone/Dropozone';
import InputSelect from '../../../components/Inputs/InputSelect/InputSelect';
import InputText from '../../../components/Inputs/InputText/InputText';
import InputTextArea from '../../../components/Inputs/InputTextArea/InputTextArea';
import InputList from '../../../components/Inputs/InputList/InputList';
import InputTextAreaArray from '../../../components/Inputs/InputTextArea/InputTextAreaArray';
import InputLink from '../../../components/Inputs/InputLink/InputLink';
import InputKeySelect from '../../../components/Inputs/InputKeySelect/InputKeySelect';

const NuevoConvenio = () => {

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  

  const ArrayTextArea = [
    {
      id: "descripcion",
      name: "Descripcion del convenio",
      isBgNone: true,
      isBorderNone: true,
      placeholder: "Descripcion del convenio",
      img: <MdDriveFileRenameOutline />,
      regis: "descripcion",
      isMargin: true,
      error: errors.descripcion?.type === "required" && (
        <p>El campo ID es Requerido</p>
      ),
    },
    {
      id: "text2",
      name: "text2",
      isBgNone: true,
      isBorderNone: true,
      placeholder: "Terminos Texto 2",
      img: <MdDriveFileRenameOutline />,
      regis: "text2",
      isMargin: true,
      error: errors.text2?.type === "required" && (
        <p>El campo ID es Requerido</p>
      ),
    },
  ];

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

  const funInputLink = () => {
    const { values, errors, handlesubmit, handleChange } = InputList();
    const { conv_links } = values;
    const ArrayLink = [
      {
        label: "Selecciona Red",
        id: "conv_links",
        value: conv_links,
        onChange: handleChange,
        onBlur: (e)=>handleBlur(e.target.name),
        type:"links"
      },
    ]
    return <div className='inputlink'><InputLink data={ArrayLink}/></div>
  };

  const funConvenio = (id) => {
    
    const ArrayConvenio = [
      {
        id:"imagenesconvenio",
        icon: <FaImages/>,
        label: "Imagenes del Convenio"
      },
      {
        id:"infoconvenio",
        icon: <FaHandshake/>,
        label: "Informacion del Convenio"
      },
      {
        id:"textoybusqueda",
        icon: <GrTextAlignFull/>,
        label: "Textos y Busqueda"
      }
    ];

    return (
      ArrayConvenio.map((sec, index) => (
        sec.id === id ? (
          <div key={index} className="container-header">
            <div className="container-img">
              {sec.icon}
            </div>
            <div className="container-title">
              <h3>{sec.label}</h3>
            </div>
          </div>
        )
          : null
      ))
    )
  };  

  const funDropzone = (text) => {

    const ArrayImg = [
      {
        id: "imgprincipal",
        label:"Imagen Principal",
      },
      {
        id: "imglogo",
        label:"Imagen Logo",
      }
    ];

    return (
      <div className='container-dropzone'>
        {ArrayImg.map((sec, index) => (
          sec.id === text
            ? (
              <Dropozone text={sec.label} requiredfile={"image/*"}/>
            )
            : null
        ))}
      </div>
    )
  };

  const funInputSelect = (id) => {
    const ArrayInfo = [
      {
        id: "estadoconvenio",
        label: "Estado del Convenio",
        icon: "",
        value: "estadoconvenio",
      },
      {
        id: "categoriaprimaria",
        label: "Categoria Principal",
        icon: "",
        value: "categoriaprimaria",
      },
      {
        id: "categoriasecundaria",
        label: "Categoria Secundaria",
        icon: "",
        value: "categoriasecundaria",
      },
      {
        id: "subcategoria",
        label: "Sub Categoria",
        icon: "",
        value: "subcategoria",
      },
    ];

    return (
      id 
      ?
      ArrayInfo.map((sec, index) => (
        sec.id === id
          ? (
            <>
              <h3>{sec.label}</h3>
              <div className="content-credencial">
                <InputSelect
                  dataSelectList={ArrayInfo}
                  useIcons={false}
                />
              </div>
            </>
          )
          : null
      ))
      :
      ArrayInfo.map((sec, index) => (
        sec.id === "estadoconvenio" ||
          sec.id === "categoriaprimaria" ||
          sec.id === "categoriasecundaria"
          ? (
            <>
              <h3>{sec.label}</h3>
              <div className="content-credencial">
                <InputSelect
                  dataSelectList={ArrayInfo}
                  useIcons={false}
                />
              </div>
            </>
          )
          : null
      ))
    )
  };

  const funInputText = (id) => {
    const ArrayText = [
      {
        id: "nombreotitulo",
        name: "Nombre o Titulo",
        color: true,
        type: "nombreotitulo",
        img: <MdDriveFileRenameOutline />,
        regis: "nameortitle",
        error: errors.nameortitle?.type === "required" && (
          <p>El campo Nombre es Requerido</p>
        ),
      },
      {
        id: "porcentaje",
        name: "Porcentaje de Descuento",
        color: true,
        type: "porcentaje",
        img: <MdDriveFileRenameOutline />,
        regis: "porcentaje",
        error: errors.porcentaje?.type === "required" && (
          <p>El campo Nombre es Requerido</p>
        ),
      },
    ]

    return (
      ArrayText.map((sec, index) => (
        sec.id === id
          ?
          <>
          <h3>{sec.name}</h3>
          <div className="container-inputs">
            <div className="inputtext">
              <InputText
                id={sec.id}
                name={sec.name}
                color={sec.color}
                type={sec.type}
                regis={{
                  ...register(sec.regis, {
                    required: true,
                  }),
                }}
              />
              {sec.error}
            </div>
          </div>
          </>
          : null
      ))
    )
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

  }


  return (
    <ContainerCardForm>
      <ContainImages>
        {funConvenio("imagenesconvenio")}
        <div className='container-images'>
          {funDropzone("imgprincipal")}
          {funDropzone("imglogo")}
        </div>
      </ContainImages>
      <ContainInfo>
        {funConvenio("infoconvenio")}
        <div className='container-inputs'>
          <div className='content-left'>{funInputSelect()}</div>
          <div className='content-right'>
            {funInputText("nombreotitulo")}
            {funInputSelect("subcategoria")}
            {funInputText("porcentaje")}
          </div>
        </div>
      </ContainInfo>
      <ContainText>
        {funConvenio("textoybusqueda")}
        <div className='content-input'>
        {ArrayTextArea.map((sec, index) => (
          sec.id === "descripcion"
          ?
          <div className="container-textarea" key={index}>
            <div className="img">{sec.img}</div>
            <div className="inputtext">
              <InputTextArea
                isBgNone={sec.isBgNone}
                isBorderNone={sec.isBorderNone}
                id={sec.id}
                name={sec.name}
                placeholder={sec.placeholder}
                isMargin={sec.isMargin}
                regis={{
                  ...register(sec.regis, {
                    required: true,
                  }),
                }}
              />
              {sec.error}
            </div>
          </div>
          :null
        ))}
        </div>
        {funTextAreaArrray()}
        {funInputLink()}
        {funInputKeySelect()}
      </ContainText>
    </ContainerCardForm>
  )
}

export default NuevoConvenio