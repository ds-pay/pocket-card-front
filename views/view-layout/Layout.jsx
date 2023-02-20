import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer'

const layout = ({ children, notifications }) => {
  return (
    <>
      <Navbar datanotifications={notifications} />
      {children}
      <Footer />
    </>
  )
};


export async function getStaticProps() {
  const url = `${process.env.API_LOCAL}/api/notifications`;
  const res = await fetch(url);
  const json = await res.json();

  return {
    props: {
      notifications: json.notifications
    }
  }
}

export default layout