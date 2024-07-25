import React, { useMemo } from "react";
import { advancedTable } from "@/app/components/table";
import { Box, Chip } from "@mui/material";
import {
 useMaterialReactTable,
 MaterialReactTable,
 MRT_ColumnDef,
} from "material-react-table";
import ActionColumn from "@/app/components/actions/action";
import AddButton from "@/app/components/buttonAdd";
import { data, type PerlakuanType } from "../setting";
import { green, grey, orange, red } from "@mui/material/colors";

export default function MRTPerlakuanComplete({
 handleModalOpenView,
 handleModalOpenDelete,
 handleModalOpenAdd,
 handleModalOpenEdit,
 viewOnly,
 renderCaption,
}: {
 handleModalOpenView?: () => void;
 handleModalOpenDelete?: () => void;
 handleModalOpenAdd?: () => void;
 handleModalOpenEdit?: () => void;
 viewOnly?: boolean;
 renderCaption?: React.ReactNode;
}) {
 const columns = useMemo<MRT_ColumnDef<PerlakuanType>[]>(
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
      accessorKey: "lkRRH",
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
      accessorKey: "ldRRH",
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
      accessorKey: "brRRH",
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
      accessorKey: "levelRRH",
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
    ],
   },
  ],
  []
 );

 type ColumnsType = {};

 const renderTopToolbar: ColumnsType = {
  renderTopToolbarCustomActions: () => (
   <AddButton onclick={handleModalOpenAdd} title="Tambah Perlakuan" />
  ),
 };

 const actionRight = {
  initialState: {
   columnPinning: { right: ["mrt-row-actions"] },
   showGlobalFilter: true,
  },
 };

 const table = useMaterialReactTable({
  columns,
  data,
  ...(viewOnly ? null : renderTopToolbar),
  ...advancedTable,
  muiTableContainerProps: {
   sx: {
    maxWidth: viewOnly ? "calc(100vw - 148px)" : "calc(100vw - 348px)",
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
    border: `1px solid ${grey[300]}`,
    justifyContent: "center",
   },
  },
  displayColumnDefOptions: {
   "mrt-row-actions": {
    header: "",
    size: viewOnly ? 0 : 150,
    Cell: () => (
     <ActionColumn
      viewClick={handleModalOpenView}
      editClick={handleModalOpenEdit}
      deleteClick={handleModalOpenDelete}
     />
    ),
   },
  },
  enableColumnPinning: false,
  layoutMode: "grid-no-grow",
  ...(viewOnly ? null : actionRight),
  renderCaption: () => renderCaption,
 });

 return (
  <Box
   className="table-sticky-horizontal"
   sx={{
    ".MuiPaper-root": {
     "& > .MuiBox-root": {
      "&:first-of-type": {
       display: viewOnly ? "none" : "inherit",
      },
     },
    },
   }}
  >
   <MaterialReactTable table={table} />
  </Box>
 );
}
