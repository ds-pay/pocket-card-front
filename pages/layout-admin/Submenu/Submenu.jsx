import React from 'react'
import { ContentCard, Card } from './StylesSubmenu'

const Submenu = ({array, section, handleClick}) => {
  return (
    <ContentCard>
      <div className="cardContent">
        {array.map((sec, index) => (
          <Card
            isSelection={section === sec.id ? true : false}
            className="card"
            onClick={() => handleClick(sec.id)}
          >
            <div className="curva-izquierda"></div>
            <div className="curva-derecha"></div>
            <div className="container-icon">{sec.icon}</div>
            <div className="container-label">{sec.Label}</div>
            <div></div>
          </Card>
        ))}
      </div>
    </ContentCard>
  );
}

export default Submenu