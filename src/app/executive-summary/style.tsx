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
   mb: 2,
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

export const styleOrgChart = [
 {
  ".orgchart-container": {
   height: "auto",
   border: 0,
   ".orgchart": {
    mt: -3,
    p: 0,
    background: "none",
    ul: {
     pl: 0,
     li: {
      mt: 3,
      pl: 0,
      "&:before": {
       borderColor: grey[400],
      },
     },
    },
    ".assistant-node": {
     display: "inline-block",
     margin: 0,
     padding: "3px",
     border: "2px dashed transparent",
     textAlign: "center",
     width: "130px",
     left: "140px",
     top: "30px",
     zIndex: 2,
     position: "absolute",

     ".connector": {
      borderLeft: "rgba(217, 83, 79, 0.8) dashed 2px",
      borderBottom: "rgba(217, 83, 79, 0.8) dashed 2px",
      position: "absolute",
      left: "-75px",
      width: "72px",
      height: "12.5px",
      top: "12.5px",
     },
    },
    ".oc-node": {
     p: 0,
     m: "0 5px",
     "&:before, &:after": {
      bgcolor: grey[400],
      height: 15,
      bottom: -15,
     },
     ".oc-heading, .oc-content": {
      fontSize: 15,
      px: 2,
      py: 0.5,
      width: "auto",
      height: "auto",
     },
     ".oc-heading": {
      bgcolor: theme.palette.primary.main,
     },
     ".oc-content": {
      textTransform: "capitalize",
      border: `1px solid ${theme.palette.primary.main}`,
     },
    },
   },
  },
 },
];
