import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import { ContentBody, ContentPock, BodyHead, ActivationCard, ContainerCard, Card } from './StylesHome'


const Primary = () => {

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
				<ContentPock>
					<h1>Pocket Card</h1>

					<div className='privilagios'>
						<h1>Un Mundo de Privilegios</h1>
						<img
							className='boxpocket' src="https://mypocketvip.net/api/uploads/images/icons/CajaMundo.svg" alt="boxpocket" />
					</div>
				</ContentPock>

				<BodyHead>
					<h1>¿Que es Pocket Card?</h1>
					<p><b>POCKET CARD</b> !Fue creada con un solo propósito! Brindarte la Oportunidad de obtener <b>DESCUENTOS</b> en el ámbito comercial, al momento de hacer uso de servicios o realizar compras; accediendo así a distintos <b>BENEFICIOS</b> que no solo van dirigidos para ti sino también a tu <b>ENTORNO FAMILIAR</b>. Somos un gran equipo que trabaja Día a Día para brindarte el mejor servicio y así cumplir nuestro <b>MAYOR PROPÓSITO</b> brindarte <b>GRANDES DESCUENTOS</b></p>
				</BodyHead>

				<ActivationCard>
					<h1>¿Como Activo mi Pocket Card?</h1>
					<ContainerCard>
						{ArrayContent.map((sec, index) => (
							<Card>
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
			</ContentBody>
		</>
	)
}

export default Primary