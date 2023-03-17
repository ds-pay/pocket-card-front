import { useState, useEffect } from 'react';
import ButtonIcon from '../../components/Buttons/ButtonIcon/ButtonIcon';
import { ContainerGeneral, BodyHeader, MediumBody, CardCategory, Content } from './StyleCategory';
import { BiArrowBack } from 'react-icons/bi';
import { AiFillHeart } from 'react-icons/ai';
import { BsFacebook, BsWhatsapp, BsTwitter, BsInstagram } from 'react-icons/bs';
import { useRouter } from 'next/router';
import CardZoom from '../../components/Cards/CardZoom/CardZoom';
import ModalReusable from '../../components/Modal/ModalReusable';

const Category = ({ data, clickAction }) => {
  const { category, agreements } = data;
  const [titleCategory, setTitleCategory] = useState(category.label);
  const [imageCategory, setImageCategory] = useState(category.icon);
  const [idCategory, setIdCategory] = useState(category.id);
  const [agreementsCategory, serAgreementsCategory] = useState(agreements);
  const [stateModal, setStateModal] = useState(false);
  const [currentId, setCurrentId] = useState("");

  const router = useRouter()

  const handleViewAgreement = (idAgreement) => {
    router.push(`/categories/${idCategory}/${idAgreement}`)
  }

  useEffect(() => {
    console.log(data)
  },)

  const arrayRedSocial = [
    {
      id: "1323454",
      icon: <BsFacebook />,
      label: "FACEBOOK",
      href: "https://m.facebook.com/sharer/sharer.php?u=www.mypocketvip.com.co",
    },
    {
      id: "25564356",
      icon: <BsWhatsapp />,
      label: "WHATSAPP",
      href: "https://api.whatsapp.com/send?",
    },
    {
      id: "3657657",
      icon: <BsTwitter />,
      label: "TWITTER",
      href: "",
    },
    {
      id: "45465474",
      icon: <BsInstagram />,
      label: "INSTAGRAM",
      href: "",
    },
  ];

  const handleShare = (shareId) => {
    setStateModal(true)
    setCurrentId(shareId)
  };

  return (
    <ContainerGeneral>
      <BodyHeader>
        <div className="container-butonback">
          <ButtonIcon icon={<BiArrowBack />} func={clickAction} />
        </div>
        <div className="container-title1">
          <h2><strong>{titleCategory}</strong></h2>
        </div>
        <div className="container-img">
          <img src={`${imageCategory}`} alt={`img-${idCategory}`} />
        </div>
      </BodyHeader>

      <MediumBody>
        <CardZoom handleShare={handleShare} icon={<AiFillHeart />} data={agreementsCategory} />
        {agreementsCategory.map((sec, index) => (
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
      </MediumBody>
    </ContainerGeneral>
  )
}

export default Category