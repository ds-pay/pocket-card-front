import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Category from '../../../views/View-Category/Category';

const index = ({ category, agreements }) => {
  
  const router = useRouter()
  const handleBack = () => {
    router.push(`/categories/`)
  }
  const data = {
    category,
    agreements
  }

  return (
      <Category data={data} clickAction={() => handleBack()}/>
  )
};

export async function getStaticPaths() {
  const url = `${process.env.API_LOCAL}/api/categories/`;
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
      category: json.category,
      agreements: json.agreements
    }
  }
}

export default index