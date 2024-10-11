import React from "react";
import { Backdrop, CircularProgress } from "@mui/material";

export default function LoadingPage({ gyro }: { gyro?: boolean }) {
 //  const [show, setShow] = React.useState(true);

 //  React.useEffect(() => {
 //   let timer1 = setTimeout(() => setShow(false), 3 * 1000);

 //   return () => {
 //    clearTimeout(timer1);
 //   };
 //  });

 return (
  <Backdrop
   sx={{
    color: "#fff",
    zIndex: (theme) => theme.zIndex.drawer + 1,
    transition: "all 500ms ease",
   }}
   open
  >
   {gyro ? <div className="gyro"></div> : <CircularProgress color="inherit" />}
  </Backdrop>
 );
}
