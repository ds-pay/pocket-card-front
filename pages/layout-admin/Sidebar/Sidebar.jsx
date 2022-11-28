import React, { useState } from 'react';
import { SidebarContainer, Content, Head, ButtonArrow} from './StylesSidebar';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { IoLogoPlaystation } from 'react-icons/io';
import { FaHome } from 'react-icons/fa';

const Sidebar = () => {
    const [isActivate, setIsActivate] = useState(false);

    const ContentSidebar = [
        {
            id: 'home',
            img: <FaHome />,
            label: 'Home' ,
            notifications: '',
        },
        {
            id: 'task',
            img: <FaHome />,
            label: 'Task' ,
            notifications: '5',
        },
        {
            id: 'activity',
            img: <FaHome />,
            label: 'Activity' ,
            notifications: '',
        },
        {
            id: 'user',
            img: <FaHome />,
            label: 'User' ,
            notifications: '',
        },
        {
            id: 'notifications',
            img: <FaHome />,
            label: 'Notifications' ,
            notifications: '15',
        },
    ]

  return (
    <SidebarContainer isActivate={isActivate}>
        <ButtonArrow isActivate={isActivate} onClick={() => setIsActivate(!isActivate)}>
            <MdKeyboardArrowLeft />
        </ButtonArrow>
        <Head isActivate={isActivate}>
            <div className='contain-logo'>
                <IoLogoPlaystation />
            </div>
            <div  className='contain-name'>
                Pocket Card
            </div>
        </Head>
        <Content>
            <p>Menu</p>
            {ContentSidebar.map((sec, index) => (
                <div className='container' key={index}>
                    <div className='contain-img'>{sec.img}</div>
                    <div className='contain-label'>{sec.label}</div>
                    <div className='contain-notifi'>{sec.notifications}</div>
                </div>
            ))}
        </Content>
        <Content>
            seccion 2
        </Content>
    </SidebarContainer>
  )
}

export default Sidebar