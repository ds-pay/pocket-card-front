import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  current:"light",
  //background de los iconos del narvbar
  bgIconPrimary: "#9894BB",
  //background de los iconos del narvbar glass
  bgPrimaryGlass: "rgba( 152, 148, 187, 0.95 )",
  //background card ya vistas
  bgSecondGlass: "rgba( 152, 148, 187, 0.70 )",

  bgThridGlass: "rgba( 152, 148, 187, 0.95 )",
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
  background: "#ffff",

  borderInput:"1px solid #c0c0c0",

  bgPrimary: "#4c52ad",
  bgSecondary: "#8286e2",
  bgInput:"#fff",
  textColor:"#fafafa",
  textColorGreen: "#388e3c",
  textColorGray: "#c0c0c0",
  bgThridGlassGray: "#989a9d",
};

export const darkTheme = {
  current:"dark",

  //background de los iconos del narvbar
  bgIconPrimary: "#484a4d",
  //background de los iconos del narvbar glass
  bgPrimaryGlass: "rgba( 72, 74, 77, 0.85 )",
  //background card ya vistas
  bgSecondGlass: "rgba( 152, 148, 187, 0.80 )",

  bgThridGlass: "#989a9d",
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
  background: "#151616",

  bgPrimary: "#242526",
  bgSecondary: "#383839",
  bgInput:"#484a4d",
  borderInput:"1px solid #dadce1",
  textColorGreen: "#388e3c",
  textColorGray: "#dadce1",
  bgThridGlassGray:"#989a9d",
};

export const GlobalStyle = createGlobalStyle`

.ContainerSlaider{
  max-width: 50%;
  /* height: 10%; */
  border-radius: 10px;
  margin: 50px auto;
  overflow: hidden;
}
 
:root{
  --bgPrimary: ${({theme}) => theme.bgPrimary};
  --bgSecondary: ${({theme}) => theme.bgSecondary};
  --bgInput:${({theme}) => theme.bgInput};
  --bgIconPrimary:${(props) => props.theme.bgIconPrimary};
  --bgPrimaryGlass:${(props) => props.theme.bgPrimaryGlass};
  --bgSecondGlass:${(props) => props.theme.bgSecondGlass};
  --boxShadowPrimary: ${(props) => props.theme.boxShadowPrimary};
  --bghoverItemNavbar:${(props) => props.theme.bghoverItemNavbar};
  --textColor: ${(props) => props.theme.textColor}; 
  --backgroundNavbar: ${(props) => props.theme.backgroundNavbar};
  --background: ${(props) => props.theme.background};
  --textColorDark: ${(props) => props.theme.textColorDark};
  --nav-size: 50px; 
  --border: 1px solid #474a4d;
  --border-radius:8px;
  --speed: 500ms;
  --textColorGreen: ${(props) => props.theme.textColorGreen};
  --textColorGray: ${(props) => props.theme.textColorGray};
  --bgThridGlass: ${(props) => props.theme.bgThridGlass};
  --borderInput: ${(props) => props.theme.borderInput};
  --textColorPurple: ${(props) => props.theme.textColorPurple};
  --bgThridGlassGray: ${(props) => props.theme.bgThridGlassGray};

}

body {
  margin: 0;
  background: var(--background);
  transition: background 0.3s;
  font-family: 'Roboto',sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

ul{
  list-style:none;
  margin: 0;
  padding: 0;
}

a {
  color: var(--textColor);
  text-decoration: none;
}
`;