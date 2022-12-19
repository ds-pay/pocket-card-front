import React from 'react'
import { Container, TextArea } from './StylesInputTextArea'

const InputTextArea = ({ isBgNone, isBorderNone, regis, placeholder, name, id, cols, rows }) => {


  return (
    <Container>
      <TextArea
        {...regis}
        isBgNone={isBgNone}
        isBorderNone={isBorderNone}
        placeholder={placeholder}
        name={name}
        id={id}
        cols={cols}
        rows={rows}
      >

      </TextArea>
    </Container>
  );
}

export default InputTextArea