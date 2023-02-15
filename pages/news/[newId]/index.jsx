
const index = ({ notice }) => {
  return (
    <div>
      <h1>{notice.label}</h1>
    </div>
  )
}

export async function getStaticPaths() {
  const url = `${process.env.API_LOCAL}/api/news`;
  const res = await fetch(url);
  const json = await res.json()
  const paths = await json.news.map((notice) => ({
    params: { newId: notice.id}
  }))

  return { paths, fallback:false }
};

export async function getStaticProps({ params }) {
  const { newId } = params;
  const url = `${process.env.API_LOCAL}/api/news/${newId}`;
  const res = await fetch(url);
  const json = await res.json()
  console.log(json)

  return {
    props:{
      notice: json.newFound
    }
  }
}



export default index