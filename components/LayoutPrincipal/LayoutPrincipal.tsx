import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { Content } from "./StylesLayout"

const LayoutPrincipal = ({children}: any) => {
  return (
    <>
      <Navbar />
      <Content>
        {children}
      </Content>
      <Footer />
    </>
  )
}

export default LayoutPrincipal