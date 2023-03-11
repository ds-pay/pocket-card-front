import React from 'react'
import { ContainerLoginClient, Login } from './stylesIndexLogin';
import InputText from "../../components/Inputs/InputText/InputText";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useForm } from "react-hook-form";


const LoginClient = ({ onSubmitClient, setIsCommerce, isCommerce }) => {
	const { register, formState: { errors }, handleSubmit, } = useForm();


	const LoginClient = [
		{
			id: "idpocket",
			name: "ID Pocket Card",
			color: true,
			type: "text",
			img: <FaUserAlt />,
			regis: "idpocket",
			error: errors.idpocket?.type === "required" && (
				<p>El campo ID Pocket Card es requerido</p>
			),
		},
		{
			id: "passwordpock",
			name: "Password",
			color: true,
			type: "password",
			img: <FaLock />,
			regis: "passwordpock",
			eyetrue: true,
			error: errors.passwordpock?.type === "required" && (
				<p>El campo Password es requerido</p>
			),
		},
	];

	return (
		<ContainerLoginClient isCommerce={isCommerce}>
			<Login>
				<div className="container-title">
					<h1>Iniciar Cliente</h1>
				</div>
				<form className="seccionLogin" onSubmit={handleSubmit(onSubmitClient)}>
					{LoginClient.map((sec, index) => (
						<div key={index} className="container">
							<div className="container-img">{sec.img}</div>
							<div className="container-text">
								<InputText
									name={sec.name}
									color={sec.color}
									type={sec.type}
									regis={{
										...register(sec.regis, {
											required: true,
										}),
									}}
									eyetrue={sec.eyetrue}
								/>
								{sec.error}
							</div>
						</div>
					))}
					<div className="container-button">
						<input type="submit" value="Login" />
					</div>
				</form>
			</Login>
			<div
				className="boton-switch"
				onClick={() => setIsCommerce(!isCommerce)}
			>
				<p>¿Eres Comercio?</p>
			</div>
		</ContainerLoginClient>
	)
}

export default LoginClient