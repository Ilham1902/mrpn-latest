import React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";

import { Metadata } from "next";
import { CssBaseline } from "@mui/material";

import "./globals.css";
import "./styles.scss";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
// import Head from "next/head";

export const metadata: Metadata = {
 title: "MRPN 2024",
 icons: {
  icon: [
   {
    media: "(prefers-color-scheme: light)",
    url: "https://res.cloudinary.com/caturteguh/image/upload/v1708049745/mrpn/logo-2024_ne4yaj.png",
    href:
     "https://res.cloudinary.com/caturteguh/image/upload/v1708049745/mrpn/logo-2024_ne4yaj.png",
   },
   {
    media: "(prefers-color-scheme: dark)",
    url: "https://res.cloudinary.com/caturteguh/image/upload/v1708049745/mrpn/logo-2024_ne4yaj.png",
    href:
     "https://res.cloudinary.com/caturteguh/image/upload/v1708049745/mrpn/logo-2024_ne4yaj.png",
   },
  ],
 },
};

export default function RootLayout(props: any) {
 return (
  <>
   <html lang="en">
    <body>
     <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
       <CssBaseline />
       {props.children}
      </ThemeProvider>
     </AppRouterCacheProvider>
    </body>
   </html>
  </>
 );
}
