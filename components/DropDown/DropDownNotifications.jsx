import React from 'react'
import { IoIosRocket } from 'react-icons/io'
import { ContianerNotifications, SeccionNotifications } from './StyleDropDown'

const DropDownNotifications = ({ handleBell }) => {

    const Notifications = [
        {
          title: "Promoción de zapatos",
          img: "/img/image/promocionKoaj.jpg",
          alt: "promocionKoaj",
          discount: "50%" ,
          label: "50%",
          time: "Hace un mes",
          conditions: "terminos y condiciones", 
          rocket: <IoIosRocket/>,
          issue: "Vence: 12/12/2022",
        },
        {
          title: "Promoción de zapatos",
          img: "/img/image/promocionKoaj.jpg",
          alt: "promocionKoaj",
          discount: "50%" ,
          label: "50%",
          time: "Hace un mes",
          conditions: "terminos y condiciones", 
          rocket: <IoIosRocket/>,
          issue: "Vence: 12/12/2022",
        },
                {
          title: "Promoción de zapatos",
          img: "/img/image/promocionKoaj.jpg",
          alt: "promocionKoaj",
          discount: "50%" ,
          label: "50%",
          time: "Hace un mes",
          conditions: "terminos y condiciones", 
          rocket: <IoIosRocket/>,
          issue: "Vence: 12/12/2022",
        }
    ]

  return (
    <ContianerNotifications handleBell={handleBell}>
        {Notifications.map((sec, index) => (
            <SeccionNotifications key={index}>
                <div className='ContainerImg'>
                  <img src={sec.img} alt={sec.alt} />
                </div>
                <div>
                  <h1>{sec.title}</h1>
                  <h1>{sec.discount}</h1>
                  <p>{sec.conditions}</p>
                  <div className='ContainerTime'>
                      <div>
                          {sec.rocket}
                          <p>{sec.time}</p>
                      </div>
                      <div>
                          <p>{sec.issue}</p>
                      </div>
                  </div>
                </div>
            </SeccionNotifications>
        ))}
    </ContianerNotifications>
  )
}

export default DropDownNotifications