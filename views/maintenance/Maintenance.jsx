import React from 'react'
import { Container, Content } from './StylesMaintenance'

const Maintenance = () => {

    const arrayStars = [
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
        {id: "star-1",class: "star-1"},
    ]

  return (
    <Container>
      <div className="container-star">
        {arrayStars.map((sec, index) => (
          <div key={index} className={sec.class}></div>
        ))}
      </div>
      <Content>
        <div className="title-content">
          <div className='title'>
            <div className="moon">
              <div className="face">
                <div className="band-1"></div>
                <div className="band-2"></div>
                <div className="astronaut">
                  <img src="img/image/Astronauta.png" alt="astro" />
                </div>
                <div className="eyes">
                  <div className="eye-left">
                    <div className="pupil"></div>
                  </div>
                  <div className="eye-right">
                    <div className="pupil"></div>
                  </div>
                </div>
                <div className="mouth"></div>
              </div>
            </div>
            <h1>ops!</h1>
          </div>
          <h2>Disculpanos, estamos en mantimiento por el momento.</h2>
          <button>Regresar</button>
        </div>
      </Content>
    </Container>
  );
}

export default Maintenance