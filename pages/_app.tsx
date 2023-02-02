import React from 'react';
import type { AppProps } from 'next/app';
import { NextUIProvider, useTheme, getDocumentTheme } from "@nextui-org/react";
import '../styles/globals.css';
import Navbar from '../components/Navbar/Navbar';
import { darkTheme, lightTheme } from '../context/themes'
import { useEffect, useState } from 'react'


function MyApp({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState(false);

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
        {/* <Navbar />  */}
        <Component {...pageProps} />
      </NextUIProvider>
    </>

  )
};

export default MyApp;
