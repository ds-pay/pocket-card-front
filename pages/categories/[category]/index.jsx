import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Category from '../../../views/View-Category/Category';

const index = ({ category }) => {
  
  const router = useRouter()
  const handleBack = () => {
    router.push(`/categories/`)
  }

  console.log(category)

  return (
    <>
      <Category data={category} clickAction={() => handleBack()}/>
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