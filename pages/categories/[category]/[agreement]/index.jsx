import React from 'react'

const index = ({ agreement }) => {

  return (
    <div>{agreement.title}</div>
  )
}

export async function getStaticPaths() {
  const url = `${process.env.API_LOCAL}/api/categories/all`;
  const res = await fetch(url);
  const json = await res.json();

  
  const paths = await json.categories.map((category) => (
    category.agreements.map((agreement) => ({
      params: { agreement: agreement.id, category: category.id },
    }))
  ))

  return { paths, fallback: true };
};

export async function getStaticProps({ params }) {
  const { category, agreement } = params;
  const url = `${process.env.API_LOCAL}/api/categories/${category}`;
  const res = await fetch(url);
  const json = await res.json();
  console.log(json)
  // return {
  //   props:{
  //     agreement: json.agreement
  //   }
  // };
}

export default index

