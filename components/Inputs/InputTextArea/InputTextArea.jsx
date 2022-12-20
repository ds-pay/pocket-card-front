import React from 'react'
import { Container, TextArea } from './StylesInputTextArea'

const InputTextArea = ({ data, label, isBgNone, isBorderNone, regis, placeholder, name, id, cols, rows, onChange, onBlur, value, type, disabled }) => {

  // const { label, id, type, value, onChange, onBlur } = data

  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <TextArea
        {...regis}
        isBgNone={isBgNone}
        isBorderNone={isBorderNone}
        placeholder={label}
        name={name}
        id={id}
        cols={cols}
        rows={rows}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        type={type}
        disabled={disabled}
      >

      </TextArea>
    </Container>
  );
}

export default InputTextArea