import Head from "next/head"
import Notices from "../../views/view-notices/Notices"

const index = ({news}) => {

  return (
    <>
      <Head><title>Noticias</title></Head>
      <Notices data={news}/>
    </>
  )
}

export async function getStaticProps() {
  const url = `${process.env.API_LOCAL}/api/news/`
  const res = await fetch(url)
  const json = await res.json()

  return {
    props:{
      news: json.news
    }
  }
}

export default index