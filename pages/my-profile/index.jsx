import React from 'react';
import ViewProfile from '../../views/my-profile/ViewProfile';

const index = ({user, terms}) => {
  return (
    <ViewProfile data={user} dataTerms={terms}/>
  )
};

export async function getServerSideProps(){
  const urlUser = `${process.env.API_LOCAL}/api/user`
  const urlTerms = `${process.env.API_LOCAL}/api/terms`
  const resUSer = await fetch(urlUser);
  const resTerms = await fetch(urlTerms);
  const jsonUser = await resUSer.json();
  const jsonTerms = await resTerms.json();

  return {
    props:{
      user: jsonUser.user,
      terms: jsonTerms.terms
    }
  }
}

export default index;