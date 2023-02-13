import { ContainerGeneral, BodyHeader, ContainerBonus, CardBonus, ContentModal } from './StylesMyBonus';
import ButtonIcon from '../../components/Buttons/ButtonIcon/ButtonIcon';
import Modal from '../../components/Modal/ModalReusable'
import { useState } from 'react';
import { useRouter } from 'next/router';

const MyBonus = ({data}) => {
  const [stateModal, setStateModal] = useState(false);
  const [idSelected, setIdSelected] = useState("");

  const router = useRouter();
  const handleViewBond = (boundId) => {
    router.push(`/my-bonus/${boundId}`)
  }

  // const handleSelected = (id) => {
  //   setIdSelected(id)
  //   setStateModal(!stateModal)
  // }


  return (
    <ContainerGeneral>
      <BodyHeader>
        <div className="container-title">
          <h3>Mis Bonos</h3>
        </div>
        <div className="container-img">
          <img src={`img/Icons/gift-box.svg`} alt={`img-bonus`} />
        </div>
      </BodyHeader>
      <ContainerBonus>
        {data.map((sec, index) => (
          <CardBonus key={index}>
            <div className='container-img'>
              <img src={sec.img} alt={"bonus"} />
            </div>
            <div className='container-button'>
              <div className='button'>
                <ButtonIcon func={() => handleViewBond(sec.id)} text={"Ver Detalles"} />
              </div>
            </div>
          </CardBonus>
        ))}
      </ContainerBonus>
    </ContainerGeneral>
  )
}

export default MyBonus