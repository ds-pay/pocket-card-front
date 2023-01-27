import React from 'react'
import { ContainerCardForm, Header, ContainImages } from './StyleEditConvenios'

const ViewEditConvenios = ({ array }) => {
  return (
    <ContainerCardForm>
      {array.map((sec, index) => (
        <>
          <Header>
            <div className="container-img">
              {sec.iconimages}
            </div>
            <div className="container-title">
              <h3>{sec.editimglabel}</h3>
            </div>
          </Header>
          <ContainImages>
            <div className="container-images">
              <div className="img">
                <img src={sec.img} alt="" />
                <h3>Imagen Principal</h3>
              </div>
              <div className="img">
                <img src={sec.img} alt="" />
                <h3>Imagen Logo</h3>
              </div>
            </div>
          </ContainImages>
          <Header>
            <div className="container-img">
              {sec.iconinfo}
            </div>
            <div className="container-title">
              <h3>{sec.editinfolabel}</h3>
            </div>
          </Header>
        </>
      ))}
    </ContainerCardForm>
  )
}

export default ViewEditConvenios