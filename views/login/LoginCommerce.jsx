import React from 'react'
import { ContainerLoginCommerce, Login } from './stylesIndexLogin';
import InputText from "../../components/Inputs/InputText/InputText";
import { FaLock } from "react-icons/fa";
import { MdOutlineBusiness } from 'react-icons/md'
import { useForm } from "react-hook-form";


const LoginCommerce = ({ onSubmitCommerce, setIsCommerce, isCommerce }) => {
    const { register, formState: { errors }, handleSubmit, } = useForm();

    const LogiCommerce = [
        {
            id: "emailcommerce",
            name: "Correo Electronico",
            color: true,
            type: "mail",
            img: <MdOutlineBusiness />,
            regis: "emailcommerce",
            error: errors.emailcommerce?.type === "required" && (
                <p>El campo Correo es requerido</p>
            ),
        },
        {
            id: "pass",
            name: "Password",
            color: true,
            type: "password",
            img: <FaLock />,
            regis: "password",
            eyetrue: true,
            error: errors.password?.type === "required" && (
                <p>El campo Password es requerido</p>
            ),
        },
    ];

    return (
        <ContainerLoginCommerce isCommerce={isCommerce}>
            <Login>
                <div className="container-title">
                    <h1>Iniciar Comercio</h1>
                </div>
                <form className="seccionLogin" onSubmit={handleSubmit(onSubmitCommerce)}>
                    {LogiCommerce.map((sec, index) => (
                        <div className="container">
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
                <p>¿Eres Cliente?</p>
            </div>
        </ContainerLoginCommerce>
    )
}

export default LoginCommerce