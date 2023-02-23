import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import { ContentBody, ContentPock, BodyHead, ActivationCard, ContainerCard, Card, BodyHeader } from './StylesHome';
import OutstandAgreement from '../outstanding-agreement/OutstandAgreement';


const Primary = ({ data }) => {

	const ArrayContent = [
		{
			id: "weboapp",
			title: "¡Web o App!",
			bground: "#69cdff",
			img: "/img/Icons/ordenador-personal.png",
			text: "Puedes Igresar desde esta pagina o en nuestra app Android"
		},
		{
			id: "iniciasesion",
			title: "¡Inicia Sesion!",
			bground: "#21c69b",
			img: "/img/Icons/avatar-de-usuario.png",
			text: "Inicia Sesión con tu numero de tarjeta Pocket Card, y la contraseña es tu numero de cedula"
		},
		{
			id: "formulario",
			title: "¡Formulario y Cuentas!",
			bground: "#ffce00",
			img: "/img/Icons/curriculum.png",
			text: "Diligencia el formulario actualizado tu informacion, y respondiendo una rapida encuesta"
		},
		{
			id: "terminos",
			title: "¡Terminos y Condiciones!",
			bground: "#b21f66",
			img: "/img/Icons/terminos-y-condiciones.png",
			text: "Lee y acepta los términos, condiciones y ley de proteccion de datos"
		}
	]

	return (
		<>
			<ContentBody>
				<BodyHeader>
					<div className="container-title">
						<h2><strong>Pocket Card</strong></h2>
					</div>
					<div className="container-title">
						<h2><strong>Un Mundo de Privilegios</strong></h2>
					</div>
					<div className="container-img">
						<img src="https://mypocketvip.net/api/uploads/images/icons/CajaMundo.svg" alt="boxpocket" />
					</div>
				</BodyHeader>

				<BodyHead>
					<h1>¿Que es Pocket Card?</h1>
					<p><strong>POCKET CARD</strong> !Fue creada con un solo propósito! Brindarte la Oportunidad de obtener <strong>DESCUENTOS</strong> en el ámbito comercial, al momento de hacer uso de servicios o realizar compras; accediendo así a distintos <strong>BENEFICIOS</strong> que no solo van dirigidos para ti sino también a tu <strong>ENTORNO FAMILIAR</strong>. Somos un gran equipo que trabaja Día a Día para brindarte el mejor servicio y así cumplir nuestro <strong>MAYOR PROPÓSITO</strong> brindarte <strong>GRANDES DESCUENTOS</strong></p>
				</BodyHead>

				<ActivationCard>
					<h2><strong>¿Como Activo mi Pocket Card?</strong></h2>
					<ContainerCard>
						{ArrayContent.map((sec, index) => (
							<Card key={index}>
								<div className='numberindex'>{parseInt(index) + 1}</div>
								<div style={{ backgroundColor: sec.bground }} className='img'>
									<img src={sec.img} alt="img" />
								</div>
								<h3>{sec.title}</h3>
								<p>{sec.text}</p>
							</Card>
						))}
					</ContainerCard>
				</ActivationCard>
				<OutstandAgreement data={data} />
			</ContentBody>
		</>
	)
}

export default Primary