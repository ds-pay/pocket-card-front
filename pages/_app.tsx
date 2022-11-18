import React, { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { createTheme, getDocumentTheme, NextUIProvider, useTheme } from "@nextui-org/react";
import '../styles/globals.css';



function MyApp({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState(false);


  const darkTheme = createTheme({
    type: 'dark',
    theme: {
      colors: {
        background: 'rgb(66, 66, 66)',
        backgroundCard: 'rgb(0, 0, 0)'
      },
    },
  });
  
  const lightTheme = createTheme({
    type: 'light',
    theme: {
      colors: {
        background: 'rgb(199, 149, 149)',
        backgroundCard: 'rgb(192, 24, 24)'
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
        <Component {...pageProps} />
      </NextUIProvider>
    </>

  )
};

export default MyApp;
