import { CardDate } from './StyleMyProfile'
import { MdPets, MdOutlineSecurity } from 'react-icons/md';
import { FaGlassCheers } from 'react-icons/fa';
import { BiBook } from 'react-icons/bi';
import { HiOutlineHome } from 'react-icons/hi';
import { FiShoppingBag } from 'react-icons/fi';
import { RiBusFill } from 'react-icons/ri';
import { TbPlaneDeparture } from 'react-icons/tb';
import { RiShieldCrossLine } from 'react-icons/ri'
import ButtonIcon from '../../Buttons/ButtonIcon/ButtonIcon';
import { useRouter } from 'next/router';

const Favorites = ({ data, currentId }) => {
  const router = useRouter()
  const categoryArray = [
    {
      icon: <RiShieldCrossLine />,
      category: "Bienestar"
    },
    {
      icon: <FaGlassCheers />,
      category: "Diversion"
    },
    {
      icon: <BiBook />,
      category: "Estudiar"
    },
    {
      icon: <HiOutlineHome />,
      category: "Hogar"
    },
    {
      icon: <MdPets />,
      category: "Mascotas"
    },
    {
      icon: <MdOutlineSecurity />,
      category: "Seguridad"
    },
    {
      icon: <FiShoppingBag />,
      category: "Shopping"
    },
    {
      icon: <RiBusFill />,
      category: "Transporte"
    },
    {
      icon: <TbPlaneDeparture />,
      category: "Viajar"
    },
  ];

  const handleClick = (category, categoryId) => {
    router.push(`http://localhost:3000/categories/${category.toLowerCase()}/${categoryId}`)
  }

  const favorites = (arrayfavorites, category) => {
    return (
      arrayfavorites.map((favorite) => (
        category === favorite.category
          ?
          <CardDate>
            <div className='title'><h2><strong>{favorite.title}</strong></h2></div>
            <div className="content"><h2><ButtonIcon func={() => handleClick(favorite.category, favorite.id)} text={"Ver el convenio"}/></h2></div>
          </CardDate>
          : null
      ))
    )
  };

  return (
    data
      ?
      data.map((user) => (
        user.id === currentId
        ?
        <>
          <div className="container-cards">
            {favorites(user.favorites, "Bienestar")}
            {favorites(user.favorites, "Diversion")}
            {favorites(user.favorites, "Estudiar")}
            {favorites(user.favorites, "Hogar")}
            {favorites(user.favorites, "Mascotas")}
            {favorites(user.favorites, "Seguridad")}
            {favorites(user.favorites, "Shopping")}
            {favorites(user.favorites, "Transporte")}
            {favorites(user.favorites, "Viajar")}
          </div>
        </>
       :null       
      ))
      : <h1>Loading...</h1>
  )
}

export default Favorites