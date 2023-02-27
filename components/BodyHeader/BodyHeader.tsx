import { Header } from './StylesBodyHeader';
import { dataHeader } from './interface'

const BodyHeader = ({ title, img, alt }: dataHeader) => {
  return (
    <Header>
      <div className="container-title">
        <h2><strong>{title}</strong></h2>
      </div>
      <div className="container-img">
        <img src={img} alt={alt} />
      </div>
    </Header>
  )
}

export default BodyHeader