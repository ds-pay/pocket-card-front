import React from 'react'
import { ContainerFooter, RedSocial, ContentSocial, ButtonUrl, ContentBottom, ContainerApp } from './StylesFooter';
import { FaHeadset, FaNewspaper } from 'react-icons/fa';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { AiFillFacebook, AiFillInstagram, AiOutlineWhatsApp, AiFillAndroid, AiFillApple } from 'react-icons/ai'
import { FcHeadset, FcNews, FcInfo } from 'react-icons/fc'


const Footer = () => {
	const router = useRouter();
	const handleRouter = (route) => {
		router.push(route)
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
	]

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
			route: "/questions"
		}
	];

	return (
		<ContainerFooter>
			<ContentBottom>
				<ButtonUrl>
					{ArrayItems.map((sec, index) => (
						<div key={index} onClick={() => handleRouter(sec.route)} className={sec.className}>
							{/* <h1>{sec.label}</h1> */}
							{/* <button > */}
							<h2>{sec.icon}</h2>
							<h3><strong>{sec.labelbutton}</strong></h3>
							{/* </button> */}
						</div>
					))}
				</ButtonUrl>
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