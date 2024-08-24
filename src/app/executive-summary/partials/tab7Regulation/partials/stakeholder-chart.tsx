import React from "react";
import OrgChart from "@dabeng/react-orgchart";
import { Box, Divider, Grow, Stack, Tooltip } from "@mui/material";
import "@dabeng/react-orgchart/dist/ChartNode.css";
import "@dabeng/react-orgchart/dist/ChartContainer.css";
import theme from "@/theme";
import { IconFA } from "@/app/components/icons/icon-fa";
import { styleOrgChart } from "@/app/executive-summary/style";
import ImageGalleryStakeholder from "../../tab2Profile/partials/imageSearch";
import DraggableScroll from "../../tab2Profile/partials/draggableScroll";
import Image from "next/image";

const instanceItem = [
 {
  name: "BPOM",
  logo:
   "https://res.cloudinary.com/caturteguh/image/upload/v1711955901/mrpn/company_logo/logo_bpom_ktik6o.png",
 },
 {
  name: "Kementerian Pertanian",
  logo:
   "https://res.cloudinary.com/caturteguh/image/upload/v1711956186/mrpn/company_logo/logo_kementan_de8q7e.png",
 },
 {
  name: "Kementerian Kehutanan & Lingkungan Hidup",
  logo:
   "https://res.cloudinary.com/caturteguh/image/upload/v1711955830/mrpn/company_logo/logo_klhk_wplagd.png",
 },
 {
  name: "Kementerian Perhubungan",
  logo:
   "https://res.cloudinary.com/caturteguh/image/upload/v1711955963/mrpn/company_logo/logo_kemenhub_ivgjzh.png",
 },
 {
  name: "BPOM",
  logo:
   "https://res.cloudinary.com/caturteguh/image/upload/v1711955901/mrpn/company_logo/logo_bpom_ktik6o.png",
 },
 {
  name: "Kementerian Pertanian",
  logo:
   "https://res.cloudinary.com/caturteguh/image/upload/v1711956186/mrpn/company_logo/logo_kementan_de8q7e.png",
 },
 {
  name: "Kementerian Kehutanan & Lingkungan Hidup",
  logo:
   "https://res.cloudinary.com/caturteguh/image/upload/v1711955830/mrpn/company_logo/logo_klhk_wplagd.png",
 },
 {
  name: "Kementerian Perhubungan",
  logo:
   "https://res.cloudinary.com/caturteguh/image/upload/v1711955963/mrpn/company_logo/logo_kemenhub_ivgjzh.png",
 },
];

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

const InstanceLogo = ({ imgSrc, name }: { imgSrc: string; name: string }) => {
 return (
  <Tooltip title={name} followCursor TransitionComponent={Grow}>
   <Image
    alt={name}
    src={imgSrc}
    width={0}
    height={0}
    sizes="100vw"
    style={{
     width: "auto",
     height: "60px",
     userSelect: "none",
     touchAction: "none",
    }}
   />
  </Tooltip>
 );
};

const InstanceScroll = () => {
 return (
  <DraggableScroll
   sx={{
    maxWidth: 300,
    display: "flex",
    gap: 2,
    paddingBottom: 1.5,
    "&::-webkit-scrollbar": {
     height: "3px",
    },
   }}
  >
   {instanceItem.map((itemSh: any, index: any) => (
    <Tooltip
     key={index}
     title={itemSh.name}
     followCursor
     TransitionComponent={Grow}
    >
     <Image
      alt={itemSh.name}
      src={itemSh.logo}
      width={0}
      height={0}
      sizes="100vw"
      style={{
       width: "auto",
       height: "60px",
       userSelect: "none",
       touchAction: "none",
      }}
     />
    </Tooltip>
   ))}
  </DraggableScroll>
 );
};

export default function StakeholderChart({ project }: { project: string }) {
 const ds = {
  name: `Kementerian Koordinator`,
  title: (
   <InstanceLogo
    imgSrc="https://res.cloudinary.com/caturteguh/image/upload/v1724063555/mrpn/kemenko-pmk_t7f7sd.png"
    name="Kementerian Koordinator Bidang Pembangunan Manusia dan Kebudayaan"
   />
  ),
  children: [
   {
    name: "Entitas Sektor Utama",
    title: (
     <InstanceLogo
      imgSrc="https://res.cloudinary.com/caturteguh/image/upload/v1724064730/mrpn/bkkbn_n7g3nv.png"
      name="BKKBN"
     />
    ),
    children: [
     {
      name: "Entitas Pendukung",
      title: (
       <InstanceLogo
        imgSrc="https://res.cloudinary.com/caturteguh/image/upload/v1724064951/mrpn/kemenkes_yqpby6.png"
        name="Kementerian Kesehatan"
       />
      ),
     },
     {
      name: "Entitas Pendukung",
      title: (
       <InstanceLogo
        imgSrc="https://res.cloudinary.com/caturteguh/image/upload/v1711955963/mrpn/company_logo/logo_kemenhub_ivgjzh.png"
        name="Kementerian Perhubungan"
       />
      ),
     },
     //  {
     //   name: "Entitas Pendukung",
     //   title: <InstanceScroll />,
     //  },
    ],
   },
  ],
 };

 return (
  <Box sx={styleOrgChart}>
   <OrgChart
    datasource={ds}
    NodeTemplate={NodeTemplate}
    containerClass="containerClass"
    chartClass="chartClass"
   />
  </Box>
 );
}
