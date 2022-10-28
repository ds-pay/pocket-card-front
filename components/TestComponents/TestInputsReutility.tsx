import React from 'react'
import InputText from '../Inputs/InputText/InputText'
import { ContainerTests } from './StylesTets'

const TestInputsReutility = () => {

    const ArrayInputsText = [
        {
            name: "Name",
            color: true,
            type: "text"
        },
        {
            name: "Lastname",
            color: true,
            type: "text"
        },
        {
            name: "Email",
            color: true,
            type: "email"
        },
        {
            name: "Password",
            color: true,
            type: "password"
        },
    ]


  return (
    <>
        <ContainerTests>
            {ArrayInputsText.map((sec, index) => (
                <div className='containe-inputs' key={index}>
                    <InputText name={sec.name} color={sec.color} type={sec.type} />
                </div>
            ))}
        </ContainerTests>
    </>
  )
}

export default TestInputsReutility