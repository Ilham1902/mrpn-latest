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
import { grey } from "@mui/material/colors";
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

 const handleModalOpenCollapse = () => {
  setModalOpenCollapse(true);
 };

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

 const pathname = usePathname();
 const flagPathnameTheme = [pathname === "/", pathname === "/tema"].includes(
  true
 );

 return (
  <>
   <DashboardLayout noOverflow>
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
           bgcolor={grey[800]}
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
            Objek Terpilih
           </Typography>
          </Stack>
          <Typography px={2} fontSize={16} fontWeight={600}>
           Penurunan Stunting
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
         title="Ganti Objek"
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
            onClick={handleModalOpenCollapse}
           />
           <ThemeToggleButton
            //  code="01.01.03"
            value="penurunan-kemiskinan"
            label="Penurunan Kemiskinan"
            onClick={handleModalOpenCollapse}
           />
           <ThemeToggleButton
            //  code="01.01.04"
            value="percepatan-transisi-energi"
            label="Percepatan Transisi Energi"
            disabled
           />
           <ThemeToggleButton
            //  code="01.01.05"
            value="peningkatan-pariwisata"
            label="Peningkatan Pariwisata"
            disabled
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
