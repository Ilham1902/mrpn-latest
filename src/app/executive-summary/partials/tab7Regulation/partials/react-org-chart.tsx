import React from "react";
import OrgChart from "@dabeng/react-orgchart";
import { Box, Divider, Stack } from "@mui/material";
import "@dabeng/react-orgchart/dist/ChartNode.css";
import "@dabeng/react-orgchart/dist/ChartContainer.css";
import theme from "@/theme";
import { grey } from "@mui/material/colors";
import { IconFA } from "@/app/components/icons/icon-fa";

const NodeTemplate = ({ nodeData }: { nodeData: any }) => {
 const isAssistant = nodeData.isAssistant === true;
 const nodeClass = isAssistant ? "has-assistant" : "";

 return (
  <Stack
   mt={0.5}
   border={`1px solid ${theme.palette.primary.main}`}
   borderRadius={2}
   className={nodeClass}
  >
   <Box position="relative">
    <Box
     position="absolute"
     top="50%"
     left={8}
     sx={{ transform: "translateY(-50%)" }}
    >
     {nodeData.children && nodeData.children.length > 0 && (
      <IconFA name="circle-plus" size={14} color="White" />
     )}
    </Box>
    <Box
     px={4}
     py={0.5}
     bgcolor={theme.palette.primary.main}
     borderRadius={2}
     sx={{ borderEndStartRadius: 0, borderEndEndRadius: 0 }}
     color="white"
    >
     {nodeData.name}
    </Box>
   </Box>
   <Divider />
   <Box px={2} py={1} fontWeight={500}>
    {nodeData.title}
   </Box>
  </Stack>
 );
};

const MyOrgChart = () => {
 const ds = {
  name: "Program/Kegiatan",
  title: "Penurunan stunting",
  children: [
   { name: "Koordinator", title: "Kemenko Bappenas", isAssistant: true },
   {
    name: "Entitas MRPN Sektor Utama",
    title: "K/L Z",
   },
   { name: "Entitas MRPN Pendukung", title: "K/L Y" },
   { name: "Entitas MRPN Pendukung", title: "K/L X" },
   { name: "Entitas MRPN Pendukung", title: "Pemda" },
  ],
 };

 return (
  <Box
   sx={{
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
   }}
  >
   <OrgChart
    datasource={ds}
    NodeTemplate={NodeTemplate}
    containerClass="containerClass"
    chartClass="chartClass"
   />
  </Box>
 );
};

export default MyOrgChart;
