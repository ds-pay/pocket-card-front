import { createGlobalStyle } from "styled-components"

export const darkTheme = {
  current: 'dark',
  bgIconPrimary: "#5b5d61",
  //background de los iconos del narvbar glass
  bgPrimaryGlass: "rgba( 72, 74, 77, 0.85 )",
  //background card ya vistas
  bgSecondGlass: "rgba( 152, 148, 187, 0.80 )",

  bgThridGlass: "#989a9d",
  backgroundForm: "#5c5c5c",
  bgInputText: "#797979",
  bgAdminMenu: "#3c3e41",

  bgLoginCardAnimation: "#2b2b2b",
  bgCardLogin: "#3c3e41",
  textFormColor: "#ffffff",
  colorTextOrdinary: "#ffffff",

  //Sombreado del narvbar y cards notifications
  boxShadowPrimary: "0 8px 32px 0 rgba( 218, 220, 225, 0.10 )",
  // tono claro de letra - icon
  textColor: "#dadce1",
  // tono oscuro de letra
  textColorDark: "#dadce1",
  // tono morado de letra
  textColorPurple: "#dadce1",
  // fondoNavbar
  backgroundNavbar: "#242526",
  //Hover del item en el navbar
  bghoverItemNavbar: "#525357",
  // fondo
  backGradiente2: "#111111  ",
  background: "#0e0f0f",
  bgPrimary: "#242526",
  bgSecondary: "#383839",
  bgInput: "#484a4d",
  borderInput: "1px solid #dadce1",
  textColorGreen: "#388e3c",
  textColorGray: "#dadce1",
  bgThridGlassGray: "#989a9d", //26 puestos
};

export const lightTheme = {
  current: 'light',
  //background de los iconos del narvbar
  bgIconPrimary: "#7a788a",
  bgImputText: "#b4aafd",
  //background de los iconos del narvbar glass
  bgPrimaryGlass: "rgba( 152, 148, 187, 0.95 )",
  //background card ya vistas
  bgSecondGlass: "rgba( 152, 148, 187, 0.70 )",

  bgAdminMenu: "#d4d4d4",
  backgroundForm: "#ffffff",
  bgInputText: "#ebeef3",
  bgThridGlass: "#b4abf5",
  bgCardLogin: "#5a51a0",


  bgLoginCardAnimation: "#5040b9",
  textColorCardAnimate: "#e6e6e6",
  textFormColor: "#292929",
  colorTextOrdinary: "#ffffff",

  textlowContrast: "#e6e6e6",
  //Sombreado del narvbar y cards notifications
  boxShadowPrimary: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
  // tono oscuro de letra
  textColorDark: "#000000",
  // tono morado de letra
  textColorPurple: "#3D366F",
  // fondoNavbar
  backgroundNavbar: "#3d366f",
  //Hover del item en el navbar
  bghoverItemNavbar: "#f4f2f2",
  // fondo
  backGradiente2: "#28224a ",
  background: "#ececec",
  borderInput: "1px solid #c0c0c0",
  bgPrimary: "#4c52ad",
  bgSecondary: "#8286e2",
  bgInput: "#fff",
  textColor: "#fafafa",
  textColorGreen: "#388e3c",
  textColorGray: "#c0c0c0",
  bgThridGlassGray: "#989a9d",  // 29 puestos
};

export const GlobalStyle = createGlobalStyle`

  :root{
    --bgPrimary: ${({ theme }) => theme.bgPrimary};
    --bgSecondary: ${({ theme }) => theme.bgSecondary};
    --bgInput:${({ theme }) => theme.bgInput};
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
    --bgCardLogin: ${(props) => props.theme.bgCardLogin};
    --colorTextOrdinary: ${(props) => props.theme.colorTextOrdinary};
  }
`;

