"use client";

import { createTheme } from "@mui/material/styles";

const iTheme = createTheme({
 typography: {
  fontFamily: '"Inter", sans-serif',
  caption: {
   fontFamily: "'Open Sans', sans-serif",
  },
 },
 palette: {
  primary: {
   main: "#1880C9",
   light: "#F4F5F7",
   dark: "#05004E",
  },
  secondary: {
   main: "#1880C9",
   dark: "#1f2937",
  },
 },
 components: {
  MuiCssBaseline: {
   styleOverrides: {
    body: {
     maxHeight: "100vh",
     maxWidth: "100vw",
     backgroundColor: "#1f2937",
     color: "#05004E",
     transition: "all 300ms ease",
    },
   },
  },
 },
 breakpoints: {
  values: {
   xs: 0,
   sm: 600,
   md: 900,
   lg: 1200,
   xl: 1536,
  },
 },
});

export default iTheme;
