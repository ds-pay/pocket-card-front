import React from 'react'
import { Overlay, ModalContainer, HeaderModal } from './StylesModal'

const ModalReusable = () => {
  return (
    <>
        <Overlay>
            <ModalContainer>
                <HeaderModal>
                    <h1>Contenido</h1>
                </HeaderModal>
            </ModalContainer>
        </Overlay>
    </>
  )
}

export default ModalReusable