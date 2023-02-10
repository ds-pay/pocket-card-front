import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const index = ({ agreement }) => {
  const router = useRouter();
  const [agr, setAgr] = useState(null);
  useEffect(() => {setAgr(agreement)}, [agreement]);
  return (
    <div>{agr?agr.title:"Loading..."}</div>
  )
}

export async function getStaticPaths() {
  const url = `${process.env.API_LOCAL}/api/agreements/`;
  const res = await fetch(url);
  const json = await res.json();

  const paths = await json.agreements.map(agreement => ({
    params: { category: agreement.category.id, agreement: agreement.id },
  }))
  return { paths, fallback: true };
};

export async function getStaticProps({ params }) {
  const { agreement } = params;
  const url = `${process.env.API_LOCAL}/api/agreements/${agreement}`;
  const res = await fetch(url);
  const json = await res.json();
  return {
    props: {
      agreement: json.agreement
    }
  };
}

export default index

