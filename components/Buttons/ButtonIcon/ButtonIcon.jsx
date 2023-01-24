import React from 'react'
import { ButtonContainer, IconButton, TextButton } from './StylesButtons'


const ButtonIcon = ({ text, icon, func, background, height, width, onlyView=false}) => {
  return (
    <ButtonContainer onClick={func} background={background} height={height} width={width} onlyView={onlyView}>
      {icon && <IconButton>{icon}</IconButton>}
      {text && <TextButton>{text}</TextButton>}
    </ButtonContainer>
  )
}

export default ButtonIcon