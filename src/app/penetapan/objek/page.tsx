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

export default function PageTema({}) {
 const [modalOpenAdd, setModalOpenAdd] = React.useState(false);
 const [modalOpenCollapse, setModalOpenCollapse] = React.useState(false);
 const [openTab, setOpenTab] = React.useState(false);

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
     title="Penetapan Objek"
     noMinusMargin
     heightNoSet
     withCard={false}
     addButton={
      <AddButton
       title="Tambah Tema"
       filled
       noMargin
       onclick={handleModalOpenAdd}
      />
     }
    >
     {isEmpty ? (
      <EmptyState
       icon={<IconEmptyPage />}
       title="Halaman Tema Kosong"
       description="Silahkan isi konten halaman ini"
      />
     ) : (
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
    title="Tambah Tema"
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
