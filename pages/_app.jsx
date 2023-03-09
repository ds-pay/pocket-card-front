import { useEffect, useState, useMemo } from 'react';
// import type { AppProps } from 'next/app';
// import { NextUIProvider, useTheme, getDocumentTheme } from "@nextui-org/react";
import '../styles/globals.css';
// import { darkTheme, lightTheme } from '../context/themes';
import LayoutPrincipal from '../components/LayoutPrincipal/LayoutPrincipal';
import { darkTheme, lightTheme, GlobalStyle } from '../context/themes';
import { ThemeProvider } from 'styled-components'

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    
    const serialTheme = localStorage.getItem("theme");
    if (serialTheme) {
      if (serialTheme === "light") {
        setTheme(lightTheme)
      } else {
        setTheme(darkTheme)
      }
    } else {
      setTheme(lightTheme)
    }
    // let theme = window.localStorage.getItem('data-theme');
    // setIsDark(isDark ? theme === 'dark' : theme === 'light');

    // const observer = new MutationObserver((mutation) => {
    //   let newTheme = getDocumentTheme(document.documentElement);
    //   // setIsDark(isDark ? newTheme === 'dark' : newTheme === 'light');
    // });

    // observer.observe(document.documentElement, {
    //   attributes: true,
    //   attributeFilter: ['theme', 'style']
    // });

    // return () => observer.disconnect();
  }, []);

  const themeToggler = () => {
    if (theme.current === "light") {
      setTheme(darkTheme)
      localStorage.setItem('theme', 'dark')
    } else {
      setTheme(lightTheme)
      localStorage.setItem("theme", "light")
    }
  };

  const valuesContext = useMemo(() => ({
    themeToggler: themeToggler,
    theme: theme,
  }));

 
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <LayoutPrincipal>
          <Component {...pageProps} />
        </LayoutPrincipal>
      </ThemeProvider>
    </>
  )
};
export default MyApp;
