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
import HeaderIdentifikasi from "./partials/header";
import AddButton from "@/app/components/buttonAdd";
import TableAdd from "./partials/table";
import CardGroup from "./partials/card-group";

export default function PageKepatuhan({}) {
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
     title="Kepatuhan"
     chipKp
     addButton={
      <AddButton
       title="Tambah Kepatuhan"
       noMargin
       filled
       onclick={handleModalOpenAdd}
      />
     }
    >
     <CardGroup />
    </ContentPage>
   </DashboardLayout>
   <DialogComponent
    dialogOpen={modalOpenView}
    dialogClose={handleModalClose}
    title="Detail Kepatuhan"
   >
    <FormTable mode="view" />
   </DialogComponent>
   <DialogComponent
    width={980}
    dialogOpen={modalOpenAdd}
    dialogClose={handleModalClose}
    title="Tambah Kepatuhan"
    dialogFooter={dialogActionFooter}
   >
    <TableAdd />
   </DialogComponent>
   <DialogComponent
    dialogOpen={modalOpenEdit}
    dialogClose={handleModalClose}
    title="Ubah Kepatuhan"
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
    title="Tambah Kepatuhan"
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
