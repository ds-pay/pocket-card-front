import React, { useState } from 'react'
import { useRouter } from 'next/router';

const index = ({ category }) => {
  const [dataTitle, setDataTitle ] = useState(category.label)
  
  const router = useRouter()
  const handleBack = () => {
    router.push(`/categories/`)
  }

  return (
    <>
      <p onClick={() => handleBack()}>regresar</p>
      <h1>{dataTitle}</h1>
    </>
  )
};

export async function getStaticPaths() {
  const url = `${process.env.API_LOCAL}/api/categories/all`;
  const res = await fetch(url);
  const json = await res.json();

  const paths = await json.categories.map((category) => ({
    params: { category: category.id},
  }))

  return { paths, fallback: true };
}

export async function getStaticProps({ params }){
  const { category } = params;
  const url = `${process.env.API_LOCAL}/api/categories/${category}`;
  const res = await fetch(url);
  const json = await res.json();
  return {
    props: {
      category: json.category
    }
  }
}

export default index