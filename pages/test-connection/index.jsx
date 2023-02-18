import { useRouter } from "next/router";
import { useEffect } from "react";

const index = ({ json, error }) => {
  const router = useRouter();
  let redireccion
  useEffect(() => {
    if (error) {
      redireccion = router.push("/maintenance");
    } else {
      redireccion = router.push("/layout-admin");
    }
  }, [error]);

  return redireccion
};

export async function getStaticProps() {
  let response;
  try {
    const timeoutId = setTimeout(() => {
      throw new Error("Tiempo excedido");
    }, 5000);
    response = await fetch("http://localhost:3001/api/hello");

    clearTimeout(timeoutId);
  } catch (error) {
    if (error.message === "Tiempo excedido") {
      return {
        props: {
          error: "Error de conexión con la API",
        },
      };
    } else {
      throw error;
    }
  }

  const json = await response.json();
  return {
    props: {
      json,
    },
  };
}

export default index;
