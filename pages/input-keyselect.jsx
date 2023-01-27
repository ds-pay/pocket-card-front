import React from "react";
import InputKeySelect from "../components/Inputs/InputKeySelect/InputKeySelect";

const inputKeyselect = () => {
  const medicina = [
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

  const carros = [
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
  ]

  const motos = [
    { title: "Ciclomotores", year: 1940 },
    { title: "Scooters", year: 1988 },
    { title: "Clásicas", year: 2006 },
    { title: "Naked", year: 1988 },
    { title: "Trail", year: 1957 },
    { title: "Deportivas", year: 2012 },
    { title: "Gran turismo", year: 1980 },
    { title: "Competencia", year: 2008 },
    { title: "Eléctricas", year: 1999 },
    { title: "Yamaha", year: 2012 },
    { title: "Bajaj", year: 1997 },
    { title: "AKT", year: 1986 },
    { title: "Honda", year: 2003 },
    { title: "Victory", year: 1984 },
    { title: "Suzuki", year: 1957 },
    { title: "TVS", year: 1981 },
    { title: "Hero", year: 1941 },
    { title: "Kymco", year: 1959 },
    { title: "Benelli", year: 1958 },
  ]

  const arrayAutoComplete = [
    {
      id: "tags-standard",
      label: "Medicina",
      array: medicina,
      placeholder: "Eleje una Medicina",
      variant: "standard"
    },
    {
      id: "tags-standard",
      label: "Carros",
      array: carros,
      placeholder: "Eleje un Carro",
      variant: "standard"
    },
    {
      id: "tags-standard",
      label: "Motos",
      array: motos,
      placeholder: "Eleje una Moto",
      variant: "standard"
    }
  ]

  return <InputKeySelect array={arrayAutoComplete} />;
};

export default inputKeyselect;
