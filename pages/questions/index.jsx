import Head from "next/head";
import Questions from "../../views/view-quiestion/Questions"


const index = ({ questions }) => {
  return (
    <>
      <Head><title>Preguntas Frecuentes</title></Head>
      <Questions data={questions} />
    </>
  )
}

export async function getStaticProps(ctx) {
  const url = `${process.env.API_LOCAL}/api/questions`;
  const res = await fetch(url);
  const json = await res.json()

  return {
    props:{
      questions: json.questions
    }
  }
}

export default index

