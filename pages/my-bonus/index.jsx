import MyBonus from "../../views/view-my-bonus/MyBonus"

const index = ({ bonds }) => {
  return (
    <MyBonus data={bonds} />
  );
};

export async function getStaticProps() {
  const url = `${process.env.API_LOCAL}/api/bonds`;
  const res = await fetch(url);
  const json = await res.json();

  return {
    props:{
      bonds: json.bonus
    }
  }
}

export default index