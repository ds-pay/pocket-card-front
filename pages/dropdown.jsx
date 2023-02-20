import React from 'react'
import DropDownNotifications from '../components/DropDown/DropDownNotifications';
import Navbar from '../components/Navbar/Navbar';

const dropdown = ({ notifications }) => {
  return (
    <Navbar datanotifications={notifications}/>   
  )
}


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

export default dropdown