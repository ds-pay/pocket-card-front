import { useState } from 'react'
import { ContainerFooter, RedSocial, ContentSocial, ButtonUrl, ContentBottom, ContainerApp, TitleText } from './StylesFooter';
import { FaHeadset, FaNewspaper } from 'react-icons/fa';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { AiFillFacebook, AiFillInstagram, AiOutlineWhatsApp, AiFillAndroid, AiFillApple } from 'react-icons/ai';
import { FcHeadset, FcNews, FcInfo } from 'react-icons/fc';
import { TiArrowSortedDown } from 'react-icons/ti';

const Footer = () => {
	const [open, setOpen] = useState(false);
	const [is, setIs] = useState("")

	const router = useRouter();
	const handleRouter = (route) => {
		router.push(route)
	}

	const handleClick = (id) => {
		setOpen(!open);
		setIs(id)
		console.log(open)
	}

	const arrayIconRedSocial = [
		{
			id: "facebook",
			icon: <AiFillFacebook/>,
			url: "",
		},
		{
			id: "instagram",
			icon: <AiFillInstagram/>,
			url: "",
		},
		{
			id: "whatsapp",
			icon: <AiOutlineWhatsApp/>,
			url: "",
		},
	];

	const arrayApps = [
		{
			id: "android",
			icon: <AiFillAndroid />,
			label: "Decarga para Android",
			url: "",
		},
		{
			id: "apple",
			icon: <AiFillApple />,
			label: "Decarga para IOS",
			url: "",
		},
	];

	const ArrayItems = [
		{
			id: "button1",
			className: "sectionFooter",
			label: "Habla con nosotros",
			icon: <FcHeadset />,
			labelbutton: "Servicio al cliente",
			route: "/contactus"
		},
		{
			id: "button2",
			className: "sectionFooter",
			label: "Conoce lo nuevo",
			icon: <FcNews />,
			labelbutton: "Noticias Pocket",
			route: "/news"
		},
		{
			id: "button3",
			className: "sectionFooter",
			label: "Resuelve tus dudas",
			icon: <FcInfo />,
			labelbutton: "Preguntas Frecuentes",
			route: "/questions",
		}
	];

	const arrayText = [
		{
			id: "13423",
			title: "¿Necesitas ayuda?",
			icon: <FaHeadset />,
			content: [
				{
					label: "Envianos un Email"
				},
				{
					label: "Proporciona tu nº Movil"
				},
				{
					label: "Contactanos por Whatsapp"
				},
			],
			route: "/contactus"
		},
		{
			id: "2143",
			title: "Noticias Pocket",
			icon: <FaNewspaper />,
			content: [
				{
					label: "Nuevos Convenios"
				},
				{
					label: "Convenios Destacados"
				},
				{
					label: "Informacion de covenios"
				},
			],
			route: "/news"
		},
		{
			id: "34324",
			title: "Resuelve tus Dudas",
			icon: <BsFillQuestionCircleFill />,
			content: [
				{
					label: "Quienes Somos"
				},
				{
					label: "Preguntas Frecuentes"
				},
				{
					label: "Que promocionamos"
				},
			],
			route: "/questions"
		},
	]

	return (
		<ContainerFooter>
			<ContentBottom>
				{/* <ButtonUrl>
					{ArrayItems.map((sec, index) => (
						<div key={index} onClick={() => handleRouter(sec.route)} className={sec.className}> */}
							{/* <h1>{sec.label}</h1> */}
							{/* <button > */}
							{/* <h2>{sec.icon}</h2>
							<h3><strong>{sec.labelbutton}</strong></h3> */}
							{/* </button> */}
						{/* </div>
					))}
				</ButtonUrl> */}
				{
					arrayText.map((sec, index) => (
						<TitleText isId={is === sec.id ? true : false} key={index}>
							<div className='title' >
								<h2>{sec.icon}</h2>
								<h2 onClick={() => handleClick(sec.id)} ><strong>{sec.title}</strong></h2>
								<h2 className='arrow'><TiArrowSortedDown /></h2>
							</div>
							<div className='sub-labels' onClick={() => handleRouter(sec.route)}>
								{sec.content.map((text, index) => (
									<h2 key={index}>{text.label}</h2>
								))}
							</div>
						</TitleText>
					))
				}
			</ContentBottom>
				<div className='divFooterSecundary'> <h1>Pocket Card - Todos los derechos reservados © {new Date().getFullYear()}</h1></div>
			<ContentSocial>
				<div className='line-whidth'></div>
				<div className='container-social'>
					{arrayIconRedSocial.map((sec, index) => (
						<RedSocial key={index}>
							<h2>{sec.icon}</h2>
						</RedSocial>
					))}
				</div>
				{
					arrayApps.map((sec, index) => (
					<ContainerApp key={index}>
						<h2>{sec.icon}</h2>
						<h3>{sec.label}</h3>
					</ContainerApp>
					))
				}
			</ContentSocial>
		</ContainerFooter>
	)
}

export default Footer