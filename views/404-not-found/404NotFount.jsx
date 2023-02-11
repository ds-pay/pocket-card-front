import React from 'react'
import { Container } from './Styles404NotFound'

const NotFount = () => {

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
      <div className="bird bird-anim">
        <div className="bird-container">
          <div className="wing wing-left">
            <div className="wing-left-top"></div>
          </div>
          <div className="wing wing-right">
            <div className="wing-right-top"></div>
          </div>
        </div>
      </div>
      <div className="container-title">
        <div className="title">
          <div className="number">
            <h1>4</h1>
          </div>
          <div className="moon">
            <div className="face">
              <div className="eyes">
                <div className="eye-left"></div>
                <div className="eye-right"></div>
              </div>
              <div className="mouth"></div>
            </div>
          </div>
          <div className="number">
            <h1>4</h1>
          </div>
        </div>
        <div className="subtitle">
          <p>Ups, parece que tomaste un giro equivocado.</p>
          <button>Regresar</button>
        </div>
        <div className='box-astronaut'>
            <img src="http://salehriaz.com/404Page/img/astronaut.svg" width={"140px"} alt="" />
      </div>
      </div>

    </Container>
  );
}

export default NotFount