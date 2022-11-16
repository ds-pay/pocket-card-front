import { createTheme, getDocumentTheme, Switch, changeTheme, useTheme } from '@nextui-org/react';
import { useEffect, useState  } from 'react'

export const darkTheme = createTheme({
    type: 'dark',
    theme: {
        colors: {
            background: "rgb(112, 112, 112)"
        }
    }
})

export const lightTheme = createTheme({
    type: 'light',
    theme: {
        colors: {}
    }
})

export const Theme = () => {
    const [ isDark, setIsDark ] = useState(false);

useEffect(() => {
  let theme = window.localStorage.getItem('data-theme');
  setIsDark(theme === 'dark');

}, [])

};
