"use client";

import ContentPage from "@/app/components/contents";
import React from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import {
 Box,
 Button,
 Chip,
 DialogActions,
 Grow,
 Stack,
 Tooltip,
 Typography,
} from "@mui/material";
import DialogComponent from "@/app/components/dialog";
import FormTable from "./partials/form-table";
import MRTIdentifikasi from "./partials/mrt";
import theme from "@/theme";
import { grey } from "@mui/material/colors";

const CustomChip = ({ title, value }: { title: string; value: string }) => {
 return (
  <Chip
   variant="outlined"
   label={
    <>
     <Stack direction="row" alignItems="center">
      <Stack
       direction="row"
       bgcolor={grey[700]}
       px={2}
       alignItems="center"
       height="34px"
       sx={{
        borderTopLeftRadius: 24,
        borderBottomLeftRadius: 24,
       }}
      >
       <Typography fontSize={13} color="white" fontWeight={600} lineHeight={1}>
        {title}
       </Typography>
      </Stack>
      <Box
       sx={{
        [theme.breakpoints.up("sm")]: {
         display: "none",
        },
        [theme.breakpoints.down("sm")]: {
         display: "block",
        },
       }}
      >
       {/* {nameOfKp.length >= 35 ? (
            <Tooltip title={nameOfKp} followCursor TransitionComponent={Grow}>
             <Typography
              aria-owns={open ? "mouse-over-popover" : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
              px={1.5}
              fontSize={13}
              fontWeight={600}
             >
              {nameOfKp.substring(0, 35) + "..."}
             </Typography>
            </Tooltip>
           ) : (
            <Typography px={1.5} fontSize={13} fontWeight={600}>
             {nameOfKp}
            </Typography>
           )} */}
      </Box>
      <Box
       sx={{
        [theme.breakpoints.up("sm")]: {
         display: "block",
        },
        [theme.breakpoints.down("sm")]: {
         display: "none",
        },
       }}
      >
       <Typography px={3} fontSize={13} fontWeight={800}>
        {value}
       </Typography>
      </Box>
     </Stack>
    </>
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
 );
};

export default function PageIdentifikasi({}) {
 const [modalOpenView, setModalOpenView] = React.useState(false);
 const [modalOpenAdd, setModalOpenAdd] = React.useState(false);
 const [modalOpenEdit, setModalOpenEdit] = React.useState(false);
 const [modalOpenDelete, setModalOpenDelete] = React.useState(false);
 const [modalOpenAddPeristiwa, setModalOpenAddPeristiwa] =
  React.useState(false);

 const handleModalOpenView = () => {
  setModalOpenView(true);
 };
 const handleModalOpenDelete = () => {
  setModalOpenDelete(true);
 };
 const handleModalOpenAdd = () => {
  setModalOpenAdd(true);
 };
 const handleModalOpenEdit = () => {
  setModalOpenEdit(true);
 };
 const handleModalOpenAddPeristiwa = () => {
  setModalOpenAddPeristiwa(true);
 };

 const handleModalClose = () => {
  setModalOpenView(false);
  setModalOpenDelete(false);
  setModalOpenAdd(false);
  setModalOpenEdit(false);
 };

 const handleModalClosePeristiwa = () => {
  setModalOpenAddPeristiwa(false);
 };

 const dialogActionFooter = (
  <DialogActions sx={{ p: 2, px: 3 }}>
   <Button onClick={handleModalClose}>Batal</Button>
   <Button variant="contained" type="submit">
    Simpan
   </Button>
  </DialogActions>
 );

 const dialogActionDeleteFooter = (
  <DialogActions sx={{ p: 2, px: 3 }}>
   <Button onClick={handleModalClose}>Batal</Button>
   <Button variant="contained" color="error" type="submit">
    Hapus
   </Button>
  </DialogActions>
 );

 const dialogActionFooterPeristiwa = (
  <DialogActions sx={{ p: 2, px: 3 }}>
   <Button onClick={handleModalClosePeristiwa}>Batal</Button>
   <Button variant="contained" type="submit">
    Simpan
   </Button>
  </DialogActions>
 );

 return (
  <>
   <DashboardLayout>
    <ContentPage
     title="Identifikasi Risiko"
     chipKp
     identificationInfo={
      <Stack direction="row" gap={1}>
       <CustomChip title="Risiko" value="4" />
       <CustomChip title="Perlakuan" value="8" />
       <CustomChip title="Realisasi Perlakuan" value="37,5%" />
      </Stack>
     }
    >
     <MRTIdentifikasi
      viewOnly
      handleModalOpenView={handleModalOpenView}
      handleModalOpenDelete={handleModalOpenDelete}
      handleModalOpenAdd={handleModalOpenAdd}
      handleModalOpenEdit={handleModalOpenEdit}
     />
    </ContentPage>
   </DashboardLayout>
   <DialogComponent
    dialogOpen={modalOpenView}
    dialogClose={handleModalClose}
    title="Detail Identifikasi Risiko"
   >
    <FormTable mode="view" />
   </DialogComponent>
   <DialogComponent
    dialogOpen={modalOpenAdd}
    dialogClose={handleModalClose}
    title="Tambah Identifikasi Risiko"
    dialogFooter={dialogActionFooter}
   >
    <FormTable mode="add" />
   </DialogComponent>
   <DialogComponent
    dialogOpen={modalOpenEdit}
    dialogClose={handleModalClose}
    title="Ubah Identifikasi Risiko"
    dialogFooter={dialogActionFooter}
   >
    <FormTable
     mode="edit"
     handleModalOpenAddPeristiwa={handleModalOpenAddPeristiwa}
    />
   </DialogComponent>
   <DialogComponent
    width={600}
    dialogOpen={modalOpenAddPeristiwa}
    dialogClose={handleModalClosePeristiwa}
    title="Tambah Peristiwa Risiko Baru"
    dialogFooter={dialogActionFooterPeristiwa}
   >
    <FormTable mode="addPeristiwa" />
   </DialogComponent>
   <DialogComponent
    width={240}
    dialogOpen={modalOpenDelete}
    dialogClose={handleModalClose}
    title="Hapus Data"
    dialogFooter={dialogActionDeleteFooter}
   >
    Anda yakin akan menghapus data ini?
   </DialogComponent>
  </>
 );
}
