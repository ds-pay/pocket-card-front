const agreements = [
  {
    id: "ortodentis",
    title: "ORTODENTIS",
    img: "/img/image/agreements/ORTODENTIS.jpg",
    hearts: "11",
    percent: "50%",
    description: "Porque la sonrisa refleja tu salud y tu seguridad. Aprovecha estos descuentos que el Dr. Mauricio Rojas, trae para ti:",
    discounts: [
      {
        id: "discount1",
        discount: "Descuento de 50% en profilaxis y desmanchado.",
      },
      {
        id: "discount2",
        discount: "Descuento de 20% en operatoria estética.",
      },
      {
        id: "discount3",
        discount: "Bono de $100.000 en rehabilitación oral (Prótesis removible y coronas).",
      }
    ],
    condition: "Para adquirir los descuentos debes presentar tu tarjeta Pocket Card.",
    coverage: "Mocoa y Puerto Asís Putumayo",
    category: {
      id: "Bienestar",
    }
  },
  {
    id: "gmo",
    title: "GMO",
    img: "/img/image/agreements/GMO.jpg",
    hearts: "19",
    percent: "40%",
    description: "En GMO encontrarás las gafas oftálmicas y de sol perfectas para que veas, te veas y te sientas bien.",
    discounts: [
      {
        id: "discount1",
        discount: "Debes comunicarte con el asesor JOHAN SEBASTIAN RODRIGUEZ al numero de atención al cliente 3058142584 para acceder a las tarifas preferenciales.",
      },
      {
        id: "discount2",
        discount: "Descuento aplicable únicamente a lentes oftálmicos, excluye lentes marca Ray Ban Originales, lentes de contacto, monturas oftálmicas, gafas de sol, líquidos y/o accesorios. Los lentes oftálmicos con descuento deberán ser instalados en la montura Luxottica oftálmicas",
      },
      {
        id: "discount3",
        discount: "En caso de no realizar ninguna compra el examen visual tendrá un costo de DIEZ MIL PESOS MCTE (COP $10.000)",
      },
      {
        id: "discount4",
        discount: "No acumulable con otras promociones, convenios o ventas especiales",
      },
    ],
    condition: "POR LA COMPRA DE (1) MONTURA MÁS + UN (1) PAR DE LENTES OBTÉN UN DESCUENTO SOBRE EL VALOR TOTAL DE TU COMPRA, EQUIVALENTE AL 40% DEL VALOR DE LOS LENTES. DESCUENTO APLICABLE ÚNICAMENTE A LENTES OFTÁLMICOS, EXCLUYE LENTES MARCA RAY BAN ORIGINALES, LENTES DE CONTACTO, MONTURAS OFTÁLMICAS, GAFAS DE SOL, LÍQUIDOS Y/O ACCESORIOS. LOS LENTES OFTÁLMICOS CON DESCUENTO DEBERÁN SER INSTALADOS EN LA MONTURA LUXOTTICA OFTÁLMICA. LA COMPRA DE LA MONTURA LUXOTTICA OFTÁLMICA CON FÓRMULA Y LOS LENTES OFTÁLMICOS CON DESCUENTO DEBERÁN CONSTAR EN UNA MISMA FACTURA. NO ACUMULABLE CON OTRAS PROMOCIONES, CONVENIOS O VENTAS ESPECIALES. PROMOCIÓN VÁLIDA A NIVEL NACIONAL DURANTE LA VIGENCIA DEL PRESENTE ACUERDO. // POR LA COMPRA DE (1) MONTURA + UN (1) PAR DE LENTES (ARMAZÓN OFTÁLMICO O GAFAS DE SOL + LENTES FORMULADOS) O UNA CAJA DE LENTES DE CONTACTO EN UNA TIENDA ÓPTICAS GMO COLOMBIA, RECIBE EXAMEN VISUAL GRATIS. EN CASO DE NO REALIZAR NINGUNA COMPRA EL EXAMEN VISUAL TENDRÁ UN COSTO DE DIEZ MIL PESOS MCTE (COP $10.000). NO ACUMULABLE CON OTRAS PROMOCIONES Y/O DESCUENTOS.",
    coverage: "A nivel Nacional",
    category: {
      id: "Bienestar",
    }
  },
  {
    id: "dentisalud",
    title: "DENTISALUD",
    img: "/img/image/agreements/DENTISALUD.jpg",
    hearts: "17",
    percent: "7-30%",
    description: "Por que tu salud dental es lo mas importante en DENTISALUD encontrarás a los mejores especialistas experimentados, dispuestos a prestarte Excelente calidad y alta tecnología.",
    discounts: [
      {
        id: "discount1",
        discount: "Hasta el 30% de descuento en odontología general y especializada.",
      },
      {
        id: "discount2",
        discount: "10% en Ortodoncia Convencional.",
      },
      {
        id: "discount3",
        discount: "7% en Ortodoncia Estética acceso a plataforma de financiación hasta 60 meses.",
      },
    ],
    condition: "Para adquirir el servicio debes solicitar una cita de valoración a nuestra linea 3507023740.",
    coverage: "A nivel Nacional (Los descuentos no aplican para la ciudad de YOPAL y Palmira)",
    category: {
      id: "Bienestar",
    }
  },
  {
    id: "coodontologos",
    title: "COODONTOLOGOS",
    img: "/img/image/agreements/COODONTOLOGOS.jpg",
    hearts: "10",
    percent: "30%",
    description: "Obtén 1 profilaxis gratis al año para el titular de la membresía Semiología, blanqueamiento, cirugía oral, implantes, ortodoncia, rehabilitación, odonto kid, encías, diseño de sonrisa y profilaxis.",
    discounts: [
      {
        id: "discount1",
        discount: "debes sacar la cita de valoración y estando en consulta deberás presentar la credencial junto con su cédula",
      },
    ],
    condition: "No aplica para otras promociones.",
    coverage: "BOGOTÁ, CALI, CARTAGENA, SABANA DE BOGOTÁ, SANTA MARTA",
    category: {
      id: "Bienestar",
    }
  },
  {
    id: "sonria",
    title: "SONRÍA",
    img: "/img/image/agreements/SONRÍA.jpg",
    hearts: "17",
    percent: "30-35%",
    description: "Prepárate para descubrir el poder de tu sonrisa.",
    discounts: [
      {
        id: "discount1",
        discount: "Debes comunicarte con la asesora SANDRA GUERRA al número de atención al cliente 3175050712 para acceder a las tarifas preferenciales.",
      },
      {
        id: "discount2",
        discount: "Descuento especial del 35% en tratamientos (30% adquiriendo la tarjeta Sonría y 5% adicional presentando su credencial Pocket Card)",
      },
    ],
    condition: "Adquiera la tarjeta Sonría (Personal $10.000",
    coverage: "Armenia / Barrancabermeja / Barranquilla / Bello / Bogotá / Bucaramanga / Buga / Cali / Cartagena / Cartago / Dosquebradas / Duitama / Envigado / Facatativá / Florencia / Fusagasugá / Ipiales / Itagui / Manizales / Medellín / Montería / Neiva / Palmira / Pasto / Pereira / Pitalito / Popayán / Riohacha / Rionegro / Santa Marta / Sincelejo / Sogamoso / Tulu� / Tunja / Valledupar / Villavicencio.",
    category: {
      id: "Bienestar",
    }
  },
  {
    id: "medplus",
    title: "MEDPLUS",
    img: "/img/image/agreements/MEDPLUS.jpg",
    hearts: "12",
    percent: "Tarifa Especial",
    description: "Un plan de medicina prepagada pensado a la medida de las necesidades de tu familias",
    discounts: [
      {
        id: "discount1",
        discount: "Tarifa preferencial en nuestros planes azules de medicina prepagada.",
      },
    ],
    condition: "Debe comunicarse con nuestra linea de servicio al cliente 📞 350 702 3740 para acceder a las tarifas preferenciales.",
    coverage: "A NIVEL NACIONAL",
    category: {
      id: "Bienestar",
    }
  },
  {
    id: "ceadltda",
    title: "CEAD LTDA",
    img: "/img/image/agreements/CEADLTDA.jpg",
    hearts: "7",
    percent: "35%",
    description: "En CEAD LTDA Te ofrecemos el mejor servicio para realizar Diagnósticos Médicos de Calidad, Confiables y de Calidad",
    discounts: [
      {
        id: "discount1",
        discount: "Descuento del 35% en atención de accidentes con SOAT Putumayo",
      },
    ],
    condition: "Presentando su credencial Pocket Card. Mayor información: Sandro Chávez - administrativo@cead.com.co",
    coverage: "PUERTO ASIS/PUTUMAYO",
    category: {
      id: "Bienestar",
    }
  },
  {
    id: "clinicaopticasantalucia",
    title: "CLÍNICA ÓPTICA SANTA LUCÍA",
    img: "/img/image/agreements/CLÍNICAÓPTICASANTALUCÍA.jpg",
    hearts: "8",
    percent: "10%",
    description: "No pierdas de vista tu salud visual. Cuida tus ojos, son tu ventana al mundo",
    discounts: [
      {
        id: "discount1",
        discount: "Tarifas preferenciales en servicios de OptometrÍa, Oftalmológica, tratamientos y Cirugías",
      },
      {
        id: "discount2",
        discount: "En lentes y monturas descuento del 10% sobre la tarifa al publico",
      },
      {
        id: "discount3",
        discount: "Los descuentos aplican presentando su credencial Pocket Card y el documento de identidad",
      },
    ],
    condition: "Indicar que van por parte de la alianza con Grupo Empresarial Happy",
    coverage: "MEDELLíN / BOGOTA / IBAGUÉ / PEREIRA / MONTERÍA / BARRANQUILLA / APARTADÓ",
    category: {
      id: "Bienestar",
    }
  },
]

export default agreements