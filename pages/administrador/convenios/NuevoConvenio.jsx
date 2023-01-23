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
        />
      </div>
    ))
  }

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
  }

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
      </ContainText>
    </ContainerCardForm>
  )
}

export default NuevoConvenio