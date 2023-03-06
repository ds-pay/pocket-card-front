import React, { useEffect, useState } from "react";
import { SidebarContainer, Content, Head, ButtonArrow, ContainerSeccion } from "./StylesSidebar";
import { IoLogoPlaystation } from "react-icons/io";
import { MdKeyboardArrowLeft } from "react-icons/md";

const Sidebar = ({img, title, nameMenu, isSelected, setIsSelected, ContentMenu }) => {
  const [isActivate, setIsActivate] = useState(true);

  const handleClick = (id) => {
    setIsSelected(id);
  };

  return (
    <SidebarContainer isActivate={isActivate}>
      <ButtonArrow
        isActivate={isActivate}
        onClick={() => setIsActivate(!isActivate)}
      >
        <MdKeyboardArrowLeft />
      </ButtonArrow>
      <Head isActivate={isActivate}>
        <div className="content">
          <div className="contain-logo">
            {img ? <img src={img} alt="img" /> : <IoLogoPlaystation size={30} />}
          </div>
          <div className="contain-name">{title ? title : null}</div>
        </div>
      </Head>
      <Content isActivate={isActivate}>
        <p className="title">{nameMenu ? nameMenu : "Menu"}</p>
        {
          ContentMenu &&
          ContentMenu.map((sec, index) => (
            <ContainerSeccion
              isActivate={isActivate}
              key={index}
              isSelected={isSelected === sec.id ? true : false}
              onClick={() => handleClick(sec.id)}
            >
              <div leftIsTrue={true} className="contain-img">
                {sec.img}
              </div>
              <div leftIsTrue={true} className="contain-label">
                <h3>{sec.label}</h3>
              </div>
              {sec.notifyBolean && (
                <div leftIsTrue={false} className="contain-notifi">
                  <h3>{sec.notifications}</h3>
                </div>
              )}
            </ContainerSeccion>
          ))}
      </Content>
    </SidebarContainer>
  );
};

export default Sidebar;
