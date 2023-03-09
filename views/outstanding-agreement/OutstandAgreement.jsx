import { useEffect, useRef, useState } from 'react';
import CardZoom from '../../components/Cards/CardZoom/CardZoom';
import { ContainerGeneral, ContainerCardsSlider, Arrows, Content } from './StyleOutstandAgreement';
import { AiFillHeart } from 'react-icons/ai';
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";
import ModalReusable from '../../components/Modal/ModalReusable';
import ButtonIcon from '../../components/Buttons/ButtonIcon/ButtonIcon';
import { BsFacebook, BsWhatsapp, BsTwitter, BsInstagram } from 'react-icons/bs';


const OutstandAgreement = ({data}) => {
  const [currentSlide, setCurrentSLide] = useState(0);
  const [stateModal, setStateModal] = useState(false);
  const [currentId, setCurrentId] = useState("");
  const slidershow = useRef(null);

  const Previus = () => {
    const index = currentSlide > 0 ? currentSlide - 1 : data.length - 1
    setCurrentSLide(index)
  };

  const Next = () => {
    const index = currentSlide < data.length - 1 ? currentSlide + 1 : 0
    setCurrentSLide(index)

  };

  const arrayRedSocial = [
    {
      id: "1323454",
      icon: <BsFacebook/>,
      label: "FACEBOOK",
      href: "https://m.facebook.com/sharer/sharer.php?u=www.mypocketvip.com.co",
    },
    {
      id: "25564356",
      icon: <BsWhatsapp/>,
      label: "WHATSAPP",
      href: "https://api.whatsapp.com/send?",
    },
    {
      id: "3657657",
      icon: <BsTwitter/>,
      label: "TWITTER",
      href: "",
    },
    {
      id: "45465474",
      icon: <BsInstagram/>,
      label: "INSTAGRAM",
      href: "",
    },
  ];

  const handleShare = (shareId) => {
    setStateModal(true)
    setCurrentId(shareId)
  };

  const arrws = () => {
    return (
      <Arrows>
        <div onClick={Previus}>{<HiOutlineArrowSmLeft />}</div>
        <div onClick={Next}>{<HiOutlineArrowSmRight />}</div>
      </Arrows>
    );
  };

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentSLide(currentSlide => currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    }, 4000)

    return () => clearInterval(sliderInterval)
  }, []);

  return (
    <ContainerGeneral>
      <h2><strong>Convenios Destacados</strong></h2>
      <div className='containerslider'>
        <ContainerCardsSlider ref={slidershow} style={{ transform: `translateX(${-currentSlide * 11.1}%)` }}>
          <CardZoom handleShare={handleShare} data={data && data} icon={<AiFillHeart/>}  />
        </ContainerCardsSlider>
      </div>
      {arrws()}
      {data.map((sec, index) => (
        sec.id === currentId 
        ?
          <ModalReusable
            isTitle={true}
            title={""}
            stateModal={stateModal}
            setStateModal={setStateModal}
          >
            <Content>
              <h1>{sec.title}</h1>
              <p>¿Donde Deseas compartirlo?</p>
              <div className="container-button">
                {arrayRedSocial.map((social, index) => (
                  <a href={social.href}>
                    <ButtonIcon key={index} icon={social.icon} text={social.label} func={() => handlecompartir(social.href, sec.title, social.id, social.label)} />
                  </a>
                  // handlecompartir(social.label, social.icon, sec.id)
                ))}
              </div>
            </Content>
          </ModalReusable>
        :
        null
      ))}
    </ContainerGeneral>
  )
}

export default OutstandAgreement