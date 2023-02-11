import { useEffect, useState } from 'react'
import { ContainerGeneral, ContainerContent, Header, Body, Discount, Conditions, Coverage } from './StyleAgreement';
import { AiFillHeart } from 'react-icons/ai'

const Agreement = ({data, clickAction}) => {
  const [agr, setAgr] = useState(null);
  useEffect(() => { setAgr(data) }, [data]);
  return (
    <ContainerGeneral>
      {agr
        ? 
        <ContainerContent>
          <Header>
            <div className='container-header'>
              <img src={agr?.img} alt="" />
            </div>
            <div className='container-title'><h1>{agr?.title}</h1></div>
          </Header>
          <Body>
            <div className='container-heart-percent'>
              <h3><AiFillHeart /> Me gusta: {agr?.hearts}</h3>
              <h3>Porcentaje: {agr?.percent}</h3>
            </div>

            <div className='container-discount-condition'>
              <h1>Descuento - Condiciones - Cobertura</h1>
              {agr?.discounts.map((sec, index) => (
                <Discount key={index}>
                  <div className='contain-discount'>
                    <h3>Descuento {parseInt(index += 1)}:</h3>
                    <div className='text-discount'><p>{sec.discount}</p></div>
                  </div>
                </Discount>
              ))}
              <Conditions >
                <h3>Condiciones:</h3>
                <div className='text-condition'><p>{agr.condition}</p></div>
              </Conditions>
              <Coverage>
                <h3>Cobertura:</h3>
                <div className='text-coverage'><p>{agr.coverage}</p></div>
              </Coverage>
            </div>
          </Body>
        </ContainerContent>
        : 
        <div className='cotainer-loading'>
          <h1>LOADING...</h1>
        </div> 
      }
    </ContainerGeneral>
  )
}

export default Agreement