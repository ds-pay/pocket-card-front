import { useRouter } from "next/router";
import Bond from '../../../views/view-my-bonus/Bond';

const index = ({ bond }) => {
  const router = useRouter();
  const handleViewBond = () => {
    router.push(`/my-bonus`)
  }
  
  return (
    <>
      <Bond data={bond} clickBack={()=>handleViewBond()}/>
    </>
  );
};

export async function getStaticPaths() {
  const url = `${process.env.API_LOCAL}/api/bonds`;
  const res = await fetch(url);
  const json = await res.json();
  const paths = await json.bonus.map((bond) => ({
    params: { bond: bond.id }
  }));

  return { paths, fallback:false }
}

export async function getStaticProps({ params }) {
  const { bond } = params;
  const url = `${process.env.API_LOCAL}/api/bonds/${bond}`;
  const res = await fetch(url);
  const json = await res.json();
  return {
    props:{
      bond: json.bondFound
    }
  };
};

export default index