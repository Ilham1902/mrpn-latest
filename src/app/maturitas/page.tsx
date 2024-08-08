"use client";

import ContentPage from "@/app/components/contents";
import React, { useMemo } from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import EmptyState from "@/app/components/empty";
import { IconEmptyPage } from "@/app/components/icons";
import ActionColumn from "@/app/components/actions/action";
import AddButton from "@/app/components/buttonAdd";
import { advancedTable } from "@/app/components/table";
import {
 DialogActions,
 Button,
 SelectChangeEvent,
 Alert,
 AlertTitle,
} from "@mui/material";
import {
 useMaterialReactTable,
 MaterialReactTable,
} from "material-react-table";
import DialogComponent from "@/app/components/dialog";
import FormTable from "./partials/form-table";
import { data } from "./setting";

export default function PagePeringatanDiniSaran({}) {
 const [modalOpenView, setModalOpenView] = React.useState(false);
 const [modalOpenAdd, setModalOpenAdd] = React.useState(false);
 const [modalOpenEdit, setModalOpenEdit] = React.useState(false);
 const [modalOpenDelete, setModalOpenDelete] = React.useState(false);

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

 const handleModalClose = () => {
  setModalOpenView(false);
  setModalOpenDelete(false);
  setModalOpenAdd(false);
  setModalOpenEdit(false);
 };

 const columns = useMemo(
  () => [
   {
    accessorKey: "klpBubl",
    header: "KLP BUBL",
    size: 200,
    enableColumnActions: false,
    enableSorting: false,
   },
   //    {
   //     id: "nilai_risiko",
   //     header: "Nilai Risiko",
   //     columns: [
   //      {
   //       accessorKey: "nr_sebelum",
   //       header: "Sebelum",
   //       size: 120,
   //       enableColumnActions: false,
   //      },
   //      {
   //       accessorKey: "nr_sesudah",
   //       header: "Sesudah",
   //       size: 120,
   //       enableColumnActions: false,
   //      },
   //     ],
   //    },
   {
    id: "maturitas",
    header: "Maturitas MRPN",
    columns: [
     {
      accessorKey: "mri_2023",
      header: "MRI 2023",
      size: 120,
      enableColumnActions: false,
     },
     {
      accessorKey: "mri_2024",
      header: "MRI 2024",
      size: 120,
      enableColumnActions: false,
     },
    ],
   },
   {
    accessorKey: "saran",
    header: "Saran/Masukan",
    size: 150,
    enableColumnActions: false,
    enableSorting: false,
   },
  ],
  []
 );

 type ColumnsType = {};

 const renderTopToolbar: ColumnsType = {
  renderTopToolbarCustomActions: () => null,
 };

 const table = useMaterialReactTable({
  columns,
  data,
  ...renderTopToolbar,
  ...advancedTable,
  //   enableRowActions: false,
  //   muiTableContainerProps: {
  //    sx: {
  //     maxWidth: "calc(100vw - 364px)",
  //     "&::-webkit-scrollbar": {
  //      height: "10px",
  //     },
  //    },
  //   },
  //   renderEmptyRowsFallback: ({ table }) => (
  //    <EmptyState
  //     icon={<IconEmptyData />}
  //     title="Data Kosong"
  //     description="Silahkan isi konten halaman ini"
  //    />
  //   ),
  displayColumnDefOptions: {
   "mrt-row-actions": {
    header: "",
    size: 140,
    Cell: () => (
     <ActionColumn
      viewClick={handleModalOpenView}
      editClick={handleModalOpenEdit}
      deleteClick={handleModalOpenDelete}
     />
    ),
   },
  },
  initialState: {
   showGlobalFilter: true,
  },
 });

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

 return (
  <>
   <DashboardLayout>
    <ContentPage title="Maturitas" chooseProject>
     <MaterialReactTable table={table} />
    </ContentPage>
   </DashboardLayout>
   <DialogComponent
    dialogOpen={modalOpenView}
    dialogClose={handleModalClose}
    title="Detail Maturitas"
   >
    <FormTable mode="view" />
   </DialogComponent>
   <DialogComponent
    dialogOpen={modalOpenEdit}
    dialogClose={handleModalClose}
    title="Ubah Maturitas"
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
