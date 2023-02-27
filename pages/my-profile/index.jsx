import React from 'react';
import MyProfile from '../../views/my-profile/MyProfile';

const index = ({user}) => {
  return (
    <MyProfile data={user}/>
  )
};

export async function getServerSideProps(){
  const url = `${process.env.API_LOCAL}/api/user`
  const res = await fetch(url);
  const json = await res.json()

  return {
    props:{
      user: json.user
    }
  }
}

export default index;