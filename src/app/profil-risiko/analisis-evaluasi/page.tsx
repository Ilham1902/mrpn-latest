"use client";

import ContentPage from "@/app/components/contents";
import React, { useMemo } from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import {
 Box,
 Button,
 Checkbox,
 Chip,
 DialogActions,
 Table,
 TableBody,
 TableCell,
 TableContainer,
 TableHead,
 TableRow,
} from "@mui/material";
import DialogComponent from "@/app/components/dialog";
import FormTable from "./partials/form-table";
import MRTAnalisis from "./partials/mrt";
import AddButton from "@/app/components/buttonAdd";
import {
 MRT_ColumnDef,
 MaterialReactTable,
 useMaterialReactTable,
} from "material-react-table";
import ActionColumn from "@/app/components/actions/action";
import { advancedTable } from "@/app/components/table";
import { orange, red, green } from "@mui/material/colors";
import { IdentifikasiType, data } from "./setting";
import search from "@/app/penetapan/objek/partials/search";
import theme from "@/theme";

type ColumnsType = {};

const dataSub = [
 {
  id: 1,
  ro: "Suplementasi gizi mikro pada balita",
  target: "72,42",
  satuan: "poin",
  anggaran: "Kemen PUPR",
  fisik: "Kemen PUPR",
 },
 {
  id: 2,
  ro: "	Tata laksana balita gizi buruk",
  target: "33",
  satuan: "%",
  anggaran: "Kemen PPN",
  fisik: "Kemen PPN",
 },
 {
  id: 3,
  ro: "Penanggulangan kurang energi kronik (KEK) pada ibu hamil",
  target: "moderat",
  satuan: "indeks",
  anggaran: "Kemenkeu",
  fisik: "Kemenkeu",
 },
 {
  id: 4,
  ro: "Suplementasi gizi mikro pada balita",
  target: "72,42",
  satuan: "poin",
  anggaran: "Kemen PUPR",
  fisik: "Kemen PUPR",
 },
 {
  id: 5,
  ro: "	Tata laksana balita gizi buruk",
  target: "33",
  satuan: "%",
  anggaran: "Kemen PPN",
  fisik: "Kemen PPN",
 },
 {
  id: 6,
  ro: "Penanggulangan kurang energi kronik (KEK) pada ibu hamil",
  target: "moderat",
  satuan: "indeks",
  anggaran: "Kemenkeu",
  fisik: "Kemenkeu",
 },
 {
  id: 7,
  ro: "Suplementasi gizi mikro pada balita",
  target: "72,42",
  satuan: "poin",
  anggaran: "Kemen PUPR",
 },
 {
  id: 8,
  ro: "	Tata laksana balita gizi buruk",
  target: "33",
  satuan: "%",
  anggaran: "Kemen PPN",
  fisik: "Kemen PPN",
 },
 {
  id: 9,
  ro: "Penanggulangan kurang energi kronik (KEK) pada ibu hamil",
  target: "moderat",
  satuan: "indeks",
  anggaran: "Kemenkeu",
  fisik: "Kemenkeu",
 },
];

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
        enableColumnActions: false,
        size: 350,
       },
       {
        accessorKey: "kategori",
        header: "Kategori Risiko",
        enableColumnActions: false,
       },
       //  {
       //   accessorKey: "penyebab",
       //   header: "Penyebab",
       //   size: 250,
       //   enableColumnActions: false,
       //  },
       //  {
       //   accessorKey: "dampak",
       //   header: "Dampak",
       //   size: 250,
       //   enableColumnActions: false,
       //  },
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
        size: 120,
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
        size: 120,
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
        size: 120,
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
        size: 160,
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
        size: 160,
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
  initialState: {
   showGlobalFilter: true,
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
  filterFromLeafRows: true,
  enableExpanding: true,
  // enableExpandAll: false,
  renderDetailPanel: ({ row }) => (
   <Box bgcolor={theme.palette.primary.light}>
    <TableContainer
     sx={{
      maxHeight: 200,
      width: "100%",
      "&::-webkit-scrollbar": {
       width: "3px",
      },
     }}
    >
     <Table stickyHeader size="small">
      <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
       <TableRow>
        <TableCell sx={{ width: 30 }}></TableCell>
        <TableCell>Nomenklatur RO</TableCell>
        <TableCell>Target</TableCell>
        <TableCell>Satuan</TableCell>
        <TableCell>Realisasi Anggaran</TableCell>
        <TableCell>Realisasi Fisik</TableCell>
       </TableRow>
      </TableHead>
      <TableBody>
       {dataSub.map((row) => (
        <TableRow key={row.id}>
         <TableCell>
          <Checkbox size="small" />
         </TableCell>
         <TableCell>{row.ro}</TableCell>
         <TableCell>{row.target}</TableCell>
         <TableCell>{row.satuan}</TableCell>
         <TableCell>{row.anggaran}</TableCell>
         <TableCell>{row.fisik}</TableCell>
        </TableRow>
       ))}
      </TableBody>
     </Table>
    </TableContainer>
   </Box>
  ),
 });

 return (
  <>
   <DashboardLayout>
    <ContentPage title="Analisis & Evaluasi Risiko" chipKp>
     <Box
      sx={{
       ".MuiTableRow-root": {
        ".MuiTableCell-root": {
         ".MuiCollapse-root": {
          width: "100%",
         },
        },
       },
      }}
     >
      <MaterialReactTable table={table} />
     </Box>
    </ContentPage>
   </DashboardLayout>
   <DialogComponent
    dialogOpen={modalOpenView}
    dialogClose={handleModalClose}
    title="Detail Analisis & Evaluasi Risiko"
   >
    <FormTable mode="view" />
   </DialogComponent>
   <DialogComponent
    dialogOpen={modalOpenAdd}
    dialogClose={handleModalClose}
    title="Tambah Analisis & Evaluasi Risiko"
    dialogFooter={dialogActionFooter}
   >
    <FormTable mode="add" />
   </DialogComponent>
   <DialogComponent
    dialogOpen={modalOpenEdit}
    dialogClose={handleModalClose}
    title="Ubah Analisis & Evaluasi Risiko"
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
