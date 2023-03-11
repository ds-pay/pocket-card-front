import { useEffect, useState, useMemo } from 'react';
// import type { AppProps } from 'next/app';
// import { NextUIProvider, useTheme, getDocumentTheme } from "@nextui-org/react";
import '../styles/globals.css';
// import { darkTheme, lightTheme } from '../context/themes';
import LayoutPrincipal from '../components/LayoutPrincipal/LayoutPrincipal';
import { darkTheme, lightTheme, GlobalStyle } from '../context/themes';
import { ThemeProvider } from 'styled-components'
import { GlobalContext } from '../context/globalcontext'
function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(lightTheme);
  const [istrue, setIsTrue] = useState(false)

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
    <GlobalContext.Provider value={valuesContext}>
      <ThemeProvider theme={theme}>
        {/* <button onClick={() => themeToggler()}>tema</button> */}
        <GlobalStyle/>
        <LayoutPrincipal>
          <Component {...pageProps} />
        </LayoutPrincipal>
      </ThemeProvider>
    </GlobalContext.Provider>
  )
};
export default MyApp;
