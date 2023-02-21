import React, { useEffect, useState } from "react";
import { IoIosRocket } from "react-icons/io";
import { ContianerNotifications, SeccionNotifications, ContentModal } from "./StyleDropDown";
import Modal from "../Modal/ModalReusable";

const DropDownNotifications = ({ handleBell, datanotifications }) => {
  const [stateModal, setStateModal] = useState(false);
  const [idSelected, setIdSelected] = useState("")
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/notifications")
      .then((response) => response.json())
      .then((data) => setNotifications(data.notifications))
      .catch((error) => console.error(error));
  }, []);

  const notiSelected = (event) => {
    setIdSelected(event)
    setStateModal(!stateModal)
  }

  return (
    <ContianerNotifications handleBell={handleBell}>
      {notifications?.map((sec, index) => (
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
                <IoIosRocket/>
                <p>{sec.time}</p>
              </div>
              <div>
                <p>{sec.issue}</p>
              </div>
            </div>
          </div>
        </SeccionNotifications>
      ))}

      {notifications?.map((sec, index) => (
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
