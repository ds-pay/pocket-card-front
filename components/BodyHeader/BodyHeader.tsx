import { Header } from './StylesBodyHeader';
import { dataHeader } from './interface'

const BodyHeader = ({ title, img, alt, icon }: dataHeader) => {
  return (
    <Header>
      <div className="container-title2">
        <h2><strong>{title}</strong></h2>
        <h2>{icon && icon}</h2>
      </div>
      <div className="container-img">
        <img src={img} alt={alt} />
      </div>
    </Header>
  )
}

export default BodyHeader