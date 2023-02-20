import Head from 'next/head';
import Categories from '../../views/View-Categories/Categories'

const index = ({ category }) => {


  return (
    <>
      <Head><title>Categorias</title></Head>
      <Categories category={category}/>
    </>
  )
}

export async function getStaticProps() {
  const url = `${process.env.API_LOCAL}/api/categories`;
  const res = await fetch(url);
  const json = await res.json();
  return {
    props: {
      category: json.categories,
    }
  }
}

export default index