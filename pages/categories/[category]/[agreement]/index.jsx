import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Agreement from '../../../../views/view-agreement/Agreement';

const index = ({ agreement, url }) => {
  const router = useRouter();

  const handleRouter = () => {
    router.push(url)
  }

  const [agr, setAgr] = useState(null);
  useEffect(() => {setAgr(agreement)}, [agreement]);
  return (
    <Agreement data={agreement} />
    // {agr?agr.title:"Loading..."}
  )
  return {

  }
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
      agreement: json.agreement,
      url
    }
  };
};

export default index

