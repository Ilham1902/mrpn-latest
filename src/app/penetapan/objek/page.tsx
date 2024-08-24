"use client";

import ContentPage from "@/app/components/contents";
import React from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import EmptyState from "@/app/components/empty";
import { IconEmptyPage } from "@/app/components/icons";
import {
 ToggleButtonGroup,
 Typography,
 alpha,
 Box,
 Button,
 DialogActions,
 Collapse,
 Chip,
 Stack,
} from "@mui/material";
import theme from "@/theme";
import { green, grey, orange, red } from "@mui/material/colors";
import AddButton from "@/app/components/buttonAdd";
import DialogComponent from "@/app/components/dialog";
import FormTable from "./partials/form-table";
import SearchKP from "./partials/search";
import useThemes from "./hooks/useTheme";
import LoadingPage from "@/app/components/loadingPage";
import ThemeToggleButton from "@/app/components/toggleButton/theme";
import { usePathname } from "next/navigation";
import { styleToggleButton } from "./style";
import TabObject from "./partials/tab";
import { IconFA } from "@/app/components/icons/icon-fa";

export default function PageTema({}) {
 const [modalOpenAdd, setModalOpenAdd] = React.useState(false);
 const [modalOpenCollapse, setModalOpenCollapse] = React.useState(false);
 const [openTab, setOpenTab] = React.useState(false);
 const [objectVisible, setObjectVisible] = React.useState(true);
 const [toggleSelectedTopic, setToggleSelectedTopic] = React.useState(false);

 const {
  activeTab,
  handleAlignment,
  listData,
  handleSearchTermUpdate,
  searchTab,
 } = useThemes();

 const handleModalOpenAdd = () => {
  setModalOpenAdd(true);
 };

 //  const handleModalOpenCollapse = () => {
 //   setModalOpenCollapse(true);
 //  };

 const handleModalClose = () => {
  setModalOpenAdd(false);
  setModalOpenCollapse(false);
 };

 const handleOpenTab = () => {
  setModalOpenCollapse(false);
  setOpenTab(true);
  setObjectVisible(false);
  setToggleSelectedTopic(true);
 };

 const handleChangeTopic = () => {
  setToggleSelectedTopic(false);
  setOpenTab(false);
  setObjectVisible(true);
 };

 const dialogActionFooter = (
  <DialogActions sx={{ p: 2, px: 3 }}>
   <Button onClick={handleModalClose}>Batal</Button>
   <Button
    variant="contained"
    type="submit"
    sx={{
     color: "white !important",
    }}
    onClick={handleOpenTab}
   >
    Simpan
   </Button>
  </DialogActions>
 );

 const dialogActionFooterAdd = (
  <DialogActions sx={{ p: 2, px: 3 }}>
   <Button onClick={handleModalClose}>Batal</Button>
   <Button
    variant="contained"
    onClick={handleOpenTab}
    sx={{
     color: "white !important",
    }}
   >
    Simpan
   </Button>
  </DialogActions>
 );

 const isEmpty = false;

 //  const flagPathnameTheme = [
 //   pathname === "/test",
 //   pathname === "/tesst",
 //  ].includes(true);

 const flagToggleButton =
  activeTab === "penurunan-stunting"
   ? theme.palette.primary.main
   : activeTab === "penurunan-kemiskinan"
   ? green[500]
   : activeTab === "percepatan-transisi-energi"
   ? red[500]
   : orange[500];

 const flagChip =
  activeTab === "penurunan-stunting"
   ? theme.palette.primary.main
   : activeTab === "penurunan-kemiskinan"
   ? green[800]
   : activeTab === "percepatan-transisi-energi"
   ? red[800]
   : orange[800];

 const flagChipText =
  activeTab === "penurunan-stunting"
   ? "Penurunan Stunting"
   : activeTab === "penurunan-kemiskinan"
   ? "Penurunan Kemiskinan"
   : activeTab === "percepatan-transisi-energi"
   ? "Percepatan Transisi Energi"
   : activeTab === "peningkatan-pariwisata"
   ? "Peningkatan Pariwisata"
   : activeTab === "ketahanan-pangan"
   ? "Ketahanan Pangan"
   : "Sistem Persampahan";

 const styleToggleButton = [
  {
   display: "grid",
   gridTemplateColumns: "1fr 1fr 1fr",
   gap: 1,
   mt: 2,
   mb: 2,
   p: "1px",
   button: {
    //  bgcolor: "white",
    transition: "all 500ms ease-in-out",
    border: `1px solid ${theme.palette.primary.main}`,
    span: {
     //   lineHeight: 1.2,
     py: 2,
     height: "100%",
     //   display: "inline-flex",
     //   alignItems: "center",
    },
    "&:hover": {
     //   bgcolor: alpha(theme.palette.primary.main, 0.1),
     color: alpha(theme.palette.secondary.dark, 0.8),
     background: `linear-gradient(135deg, ${alpha(
      theme.palette.primary.main,
      0.3
     )} 100%, rgba(255, 255, 255, 0.2) 100%),url(https://res.cloudinary.com/caturteguh/image/upload/v1715510168/mrpn/bg-button-theme_cxwxph.jpg)`,
     //   backgroundSize: "140%",
     //   backgroundPosition: "-240px -125px",
     backgroundSize: "100%",
     backgroundPosition: "right 45.5%",
    },
    "&.Mui-selected": {
     // bgcolor: theme.palette.primary.main,
     // color: "white",
     color: "white",
     background: `linear-gradient(135deg, ${alpha(
      flagToggleButton,
      1
     )} 40%, rgba(255, 255, 255, 0.2) 100%),url(https://res.cloudinary.com/caturteguh/image/upload/v1715510168/mrpn/bg-button-theme_cxwxph.jpg)`,
     backgroundSize: "120%",
     backgroundPosition: "right center",
     border: `1px solid ${flagToggleButton}`,
     borderLeftColor: `${flagToggleButton} !important`,
     ".MuiBox-root": {
      bgcolor: theme.palette.primary.main,
      color: "white",
      borderRight: "1px solid white",
     },
     "&:hover": {
      bgcolor: theme.palette.primary.main,
      color: "white",
     },
    },
   },
   [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr 1fr",
   },
   [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
   },
  },
 ];

 return (
  <>
   <DashboardLayout>
    <LoadingPage />
    <ContentPage
     title="Objek MRPN & UPR Linsek"
     noMinusMargin
     heightNoSet
     withCard={false}
     selectedTopic={
      <Collapse in={toggleSelectedTopic}>
       <Chip
        variant="outlined"
        label={
         <Stack direction="row" alignItems="center">
          <Stack
           direction="row"
           bgcolor={flagChip}
           px={2}
           alignItems="center"
           height="34px"
           sx={{
            borderTopLeftRadius: 24,
            borderBottomLeftRadius: 24,
            [theme.breakpoints.down("sm")]: {
             minWidth: 133,
            },
           }}
          >
           <Typography
            fontSize={14}
            color="white"
            fontWeight={600}
            lineHeight={1}
           >
            Topik Terpilih
           </Typography>
          </Stack>
          <Typography px={2} fontSize={16} fontWeight={600}>
           {flagChipText}
          </Typography>
         </Stack>
        }
        sx={{
         height: "34px",
         bgcolor: "white",
         fontWeight: 600,
         lineHeight: 1,
         cursor: "default",
         ".MuiChip-label": {
          px: 0,
         },
        }}
       />
      </Collapse>
     }
     addButton={
      <>
       <Collapse in={toggleSelectedTopic}>
        <AddButton
         title="Ganti Topik"
         filled
         noMargin
         startIcon={<IconFA name="pencil" size={14} />}
         onclick={handleChangeTopic}
        />
       </Collapse>
       {!toggleSelectedTopic && (
        <AddButton
         title="Tambah Topik"
         filled
         noMargin
         onclick={handleModalOpenAdd}
        />
       )}
      </>
     }
    >
     {isEmpty ? (
      <EmptyState
       icon={<IconEmptyPage />}
       title="Halaman Topik Kosong"
       description="Silahkan isi konten halaman ini"
      />
     ) : (
      <>
       {objectVisible && (
        <>
         <Typography color={grey[600]} fontSize={14} fontStyle="italic">
          Pilih salah satu objek
         </Typography>
         <Box>
          <ToggleButtonGroup
           value={activeTab}
           exclusive
           onChange={handleAlignment}
           aria-label="text alignment"
           sx={styleToggleButton}
          >
           <ThemeToggleButton
            // code="01.01.02"
            value="penurunan-stunting"
            label="Penurunan Stunting"
            onClick={handleOpenTab}
           />
           <ThemeToggleButton
            //  code="01.01.03"
            value="penurunan-kemiskinan"
            label="Penurunan Kemiskinan"
            onClick={handleOpenTab}
           />
           <ThemeToggleButton
            //  code="01.01.04"
            value="percepatan-transisi-energi"
            label="Percepatan Transisi Energi"
            onClick={handleOpenTab}
           />
           <ThemeToggleButton
            //  code="01.01.05"
            value="peningkatan-pariwisata"
            label="Peningkatan Pariwisata"
            onClick={handleOpenTab}
           />
           <ThemeToggleButton
            //  code="01.01.06"
            value="ketahanan-pangan"
            label="Ketahanan Pangan"
            disabled
           />
           <ThemeToggleButton
            //  code="01.01.07"
            value="sistem-persampahan"
            label="Sistem Persampahan"
            disabled
           />
          </ToggleButtonGroup>
         </Box>
        </>
       )}
       <Collapse in={openTab}>
        <TabObject />
       </Collapse>
      </>
     )}
    </ContentPage>
   </DashboardLayout>
   <DialogComponent
    width={1000}
    dialogOpen={modalOpenAdd}
    dialogClose={handleModalClose}
    title="Tambah Topik"
    dialogFooter={dialogActionFooterAdd}
   >
    <FormTable />
   </DialogComponent>
   <DialogComponent
    noDivider={true}
    width={1000}
    dialogOpen={modalOpenCollapse}
    dialogClose={handleModalClose}
    dialogFooter={dialogActionFooter}
   >
    <SearchKP
     activeTab={activeTab}
     listData={listData}
     handleSearchTermUpdate={handleSearchTermUpdate}
     searchTerm={searchTab}
    />
   </DialogComponent>
  </>
 );
}
