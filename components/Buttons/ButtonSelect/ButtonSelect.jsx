import React, { useState, useEffect, useRef } from 'react'
import { ContainerGeneral, TitleButton, ContainerButton, ContainerIcons, Icon, DropDownMenu, DropDownItem } from './StyleButtonSelect';
import { AiOutlineGlobal } from 'react-icons/ai';
import { BsFacebook, BsWhatsapp, BsInstagram, BsQuestionLg, BsArrowDownShort, BsArrowUpShort } from 'react-icons/bs';


const ButtonSelect = ({ selection, setSelection }) => {
    const [open, setOpen] = useState(false);

    const options = [
        {
            label: "Pagina Web",
            icon: <AiOutlineGlobal/>,
            id: "web",
        },
        {
            label: "Facebook",
            icon: <BsFacebook/>,
            id: "facebook",
        },
        {
            label: "Whatsapp",
            icon: <BsWhatsapp/>,
            id: "whatsapp",
        },
        {
            label: "Instagram",
            icon: <BsInstagram/>,
            id: "instagram",
        },
    ];

    const handleOpen = () => {
        setOpen(!open)
    };

    const handleSelect = (opt) => {
        setSelection(opt);
        setOpen(false);
    };

    let menuRef = useRef();

    useEffect(() => {
        let handler = (event) => {
            if (menuRef.current) {
                if (!menuRef.current.contains(event.target)) {
                    setOpen(false);
                }
            }
        };

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    });

    const dropdown = (
        <DropDownMenu>
            {options.map((opt, index) => (
                <DropDownItem onClick={() => handleSelect(opt)} key={index}>
                    <Icon>{opt.icon}</Icon>
                    <span>{opt.label}</span>
                </DropDownItem>
            ))}
        </DropDownMenu>
    );


    return (
        <ContainerGeneral>
            <ContainerButton onClick={handleOpen}>
                <ContainerIcons>
                    <Icon>{selection ? selection.icon : <BsQuestionLg/>}</Icon> 
                    <Icon>
                        {open ? <BsArrowUpShort /> : <BsArrowDownShort/>}
                    </Icon> 
                </ContainerIcons>
            </ContainerButton>
            {open && dropdown}
        </ContainerGeneral>
    )
}

export default ButtonSelect