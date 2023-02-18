import React, { useState } from "react";
import { IoIosRocket } from "react-icons/io";
import { ContianerNotifications, SeccionNotifications, ContentModal } from "./StyleDropDown";
import Modal from "../Modal/ModalReusable";

const DropDownNotifications = ({ handleBell }) => {
  const [stateModal, setStateModal] = useState(false);
  const [idSelected, setIdSelected] = useState("")

  const notiSelected = (event) => {
    setIdSelected(event)
    setStateModal(!stateModal)
  }

  const Notifications = [
    {
      id: "notificcaion-1",
      title: "Promoción de Zapatos",
      img: "/img/image/notifications/promocionzapatos.jpg",
      alt: "promocionzapatos",
      discount: "50%",
      label: "50",
      time: "Hace 13 dias",
      conditions: "terminos y condiciones",
      rocket: <IoIosRocket />,
      issue: "Vence: 12/12/2022",
      paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ducimus non reiciendis corporis voluptatum laudantium tempore, cum dolor atque quidem repellat minima rerum, aspernatur velit ullam sunt? Doloribus, tenetur accusamus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ducimus non reiciendis corporis voluptatum laudantium tempore, cum dolor atque quidem repellat minima rerum, aspernatur velit ullam sunt? Doloribus, tenetur accusamus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ducimus non reiciendis corporis voluptatum laudantium tempore, cum dolor atque quidem repellat minima rerum, aspernatur velit ullam sunt? Doloribus, tenetur accusamus."
    },
    {
      id: "notificcaion-2",
      title: "Promoción de Colchones",
      img: "/img/image/notifications/promocionColchones.jpg",
      alt: "promocionColchones",
      discount: "20%",
      label: "20%",
      time: "Hace un mes",
      conditions: "terminos y condiciones",
      rocket: <IoIosRocket />,
      issue: "Vence: 12/12/2022",
      paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ducimus non reiciendis corporis voluptatum laudantium tempore, cum dolor atque quidem repellat minima rerum, aspernatur velit ullam sunt? Doloribus, tenetur accusamus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ducimus non reiciendis corporis voluptatum laudantium tempore, cum dolor atque quidem repellat minima rerum, aspernatur velit ullam sunt? Doloribus, tenetur accusamus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ducimus non reiciendis corporis voluptatum laudantium tempore, cum dolor atque quidem repellat minima rerum, aspernatur velit ullam sunt? Doloribus, tenetur accusamus."
    },
    {
      id: "notificcaion-3",
      title: "Promoción de ropa KOAJ",
      img: "/img/image/notifications/promocionKoaj.jpg",
      alt: "promocionKoaj",
      discount: "15%",
      label: "15%",
      time: "Hace un año",
      conditions: "terminos y condiciones",
      rocket: <IoIosRocket />,
      issue: "Vence: 12/12/2022",
      paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ducimus non reiciendis corporis voluptatum laudantium tempore, cum dolor atque quidem repellat minima rerum, aspernatur velit ullam sunt? Doloribus, tenetur accusamus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ducimus non reiciendis corporis voluptatum laudantium tempore, cum dolor atque quidem repellat minima rerum, aspernatur velit ullam sunt? Doloribus, tenetur accusamus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ducimus non reiciendis corporis voluptatum laudantium tempore, cum dolor atque quidem repellat minima rerum, aspernatur velit ullam sunt? Doloribus, tenetur accusamus."
    },
  ];

  return (
    <ContianerNotifications handleBell={handleBell}>
      {Notifications.map((sec, index) => (
        <SeccionNotifications
          onClick={() => notiSelected(sec.id)}
          handleBell={handleBell}
          key={index}
        >
          <div className="ContainerImg">
            <img src={sec.img} alt={sec.alt} />
          </div>
          <div className="ContainerPromo">
            <h1>{sec.title}</h1>
            <h1>{sec.discount}</h1>
            <p>{sec.conditions}</p>
            <div className="ContainerTime">
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

      {Notifications.map((sec, index) => (
        <div key={index}>
          {sec.id == idSelected ? (
            <Modal stateModal={stateModal} setStateModal={setStateModal}>
              <ContentModal>
                <div className="ContainerImg">
                  <img src={sec.img} alt={sec.alt} />
                </div>
                <div className="ContainerPromo">
                  <div className="ContainerTitle">
                    <h1>{sec.title}</h1>
                    <h1>{sec.discount}</h1>
                  </div>
                  <div className="ContainerTime">
                    <div move={false}>
                      <p>{sec.conditions}</p>
                      <p>{sec.issue}</p>
                      <p>{sec.time}</p>
                    </div>
                  </div>
                  <div className="ContainerParagraph">
                    <p>
                      {sec.paragraph}
                    </p>
                  </div>
                </div>
              </ContentModal>
            </Modal>
          ) : (
            ""
          )}
        </div>
      ))}
    </ContianerNotifications>
  );
};

export default DropDownNotifications;
