import React from 'react';
import ViewProfile from '../../views/my-profile/ViewProfile';

const index = ({user}) => {
  return (
    <ViewProfile data={user}/>
  )
};

export async function getServerSideProps(){
  const urlUser = `${process.env.API_LOCAL}/api/user`
  const resUSer = await fetch(urlUser);
  const json = await resUSer.json()

  return {
    props:{
      user: json.user
    }
  }
}

export default index;