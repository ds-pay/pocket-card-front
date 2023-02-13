import { ContainerGeneral, BodyHeader } from './StylesMyBonus';
import ButtonIcon from '../../components/Buttons/ButtonIcon/ButtonIcon';

const MyBonus = () => {

  const bonusArray = [
    {
      id: "1",
      img: "/public/img/image/bonus.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ipsum elit, tincidunt at maximus a, tincidunt in elit. Duis aliquet arcu nec risus efficitur gravida. Sed eget odio ex. Aliquam non massa sit amet elit molestie posuere. In gravida tincidunt ex, quis hendrerit magna volutpat et. Nam porta ullamcorper nunc sed iaculis. Proin hendrerit purus sit amet auctor maximus. Donec blandit rutrum vehicula. Maecenas ligula augue, consectetur a tristique sed, gravida vel libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      label: "Bono para viaje de 2x1",
    },
    {
      id: "2",
      img: "/public/img/image/bonus.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ipsum elit, tincidunt at maximus a, tincidunt in elit. Duis aliquet arcu nec risus efficitur gravida. Sed eget odio ex. Aliquam non massa sit amet elit molestie posuere. In gravida tincidunt ex, quis hendrerit magna volutpat et. Nam porta ullamcorper nunc sed iaculis. Proin hendrerit purus sit amet auctor maximus. Donec blandit rutrum vehicula. Maecenas ligula augue, consectetur a tristique sed, gravida vel libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      label: "Bono para viaje de 2x1",
    },
    {
      id: "3",
      img: "/public/img/image/bonus.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ipsum elit, tincidunt at maximus a, tincidunt in elit. Duis aliquet arcu nec risus efficitur gravida. Sed eget odio ex. Aliquam non massa sit amet elit molestie posuere. In gravida tincidunt ex, quis hendrerit magna volutpat et. Nam porta ullamcorper nunc sed iaculis. Proin hendrerit purus sit amet auctor maximus. Donec blandit rutrum vehicula. Maecenas ligula augue, consectetur a tristique sed, gravida vel libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      label: "Bono para viaje de 2x1",
    },
    {
      id: "4",
      img: "/public/img/image/bonus.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ipsum elit, tincidunt at maximus a, tincidunt in elit. Duis aliquet arcu nec risus efficitur gravida. Sed eget odio ex. Aliquam non massa sit amet elit molestie posuere. In gravida tincidunt ex, quis hendrerit magna volutpat et. Nam porta ullamcorper nunc sed iaculis. Proin hendrerit purus sit amet auctor maximus. Donec blandit rutrum vehicula. Maecenas ligula augue, consectetur a tristique sed, gravida vel libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      label: "Bono para viaje de 2x1",
    },
    
  ]

  return (
    <ContainerGeneral>
      <BodyHeader>
        {/* <div className="container-butonback">
          <ButtonIcon icon={<BiArrowBack />} func={clickAction} />
        </div> */}
        <div className="container-title">
          <h3>Mis Bonos</h3>
        </div>
        <div className="container-img">
          <img src={`img/Icons/gift-box.svg`} alt={`img-bonus`} />
        </div>
      </BodyHeader>
    </ContainerGeneral>
  )
}

export default MyBonus