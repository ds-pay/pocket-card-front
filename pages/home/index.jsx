import Head from 'next/head'
import React from 'react'
import Home from '../../views/view-home/Home'

const primary = ({ outstandagreement }) => {
  return (
    <>
      <Head>
        <title>Inicio</title>
      </Head>
      <Home data={outstandagreement}/>
    </>
  )
}

export async function getStaticProps() {
  const url = `${process.env.API_LOCAL}/api/outstandagreement`;
  const res = await fetch(url);
  const json = await res.json()
  
  return {
    props:{
      outstandagreement: json.outstandagreement
    }
  }
}

export default primary