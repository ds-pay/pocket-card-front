import React from 'react'
import Category from '../views/View-Category/Category'

const category = ({ category }) => {

  return (
    <>
      <Category category={category}/>
    </>
  )
}

export async function getStaticProps() {
  const url = `${process.env.API_LOCAL}/api/categorys/all`;
  const res = await fetch(url);
  const json = await res.json();
  console.log('hola mundo')
  return {
    props: {
      category: json.categorys,
    }
  }
}

export default category