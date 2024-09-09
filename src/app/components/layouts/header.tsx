import theme from "@/theme";
import { Check } from "@mui/icons-material";
import {
 Avatar,
 Box,
 Button,
 Divider,
 Drawer,
 ListItemIcon,
 ListItemText,
 Menu,
 MenuItem,
 Stack,
 Typography,
} from "@mui/material";
import { orange, red } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import { IconKeluar } from "../icons";
import { IconFA } from "../icons/icon-fa";
import Image from "next/image";
import Aside from "./aside";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const sliderContent = [
 "PRANALA",
 "Pengendali\u00A0Risiko\u00A0&\u00A0Analisis\u00A0Pembangunan",
];

const textStyles = ["abbreviation", "full-form"];

export default function Header({}) {
 const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
 const [openDrawerMobile, setOpenDrawerMobile] = React.useState(false);

 const open = Boolean(anchorEl);
 const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  setAnchorEl(event.currentTarget);
 };
 const handleClose = () => {
  setAnchorEl(null);
 };

 const toggleDrawerMobile = (newOpen: boolean) => () => {
  setOpenDrawerMobile(newOpen);
 };

 const pathname = usePathname();
 const flagPathnameTheme = [
  pathname === "/test",
  pathname === "/tesst",
 ].includes(true);

 //  Slide-up Text
 const [sliderCounter, setSliderCounter] = useState(0);
 const [currentPhrase, setCurrentPhrase] = useState("");

 useEffect(() => {
  const phrase = sliderContent[sliderCounter];
  let letterIndex = 0;

  const letterInterval = setInterval(() => {
   if (letterIndex < phrase.length) {
    setCurrentPhrase(phrase.substring(0, letterIndex + 1));
    letterIndex++;
   } else {
    clearInterval(letterInterval);
    setTimeout(() => {
     setSliderCounter(
      (prevCounter) => (prevCounter + 1) % sliderContent.length
     );
    }, 6000); // Delay before switching to the next phrase
   }
  }, 50); // Interval for each letter (adjust as desired)

  return () => clearInterval(letterInterval);
 }, [sliderCounter]);

 const currentStyle = textStyles[sliderCounter];

 useGSAP(() => {
  const tlIn = gsap.timeline({
   repeat: -1,
   repeatDelay: 6,
   yoyo: true,
   delay: 2,
   defaults: {
    ease: "expo.in",
    stagger: { amount: 0.1 },
    delay: 0.1,
   },
  });

  tlIn
   .from(".group-1 .ff", { xPercent: -10, width: 0 })
   .to(".group-1 .ff", { xPercent: 0, delay: 0.1 })
   .from(".group-2 .ff", { xPercent: -10, width: 0 })
   .to(".group-2 .ff", { xPercent: 0, delay: 0.1 })
   .from(".group-3 .ff", { xPercent: -10, width: 0 })
   .to(".group-3 .ff", { xPercent: 0, delay: 0.1 })
   .from(".group-4 .ff", { xPercent: -10, width: 0 })
   .to(".group-4 .ff", { xPercent: 0, delay: 0.1 });
 }, []);

 return (
  <Box
   sx={{
    display: "flex",
    alignItems: "center",
    gap: 1,
    color: "white",
    padding: "0 42px",
    pl: "3rem",
    [theme.breakpoints.down("md")]: {
     px: 3,
    },
   }}
  >
   <Stack direction="row" justifyContent="space-between" width="100%">
    <Stack
     direction="column"
     justifyContent="center"
     sx={{
      [theme.breakpoints.down("md")]: {
       flexDirection: "row",
       alignItems: "center",
       gap: 2,
      },
     }}
    >
     {/* <Typography component="h1" fontWeight="800" fontSize="1.25rem">
      MRPN 2024
     </Typography>
     <Typography
      component="h1"
      letterSpacing={4}
      fontSize="1.25rem"
      fontWeight={300}
     >
      BAPPENAS
     </Typography> */}
     {/* <Typography
      component="h1"
      fontWeight="800"
      fontSize="1.25rem"
      lineHeight={1.2}
     >
      MRPN 2024
     </Typography> */}
     {flagPathnameTheme ? null : (
      <>
       <Box
        component="img"
        src="https://res.cloudinary.com/caturteguh/image/upload/v1708049745/mrpn/logo-2024_ne4yaj.png"
        alt="MRPN 2024"
        sx={{
         display: "flex",
         alignItems: "center",
         width: "40px",
         [theme.breakpoints.up("md")]: {
          display: "none",
         },
        }}
       >
        {/* <Image
       width={50}
       height={53}
       src="https://res.cloudinary.com/caturteguh/image/upload/v1708049745/mrpn/logo-2024_ne4yaj.png"
       alt="MRPN 2024"
       priority
      /> */}
       </Box>
       <Typography
        component="p"
        fontWeight="700"
        fontSize="20px"
        letterSpacing="0.5px"
        textTransform="uppercase"
        sx={{
         userSelect: "none",
         cursor: "default",
         "@keyframes myEffectExit": {
          "0%": {
           opacity: 0,
           transform: "translateY(0)",
          },
          "100%": {
           opacity: 1,
           transform: "translateY(-200%)",
          },
         },
         //  ".ff, .group-1, .group-2": {
         //   display: "inline-block",
         //   width: 0,
         //   overflow: "hidden",
         //   transition: "all 0.3s ease-in-out",
         //   position: "relative",
         //   top: "3px",
         //  },
         ".group-1, .group-2, .group-3, .group-4": {
          position: "relative",
          //   top: "8px",
          overflow: "hidden",
          display: "inline-flex",
         },

         ".ff": {
          position: "relative",
          //
          "&.letter-e": {
           width: "12.66px" /* E */,
          },
          "&.letter-n": {
           width: "15.75px" /* N */,
          },
          "&.letter-g": {
           width: "15.52px" /* G */,
          },
          "&.letter-d": {
           width: "14.11px" /* D */,
          },
          "&.letter-a": {
           width: "15.44px" /* A */,
          },
          "&.letter-l": {
           width: "11.81px" /* L */,
          },
          "&.letter-i": {
           width: "6.13px" /* I */,
          },
          "&.letter-s": {
           width: "13.61px" /* S */,
          },
          "&.letter-k": {
           width: "14.09px" /* K */,
          },
          "&.letter-o": {
           width: "15.92px" /* O */,
          },
          "&.letter-and": {
           width: "13.94px" /* & */,
          },
          "&.letter-p": {
           width: "13.47px" /* P */,
          },
          "&.letter-m": {
           width: "19.14px" /* M */,
          },
          "&.letter-b": {
           width: "13.73px" /* B */,
          },
          "&.space": {
           width: "10px" /* B */,
          },
         },

         //  "&:hover": {
         //   color: "white",
         //   cursor: "pointer",
         //   userSelect: "none",
         //   ".space": {
         //    width: "10px",
         //   },
         //   ".group-1": {
         //    width: "125px",
         //   },
         //   ".group-2": {
         //    width: "112px",
         //   },
         //  },
         [theme.breakpoints.down("md")]: {
          fontSize: "1em",
          lineHeight: 1.2,
          display: "none",
         },
        }}
       >
        <Box component="span" color={theme.palette.primary.main}>
         P
        </Box>
        <Box component="span" className="ff-group group-1">
         <Box component="span" color="white" className="ff letter-e">
          e
         </Box>
         <Box component="span" color="white" className="ff letter-n">
          n
         </Box>
         <Box component="span" color="white" className="ff letter-g">
          g
         </Box>
         <Box component="span" color="white" className="ff letter-e">
          e
         </Box>
         <Box component="span" color="white" className="ff letter-n">
          n
         </Box>
         <Box component="span" color="white" className="ff letter-d">
          d
         </Box>
         <Box component="span" color="white" className="ff letter-a">
          a
         </Box>
         <Box component="span" color="white" className="ff letter-l">
          l
         </Box>
         <Box component="span" color="white" className="ff letter-i">
          i
         </Box>
         <Box component="span" color="white" className="ff space">
          &nbsp;
         </Box>
        </Box>
        {/* <Box component="span" className="group-1">
         engendali{" "}
        </Box> */}
        <Box component="span" color={theme.palette.primary.main}>
         R
        </Box>
        <Box component="span" className="ff-group group-2">
         <Box component="span" color="white" className="ff letter-i">
          i
         </Box>
         <Box component="span" color="white" className="ff letter-s">
          s
         </Box>
         <Box component="span" color="white" className="ff letter-i">
          i
         </Box>
         <Box component="span" color="white" className="ff letter-k">
          k
         </Box>
         <Box component="span" color="white" className="ff letter-o">
          o
         </Box>
         <Box component="span" color="white" className="ff space">
          &nbsp;
         </Box>
         <Box component="span" color="white" className="ff letter-and">
          &
         </Box>
         <Box component="span" color="white" className="ff space">
          &nbsp;
         </Box>
        </Box>
        {/* <Box component="span" className="group-2">
         isiko dan{" "}
        </Box> */}
        {/* <Box
         component="span"
         sx={{
          [theme.breakpoints.up("md")]: {
           display: "none",
          },
         }}
        >
         <br />
        </Box>
        dan{" "} */}
        <Box component="span" color={theme.palette.primary.main}>
         Anal
        </Box>
        <Box component="span" className="ff-group group-3">
         <Box component="span" color="white" className="ff letter-i">
          i
         </Box>
         <Box component="span" color="white" className="ff letter-s">
          s
         </Box>
         <Box component="span" color="white" className="ff letter-i">
          i
         </Box>
         <Box component="span" color="white" className="ff letter-s">
          s
         </Box>
         <Box component="span" color="white" className="ff space">
          &nbsp;
         </Box>
         <Box component="span" color="white" className="ff letter-p">
          p
         </Box>
         <Box component="span" color="white" className="ff letter-e">
          e
         </Box>
         <Box component="span" color="white" className="ff letter-m">
          m
         </Box>
         <Box component="span" color="white" className="ff letter-b">
          b
         </Box>
         <Box component="span" color="white" className="ff letter-a">
          a
         </Box>
         <Box component="span" color="white" className="ff letter-n">
          n
         </Box>
         <Box component="span" color="white" className="ff letter-g">
          g
         </Box>
         <Box component="span" color="white" className="ff letter-and">
          u
         </Box>
         <Box component="span" color="white" className="ff letter-n">
          n
         </Box>
        </Box>
        {/* isis Pembangun */}
        <Box component="span" color={theme.palette.primary.main}>
         a
        </Box>
        <Box component="span" className="ff-group group-4">
         <Box component="span" color="white" className="ff letter-n">
          n
         </Box>
        </Box>
       </Typography>
       <Typography
        component="p"
        fontWeight="700"
        fontSize="20px"
        letterSpacing="0.5px"
        textTransform="uppercase"
        sx={{
         display: "none",
         [theme.breakpoints.down("md")]: {
          display: "block",
         },
        }}
       >
        Pranala
       </Typography>

       {/* <Typography
        component="h1"
        fontWeight="800"
        fontSize="1.25rem"
        lineHeight={1.2}
        color={theme.palette.primary.main}
       >
        PRANALA
       </Typography>
       <Typography
        component="p"
        fontWeight="400"
        fontSize="14px"
        letterSpacing="0.5px"
        lineHeight={1.3}
       >
        Pengendali Risiko dan Rencana Pembangunan
       </Typography> */}
       {/* <Typography
        component="div"
        fontWeight="800"
        fontSize="1.25rem"
        lineHeight={1.2}
       >
        <Box id="slider">
         <Box
          className={`span animation ${currentStyle}`}
          id="sliderValue"
          sx={{
           "&.abbreviation": {
            color: theme.palette.primary.main,
           },
           "&.full-form": {
            color: "white",
           },
          }}
         >
          {currentPhrase.split("").map((letter, index) => (
           <span
            key={index}
            className={`${index}`}
            style={{ animationDelay: `${index * 0.1}s` }}
           >
            {letter}
           </span>
          ))}
         </Box>
        </Box>
       </Typography> */}
      </>
     )}
    </Stack>
    <Stack alignItems="center" direction="row" gap={2}>
     <Button onClick={handleClick} sx={{ p: 0, m: 0, minWidth: 0 }}>
      <Avatar sx={{ bgcolor: "white", width: 36, height: 36 }}>
       <IconFA size={16} name="user-tie" color={theme.palette.primary.main} />
      </Avatar>
     </Button>
     <Box
      component="span"
      sx={{
       display: "inline-flex",
       cursor: "pointer",
       [theme.breakpoints.up("md")]: {
        display: "none",
       },
      }}
     >
      <IconFA
       size={20}
       name="bars"
       color={theme.palette.primary.light}
       onclick={toggleDrawerMobile(true)}
      />
     </Box>
    </Stack>
    <Menu
     anchorEl={anchorEl}
     id="account-menu"
     open={open}
     onClose={handleClose}
     onClick={handleClose}
     slotProps={{
      paper: {
       elevation: 0,
       sx: {
        overflow: "visible",
        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
        mt: 1.5,
        "& .MuiAvatar-root": {
         width: 32,
         height: 32,
         ml: -0.5,
         mr: 1,
        },
        "&::before": {
         content: '""',
         display: "block",
         position: "absolute",
         top: 0,
         right: 14,
         width: 10,
         height: 10,
         bgcolor: "background.paper",
         transform: "translateY(-50%) rotate(45deg)",
         zIndex: 0,
        },
        //
        "&.MuiPaper-root": {
         left: "auto !important",
         right: 44,
         width: 300,
         borderRadius: 3,
         ".MuiList-root": {
          py: 0,
         },
        },
        ".MuiMenuItem-root": {
         py: "10px",
         "&:first-of-type, &:last-of-type": {
          py: 2,
         },
         "&:last-of-type": {
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12,
         },
        },
       },
      },
     }}
     transformOrigin={{ horizontal: "right", vertical: "top" }}
     anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
     <MenuItem sx={{ py: 2, gap: 1 }}>
      <Avatar
       alt="Administrator"
       src="https://res.cloudinary.com/caturteguh/image/upload/v1708049745/mrpn/logo-2024_ne4yaj.png"
      />
      <ListItemText sx={{ span: { fontWeight: 500 } }}>
       Administrator
      </ListItemText>
     </MenuItem>
     <Divider sx={{ m: "0 !important" }} />
     <MenuItem sx={{ py: 2 }}>
      <ListItemText>Tahun 2025</ListItemText>
     </MenuItem>
     <MenuItem>
      <ListItemText>Tahun 2026</ListItemText>
     </MenuItem>
     <MenuItem>
      <ListItemText>Tahun 2027</ListItemText>
     </MenuItem>
     <MenuItem>
      <ListItemText>Tahun 2028</ListItemText>
     </MenuItem>
     <MenuItem>
      <ListItemText>Tahun 2029</ListItemText>
     </MenuItem>
     <Divider sx={{ m: "0 !important" }} />
     <MenuItem
      sx={{
       bgcolor: red[100],
       py: 2,
      }}
     >
      <ListItemIcon>
       <IconKeluar color={red[800]} />
      </ListItemIcon>
      <Link href="/">
       <ListItemText sx={{ color: red[800], span: { fontWeight: 500 } }}>
        <Link href="/">Keluar Sistem</Link>
       </ListItemText>
      </Link>
     </MenuItem>
    </Menu>
   </Stack>
   <Drawer
    anchor="right"
    open={openDrawerMobile}
    onClose={toggleDrawerMobile(false)}
    sx={{
     ".MuiPaper-elevation": {
      //   bgcolor: theme.palette.primary.main,
      bgcolor: theme.palette.secondary.dark,
     },
    }}
   >
    <Aside isExpanded={true} isMobile />
   </Drawer>
  </Box>
 );
}
