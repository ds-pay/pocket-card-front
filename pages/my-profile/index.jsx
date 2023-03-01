import React from 'react';
import ViewProfile from '../../views/my-profile/ViewProfile';

const index = ({user}) => {
  return (
    <ViewProfile data={user}/>
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