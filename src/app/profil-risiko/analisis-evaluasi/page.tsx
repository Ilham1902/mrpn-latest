"use client";

import ContentPage from "@/app/components/contents";
import React, { useMemo } from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import { advancedTable } from "@/app/components/table";
import { Box, Button, Chip, DialogActions } from "@mui/material";
import {
 useMaterialReactTable,
 MaterialReactTable,
 MRT_ColumnDef,
} from "material-react-table";
import ActionColumn from "@/app/components/actions/action";
import AddButton from "@/app/components/buttonAdd";
import { data, type IdentifikasiType } from "./setting";
import DialogComponent from "@/app/components/dialog";
import FormTable from "./partials/form-table";
import { green, grey, orange, red } from "@mui/material/colors";

export default function PageAnalisisEvaluasi({}) {
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

 const columns = useMemo<MRT_ColumnDef<IdentifikasiType>[]>(
  () => [
   {
    id: "penilaian_risiko",
    header: "Penilaian Risiko",
    columns: [
     {
      id: "identifikasi_risiko",
      header: "Identifikasi Risiko",
      columns: [
       {
        accessorKey: "peristiwa",
        header: "Peristiwa Risiko",
        size: 250,
        enableColumnActions: false,
       },
       {
        accessorKey: "kategori",
        header: "Kategori Risiko",
        enableColumnActions: false,
       },
       {
        accessorKey: "penyebab",
        header: "Penyebab",
        size: 250,
        enableColumnActions: false,
       },
       {
        accessorKey: "dampak",
        header: "Dampak",
        size: 250,
        enableColumnActions: false,
       },
      ],
     },
     {
      id: "analisis_evaluasi_risiko",
      header: "Analisis & Evaluasi Risiko",
      columns: [
       {
        accessorKey: "lk",
        header: "LK",
        enableColumnActions: false,
        muiTableHeadCellProps: {
         align: "center",
        },
        muiTableBodyCellProps: {
         align: "center",
        },
       },
       {
        accessorKey: "ld",
        header: "LD",
        enableColumnActions: false,
        muiTableHeadCellProps: {
         align: "center",
        },
        muiTableBodyCellProps: {
         align: "center",
        },
       },
       {
        accessorKey: "br",
        header: "BR",
        enableColumnActions: false,
        muiTableHeadCellProps: {
         align: "center",
        },
        muiTableBodyCellProps: {
         align: "center",
        },
       },
       {
        accessorKey: "level",
        header: "Level Risiko",
        enableColumnActions: false,
        Cell: ({ renderedCellValue }: { renderedCellValue: any }) => (
         <Chip
          color={
           renderedCellValue === "Sangat Tinggi"
            ? "error"
            : renderedCellValue === "Tinggi"
            ? "warning"
            : "success"
          }
          sx={{
           minWidth: 80,
           borderWidth: "2px",
           borderStyle: "solid",
           "& .MuiChip-label": {
            fontWeight: 600,
           },
           "&.MuiChip-colorWarning": {
            bgcolor: orange[100],
            borderColor: orange[600],
            color: orange[900],
           },
           "&.MuiChip-colorError": {
            bgcolor: red[100],
            borderColor: red[400],
            color: red[900],
           },
           "&.MuiChip-colorSuccess": {
            bgcolor: green[100],
            borderColor: green[400],
            color: green[900],
           },
          }}
          label={renderedCellValue}
         />
        ),
       },
       {
        accessorKey: "prioritas",
        header: "Prioritas Risiko",
        enableColumnActions: false,
        muiTableHeadCellProps: {
         align: "center",
        },
        muiTableBodyCellProps: {
         align: "center",
        },
       },
      ],
     },
    ],
   },
  ],
  []
 );

 type ColumnsType = {};

 const renderTopToolbar: ColumnsType = {
  renderTopToolbarCustomActions: () => (
   <AddButton onclick={handleModalOpenAdd} title="Tambah Analisis & Evaluasi" />
  ),
 };

 const table = useMaterialReactTable({
  columns,
  data,
  ...renderTopToolbar,
  ...advancedTable,
  //   enableRowActions: false,
  muiTableContainerProps: {
   sx: {
    maxWidth: "calc(100vw - 348px)",
    overflowX: "auto",
    transition: "max-width 500ms ease-in-out",
    "&::-webkit-scrollbar": {
     height: "10px",
    },
   },
  },
  muiTableHeadCellProps: {
   sx: { bgcolor: grey[100], border: `1px solid ${grey[300]}` },
  },
  displayColumnDefOptions: {
   "mrt-row-actions": {
    header: "",
    size: 150,
    Cell: () => (
     <ActionColumn
      viewClick={handleModalOpenView}
      editClick={handleModalOpenEdit}
      deleteClick={handleModalOpenDelete}
     />
    ),
   },
  },
  enableColumnPinning: true,
  layoutMode: "grid-no-grow",
  initialState: {
   columnPinning: { right: ["mrt-row-actions"] },
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
    <ContentPage title="Analisis & Evaluasi Risiko" chipKp>
     <Box className="table-sticky-horizontal">
      <MaterialReactTable table={table} />
     </Box>
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
