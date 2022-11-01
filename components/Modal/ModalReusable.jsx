import React from 'react'
import { Overlay, ModalContainer, ModalHeader, ModalClose } from './StylesModal'
import { FiX } from 'react-icons/fi'

const ModalReusable = ({
    children, 
    stateModal, 
    setStateModal,
    title,
    isTitle,
    isOverlay,
    modalPositionY,
    modalPositionX
}) => {
  return (
    <>
        {stateModal &&
            <Overlay modalPositionY={modalPositionY} modalPositionX={modalPositionX} isOverlay={isOverlay}>
                <ModalContainer>
                    {isTitle && 
                        <ModalHeader>
                            <h3>{title}</h3>
                        </ModalHeader>
                    }
                    <ModalClose onClick={() => setStateModal(!stateModal)}>
                        <FiX/>
                    </ModalClose>
                    {children}
                </ModalContainer>
            </Overlay>
        }
    </>
  )
}

export default ModalReusable