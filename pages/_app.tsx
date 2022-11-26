import React, { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { createTheme, getDocumentTheme, NextUIProvider } from "@nextui-org/react";
import '../styles/globals.css';
import Navbar from '../components/Navbar/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState(false);
  
  const darkTheme = createTheme({
    type: 'dark',
    theme: {
      colors: {
        //background de los iconos del narvbar
        bgIconPrimary: "#5b5d61",
        //background de los iconos del narvbar glass
        bgPrimaryGlass: "rgba( 72, 74, 77, 0.85 )",
        //background card ya vistas
        bgSecondGlass: "rgba( 152, 148, 187, 0.80 )",

        bgThridGlass: "#989a9d",

        bgLoginCardAnimation: "#2b2b2b",
        bgCardLogin: "#3c3e41",
        //Sombreado del narvbar y cards notifications
        boxShadowPrimary: "0 8px 32px 0 rgba( 218, 220, 225, 0.10 )",
        // tono claro de letra - icon
        textColor:"#dadce1",
          // tono oscuro de letra
        textColorDark:"#dadce1",
        // tono morado de letra
        textColorPurple:"#dadce1",
        // fondoNavbar
        backgroundNavbar: "#242526",
        //Hover del item en el navbar
        bghoverItemNavbar:"#525357",
        // fondo
        background: "#0e0f0f",

        bgPrimary: "#242526",
        bgSecondary: "#383839",
        bgInput:"#484a4d",
        borderInput:"1px solid #dadce1",
        textColorGreen: "#388e3c",
        textColorGray: "#dadce1",
        bgThridGlassGray:"#989a9d",
      },
    },
  });
  
  const lightTheme = createTheme({
    type: 'light',
    theme: {
      colors: {
        //background de los iconos del narvbar
        bgIconPrimary: "#9894BB",
        //background de los iconos del narvbar glass
        bgPrimaryGlass: "rgba( 152, 148, 187, 0.95 )",
        //background card ya vistas
        bgSecondGlass: "rgba( 152, 148, 187, 0.70 )",

        bgThridGlass: "#b4abf5",
        bgCardLogin: "#5a51a0",

        bgLoginCardAnimation: "#362b80",
        textColorCardAnimate: "#e6e6e6",
        //Sombreado del narvbar y cards notifications
        boxShadowPrimary: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        // tono oscuro de letra
        textColorDark:"#000000",
        // tono morado de letra
        textColorPurple:"#3D366F",
        // fondoNavbar
        backgroundNavbar: "#3d366f",
        //Hover del item en el navbar
        bghoverItemNavbar:"#f4f2f2",
        // fondo
        background: "#ececec",
        borderInput:"1px solid #c0c0c0",
        bgPrimary: "#4c52ad",
        bgSecondary: "#8286e2",
        bgInput:"#fff",
        textColor:"#fafafa",
        textColorGreen: "#388e3c",
        textColorGray: "#c0c0c0",
        bgThridGlassGray: "#989a9d",
      },
    },
  });

  useEffect(() => {
    let theme = window.localStorage.getItem('data-theme');
    setIsDark(isDark ? theme === 'dark' : theme === 'light');

    const observer = new MutationObserver((mutation) => {
      let newTheme = getDocumentTheme(document.documentElement);
      setIsDark(isDark ? newTheme === 'dark' : newTheme === 'light');
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['theme', 'style']
    });

    return () => observer.disconnect();
  }, []);
 
  return (
    <>
      <NextUIProvider theme={ isDark ? darkTheme : lightTheme }>
        {/* <Navbar /> */}
        <Component {...pageProps} />
      </NextUIProvider>
    </>

  )
};

export default MyApp;
