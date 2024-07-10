import theme from "@/theme";
import { alpha } from "@mui/material";
import { grey } from "@mui/material/colors";

export const styleTab = [
 {
  ".MuiTabs-flexContainer": {
   gap: 1,
   ".MuiTab-labelIcon": {
    whiteSpace: "nowrap",
   },
  },
  ".MuiTabs-scroller": {
   //   [theme.breakpoints.down("md")]: {
   width: "800px",
   overflowX: "auto !important",
   "&::-webkit-scrollbar": {
    height: "4px",
    bgcolor: grey[100],
   },
   "&::-webkit-scrollbar-track": {
    //    boxShadow: "none",
    //    bgcolor: grey[800],
   },
   "&::-webkit-scrollbar-thumb": {
    bgcolor: alpha(grey[400], 0.9),
   },
   //   },
  },
  button: {
   p: 2,
   px: 3,
   my: 2,
   gap: 1,
   minHeight: 0,
   bgcolor: grey[300],
   borderRadius: 2,
   lineHeight: 1,
   "&.Mui-selected": {
    bgcolor: theme.palette.primary.main,
    color: "white",
   },
  },
 },
];

export const styleDownload = [
 {
  bgcolor: "white",
  fontWeight: 600,
  lineHeight: 1,
  cursor: "pointer",
  height: 38,
  px: 1,
  borderRadius: "50px",
 },
];

export const styleTabPanel = [
 {
  p: 0,
  mt: 2,
  height: "calc(100vh - 344px)",
  overflow: "auto",
  "&::-webkit-scrollbar": {
   width: "3px",
  },
  [theme.breakpoints.down("sm")]: {
   height: "calc(100vh - 366px)",
  },
 },
];
