"use client";

import ContentPage from "@/app/components/contents";
import React from "react";
import DashboardLayout from "@/components/layouts/layout";
import EmptyState from "@/components/empty";
import { IconEmptyPage } from "@/components/icons";
import {
 Box,
 Chip,
 Collapse,
 Grow,
 Stack,
 Tab,
 Tabs,
 Tooltip,
 alpha,
 useMediaQuery,
 useTheme,
} from "@mui/material";
import theme from "@/theme";
import { grey } from "@mui/material/colors";
import { IconFA } from "@/components/icons/icon-fa";

interface TabPanelProps {
 children?: React.ReactNode;
 index: number;
 value: number;
}

function a11yProps(index: number) {
 return {
  id: `simple-tab-${index}`,
  "aria-controls": `simple-tabpanel-${index}`,
 };
}

function CustomTabPanel(props: TabPanelProps) {
 const { children, value, index, ...other } = props;

 return (
  <div
   role="tabpanel"
   hidden={value !== index}
   id={`simple-tabpanel-${index}`}
   aria-labelledby={`simple-tab-${index}`}
   {...other}
  >
   {value === index && (
    <Box
     sx={{
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
     }}
    >
     {children}
    </Box>
   )}
  </div>
 );
}

export default function PageExecutiveSummary({}) {
 const [value, setValue] = React.useState(0);
 const [project, setProject] = React.useState("");

 const handleChangeProject = (value: any) => {
  setProject(value);
 };

 const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  setValue(newValue);
 };

 const flagProjectNoCard = [
  project === "",
  //   project === "2",
  //   project === "3",
  project === "5",
 ].includes(true);

 const [show, setShow] = React.useState(true);

 React.useEffect(() => {
  let timer1 = setTimeout(() => setShow(false), 3 * 1000);

  return () => {
   clearTimeout(timer1);
  };
 });

 const usetheme = useTheme();
 //  const breakpointDownLg = useMediaQuery(usetheme.breakpoints.down("lg"));
 const breakpointDownMd = useMediaQuery(usetheme.breakpoints.down("md"));

 const downloadAttachment = (
  <Chip
   color="primary"
   variant="outlined"
   label={
    <Stack direction="row" gap={1}>
     <IconFA size={14} name="download" color={theme.palette.primary.main} />
     {breakpointDownMd ? null : "Download Lampiran"}
    </Stack>
   }
   sx={{
    bgcolor: "white",
    fontWeight: 600,
    lineHeight: 1,
    cursor: "pointer",
    height: 38,
    px: 1,
    borderRadius: "50px",
   }}
  />
 );

 return (
  <DashboardLayout>
   <ContentPage
    title="Executive Summary"
    overflowHidden
    withCard={flagProjectNoCard}
    chooseProject
    project={project}
    handleChangeProject={handleChangeProject}
    dowloadAttachmentFile={
     project && (
      <>
       {breakpointDownMd ? (
        <Tooltip
         title="Download Lampiran"
         followCursor
         TransitionComponent={Grow}
        >
         {downloadAttachment}
        </Tooltip>
       ) : (
        downloadAttachment
       )}
      </>
     )
    }
   >
    {flagProjectNoCard ? (
     <EmptyState
      icon={<IconEmptyPage />}
      title="Halaman Executive Summary Kosong"
      description="Silahkan isi konten halaman ini"
     />
    ) : null}
    <Collapse in={!flagProjectNoCard}>
     <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
       <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Tabel Analisis"
        sx={{
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
           height: "8px",
           bgcolor: grey[100],
          },
          "&::-webkit-scrollbar-track": {
           //    boxShadow: "none",
           //    bgcolor: grey[800],
          },
          "&::-webkit-scrollbar-thumb": {
           bgcolor: alpha(grey[400], 0.5),
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
        }}
       >
        <Tab
         label="Latar Belakang"
         {...a11yProps(0)}
         iconPosition="start"
         icon={<IconFA size={16} name="pen-to-square" />}
        />
        <Tab
         label={`Profil ${
          project === "5" ? "Program Prioritas" : "Kegiatan Program"
         }`}
         {...a11yProps(1)}
         iconPosition="start"
         icon={<IconFA size={16} name="address-card" sx={{ width: "auto" }} />}
        />
        <Tab
         label="Kerangka Pikir"
         {...a11yProps(2)}
         iconPosition="start"
         icon={<IconFA size={16} name="lightbulb" sx={{ width: "auto" }} />}
        />
        <Tab
         label="Cascading"
         {...a11yProps(3)}
         iconPosition="start"
         icon={<IconFA size={16} name="layer-group" sx={{ width: "auto" }} />}
        />
        <Tab
         label="Project Roadmap"
         {...a11yProps(4)}
         iconPosition="start"
         icon={<IconFA size={16} name="route" sx={{ width: "auto" }} />}
        />
        <Tab
         label="Critical Path"
         {...a11yProps(5)}
         iconPosition="start"
         icon={
          <IconFA
           size={16}
           name="exclamation-triangle"
           sx={{ width: "auto" }}
          />
         }
        />
        <Tab
         label="Kerangka Kelembagaan & Regulasi"
         {...a11yProps(6)}
         iconPosition="start"
         icon={<IconFA size={16} name="gavel" sx={{ width: "auto" }} />}
        />
        <Tab
         label="Pendanaan & Investasi"
         {...a11yProps(7)}
         iconPosition="start"
         icon={<IconFA size={16} name="dollar-sign" sx={{ width: "auto" }} />}
        />
        <Tab
         label="Indikasi Risiko RPJMN"
         {...a11yProps(8)}
         iconPosition="start"
         icon={<IconFA size={16} name="rotate" sx={{ width: "auto" }} />}
        />
       </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
       Latar Belakang
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
       Profil
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
       Kerangka Pikir
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
       Cascading
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
       Project Roadmap
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
       Critical Path
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
       Kerangka Kelembagaan & Kerangka Regulasi
      </CustomTabPanel>
      <CustomTabPanel value={value} index={7}>
       Pendanaan & Investasi
      </CustomTabPanel>
      <CustomTabPanel value={value} index={8}>
       Indikasi Risiko RPJMN
      </CustomTabPanel>
     </Box>
    </Collapse>
   </ContentPage>
  </DashboardLayout>
 );
}
