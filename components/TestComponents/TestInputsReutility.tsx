import React from 'react'
import InputText from '../Inputs/InputText/InputText'
import { ContainerTests } from './StylesTets'
import InputDate from '../Inputs/InputDate/InputDate'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'


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
            <div className='input-text'>
                {ArrayInputsText.map((sec, index) => (
                    <div className='containe-input-text' key={index}>
                        <InputText name={sec.name} color={sec.color} type={sec.type} />
                    </div>
                ))}
            </div>

            <div className='input-date'>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <InputDate/>
                </MuiPickersUtilsProvider>
            </div>
        </ContainerTests>

    </>
  )
}

export default TestInputsReutility