import React from "react";
import Router from "next/router";


const index = ({ data }) => {

    const onClicked = () => {
        Router.push('/maintenance')
    }

  return (
    <>
      {data.map((sec, index) => (
            <div key={sec.id}>
              <h2>
                {sec.id} {sec.title}
              </h2>
              <button onClick={() => onClicked()}>ir</button>
            </div>
        ))}
    </>
  );
};

export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error)
    Router.push('/maintenance')
  }
}

export default index;
