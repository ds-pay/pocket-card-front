import News from "../../views/View-News/News"

const index = ({news}) => {

  return (
    <News data={news}/>
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