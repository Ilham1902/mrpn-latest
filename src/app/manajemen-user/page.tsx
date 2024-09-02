/* eslint-disable react/display-name */
"use client";

import ContentPage from "@/app/components/contents";
import React from "react";
import DashboardLayout from "@/components/layouts/layout";
import {
 MaterialReactTable,
 useMaterialReactTable,
} from "material-react-table";
import { advancedTable } from "@/app/components/table";
import { columns, data } from "./setting";
import ActionColumn from "@/components/actions/action";
import AddButton from "@/app/components/buttonAdd";
import DialogComponent from "@/components/dialog";
import { DialogActions, Button } from "@mui/material";
import FormTable from "./partials/form-table";

type ColumnsType = {};

export default function PageUserManagement() {
 const [modalOpenView, setModalOpenView] = React.useState(false);
 const [modalOpenAdd, setModalOpenAdd] = React.useState(false);
 const [modalOpenEdit, setModalOpenEdit] = React.useState(false);
 const [modalOpenDelete, setModalOpenDelete] = React.useState(false);

 const handleModalOpenAdd = () => {
  setModalOpenAdd(true);
 };

 const handleModalClose = () => {
  setModalOpenView(false);
  setModalOpenDelete(false);
  setModalOpenAdd(false);
  setModalOpenEdit(false);
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

 const renderTopToolbar: ColumnsType = {
  renderTopToolbarCustomActions: () => (
   <AddButton title="Tambah User" onclick={handleModalOpenAdd} />
  ),
 };
 const table = useMaterialReactTable({
  columns,
  data,
  ...renderTopToolbar,
  ...advancedTable,
  displayColumnDefOptions: {
   "mrt-row-actions": {
    header: "",
    size: 50,
    Cell: () => <ActionColumn editUrl="/manajemen-user/role" />,
   },
  },
 });

 return (
  <>
   <DashboardLayout>
    <ContentPage title="Manajemen User">
     <MaterialReactTable table={table} />
    </ContentPage>
   </DashboardLayout>
   <DialogComponent
    width={520}
    dialogOpen={modalOpenView}
    dialogClose={handleModalClose}
    title="Detail User"
   >
    <FormTable mode="view" />
   </DialogComponent>
   <DialogComponent
    width={520}
    dialogOpen={modalOpenAdd}
    dialogClose={handleModalClose}
    title="Tambah User"
    dialogFooter={dialogActionFooter}
   >
    <FormTable mode="add" />
   </DialogComponent>
   <DialogComponent
    width={520}
    dialogOpen={modalOpenEdit}
    dialogClose={handleModalClose}
    title="Ubah User"
    dialogFooter={dialogActionFooter}
   >
    <FormTable mode="edit" />
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
