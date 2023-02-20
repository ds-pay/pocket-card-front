import Head from 'next/head'
import React from 'react'
import Home from '../views/view-home/Home'

const primary = () => {
  return (
    <>
      <Head>
        <title>Inicio</title>
      </Head>
      <Home />
    </>
  )
}

export default primary