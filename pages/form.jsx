import React from 'react'
// import Navbar from '../components/Navbar/Navbar'
// import ReactHookForm from '../views/reactHookForm/ReactHookForm'
import Bond from '../views/view-my-bonus/Bond'
import Bond2 from '../views/view-bond/Bond2'

const Form = () => {

  const Array = [
    {
      id: "876",
      img: "img/image/bonus.jpg"
    },
    {
      id: "876",
      img: "img/image/bonus.jpg"
    },
    {
      id: "876",
      img: "img/image/bonus.jpg"
    },
    {
      id: "876",
      img: "img/image/bonus.jpg"
    },
  ]

  return (
    <>
      <Bond data={Array}/>
      <Bond2 data={Array}/>
    </>
  )
}

export default Form