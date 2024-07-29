"use client";

import ContentPage from "@/app/components/contents";
import React, { useMemo } from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import { advancedTable } from "@/app/components/table";
import { Box, Button, Chip, DialogActions, Grow, Tooltip } from "@mui/material";
import {
 useMaterialReactTable,
 MaterialReactTable,
 MRT_ColumnDef,
} from "material-react-table";
import ActionColumn from "@/app/components/actions/action";
import { data, type PemantauanType } from "./setting";
import DialogComponent from "@/app/components/dialog";
import FormTable from "./partials/form-table";
import { green, grey, orange, red } from "@mui/material/colors";
import { IconFA } from "@/app/components/icons/icon-fa";
import Image from "next/image";

export default function PagePemantauan({}) {
 const [modalOpenView, setModalOpenView] = React.useState(false);
 const [modalOpenAdd, setModalOpenAdd] = React.useState(false);
 const [modalOpenEdit, setModalOpenEdit] = React.useState(false);
 const [modalOpenDelete, setModalOpenDelete] = React.useState(false);
 const [modalOpenBukti, setModalOpenBukti] = React.useState(false);

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
 const handleModalOpenBukti = () => {
  setModalOpenBukti(true);
 };

 const handleModalClose = () => {
  setModalOpenView(false);
  setModalOpenDelete(false);
  setModalOpenAdd(false);
  setModalOpenEdit(false);
  setModalOpenBukti(false);
 };

 const columns = useMemo<MRT_ColumnDef<PemantauanType>[]>(
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
        muiTableHeadCellProps: {
         align: "center",
        },
        muiTableBodyCellProps: {
         align: "center",
        },
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
        size: 150,
        enableColumnActions: false,
        muiTableHeadCellProps: {
         align: "center",
         sx: {
          bgcolor: `${grey[100]} !important`,
          ".Mui-TableHeadCell-Content-Wrapper": {
           whiteSpace: "wrap",
           textAlign: "left",
          },
         },
        },
        muiTableBodyCellProps: {
         align: "center",
        },
       },
      ],
     },
    ],
   },
   {
    id: "perlakuan_risiko",
    header: "Perlakuan Risiko",
    columns: [
     {
      accessorKey: "keputusan",
      header: "Keputusan Perlakuan Risiko",
      enableColumnActions: false,
     },
     {
      accessorKey: "deskripsi",
      header: "Deskripsi Perlakuan Risiko",
      enableColumnActions: false,
      size: 300,
     },
     {
      accessorKey: "waktu",
      header: "Waktu Rencana Perlakuan Risiko",
      enableColumnActions: false,
     },
     {
      accessorKey: "penanggungjawab",
      header: "Penanggung Jawab",
      enableColumnActions: false,
      size: 220,
     },
    ],
   },
   {
    id: "risiko_residual_harapan",
    header: "Risiko Residual Harapan",
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
    ],
   },
   {
    accessorKey: "buktiDukung",
    header: "Bukti Dukung",
    enableColumnActions: false,
    size: 180,
    Cell: ({ renderedCellValue }: { renderedCellValue: any }) => (
     <>
      {renderedCellValue ? (
       <Tooltip
        title="Klik untuk lihat Bukti Dukung"
        TransitionComponent={Grow}
       >
        <IconFA
         name={"check-circle"}
         size={24}
         color={green[700]}
         onclick={handleModalOpenBukti}
         sx={{ cursor: "pointer" }}
        />
       </Tooltip>
      ) : (
       <IconFA name="xmark-circle" size={24} color={red[700]} />
      )}
     </>
    ),
    muiTableHeadCellProps: {
     align: "center",
     sx: {
      borderLeft: `1px solid ${grey[300]}`,
      ".Mui-TableHeadCell-Content-Wrapper": {
       whiteSpace: "wrap",
       textAlign: "left",
      },
      "&:before": {
       bgcolor: `${grey[100]} !important`,
      },
     },
    },
    muiTableBodyCellProps: {
     align: "center",
    },
   },
   {
    accessorKey: "status",
    header: "Status Pelaksanaan",
    enableColumnActions: false,
    size: 180,
    Cell: ({ renderedCellValue }: { renderedCellValue: any }) => (
     <Chip
      icon={
       renderedCellValue === "Belum" ? (
        <IconFA name="xmark" size={12} />
       ) : renderedCellValue === "Proses" ? (
        <IconFA name="hourglass-start" size={12} />
       ) : (
        <IconFA name="check" size={12} />
       )
      }
      color={
       renderedCellValue === "Belum"
        ? "error"
        : renderedCellValue === "Proses"
        ? "warning"
        : "success"
      }
      sx={{
       minWidth: 80,
       borderWidth: "2px",
       borderStyle: "solid",
       "&.MuiChip-root": { gap: 1, px: 1.5 },
       "& .MuiChip-label": {
        fontWeight: 600,
        px: 0,
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
    muiTableHeadCellProps: {
     align: "center",
     sx: {
      borderLeft: `1px solid ${grey[300]}`,
      ".Mui-TableHeadCell-Content-Wrapper": {
       whiteSpace: "wrap",
       textAlign: "left",
      },
      "&:before": {
       bgcolor: `${grey[100]} !important`,
      },
     },
    },
    muiTableBodyCellProps: {
     align: "center",
    },
   },
  ],
  []
 );

 //  type ColumnsType = {};

 //  const renderTopToolbar: ColumnsType = {
 //   renderTopToolbarCustomActions: () => (
 //    <AddButton onclick={handleModalOpenAdd} title="Tambah Pemantauan" />
 //   ),
 //  };

 const table = useMaterialReactTable({
  columns,
  data,
  ...advancedTable,
  // ...renderTopToolbar,
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
   sx: {
    bgcolor: grey[100],
    justifyContent: "center",
    borderLeft: `1px solid ${grey[300]}`,
    borderBottom: "none",
   },
  },
  displayColumnDefOptions: {
   "mrt-row-actions": {
    header: "Aksi",
    muiTableHeadCellProps: {
     align: "center",
     sx: {
      borderLeft: `1px solid ${grey[300]}`,
      "&:before": {
       bgcolor: `${grey[100]} !important`,
      },
     },
    },
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
   columnPinning: { right: ["buktiDukung", "status", "mrt-row-actions"] },
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
    <ContentPage title="Pemantauan" chipKp>
     <Box className="table-sticky-horizontal">
      <MaterialReactTable table={table} />
     </Box>
    </ContentPage>
   </DashboardLayout>
   <DialogComponent
    dialogOpen={modalOpenView}
    dialogClose={handleModalClose}
    title="Detail Pemantauan"
   >
    <FormTable mode="view" />
   </DialogComponent>
   <DialogComponent
    dialogOpen={modalOpenAdd}
    dialogClose={handleModalClose}
    title="Tambah Pemantauan"
    dialogFooter={dialogActionFooter}
   >
    <FormTable mode="add" />
   </DialogComponent>
   <DialogComponent
    dialogOpen={modalOpenEdit}
    dialogClose={handleModalClose}
    title="Ubah Pemantauan"
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
   <DialogComponent
    width={240}
    dialogOpen={modalOpenBukti}
    dialogClose={handleModalClose}
    title="Bukti Dukung"
   >
    <Image
     width={0}
     height={0}
     sizes="100vw"
     style={{ width: "100%", height: "auto" }}
     src="https://res.cloudinary.com/caturteguh/image/upload/v1722221300/mrpn/buktidukung_wo09q4.png"
     alt="MRPN 2024"
     priority
    />
   </DialogComponent>
  </>
 );
}
