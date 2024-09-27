import { RoDto } from "@/app/misc/rkp/rkpServiceModel";
import { Box, Chip } from "@mui/material";
import {
 MaterialReactTable,
 MRT_RowSelectionState,
 useMaterialReactTable,
} from "material-react-table";
import React, { SetStateAction, useMemo } from "react";
import { FormatIDR } from "@/lib/utils/currency";
import { ExsumInterventionState } from "@/app/executive-summary/partials/tab4Cascading/cardIntervensi/cardIntervensiModel";
import { advancedTable } from "@/app/components/table";

export default function TableProfilIntervensi({ data }: { data: RoDto[] }) {
 const columns = useMemo(
  () => [
   {
    accessorKey: "tahun",
    header: "Tahun",
    size: 105,
    enableColumnFilterModes: true,
    filterFns: "contains",
   },
   {
    accessorKey: "code",
    header: "Format Kode",
    size: 140,
    enableColumnFilterModes: true,
    filterFns: "contains",
   },
   {
    accessorKey: "intervention",
    header: "Keterangan Intervensi",
    size: 140,
    filterFns: "contains",
    Cell: (item: any) => {
     const value =
      item.row.original.intervention == true ? "Intervensi Kunci" : "Reguler";
     const color =
      item.row.original.intervention == true ? "primary" : "default";
     return <Chip size="small" color={color} label={value} />;
    },
   },
   {
    accessorKey: "kementrian_id",
    header: "Penanggungjawab",
    enableColumnFilterModes: true,
    Cell: (item: any) => {
     return item.row.original.kementrian.value;
    },
   },
   {
    accessorKey: "value",
    header: "Nomenklatur RO/Project",
    size: 350,
   },
   {
    accessorKey: "target",
    header: "Target",
    size: 140,
   },
   {
    accessorKey: "anggaran",
    header: "Anggaran",
    size: 140,
    Cell: (item: any) => {
     const value = FormatIDR(item.row.original.alokasi);
     return <div style={{ textAlign: "right", width: "100%" }}>{value}</div>;
    },
   },
   {
    accessorKey: "sumber_anggaran",
    header: "Sumber Anggaran",
    size: 170,
   },
  ],
  []
 );

 const table = useMaterialReactTable({
  columns,
  data,
  ...advancedTable,
  enableStickyHeader: true,
  enableStickyFooter: true,
  muiTableContainerProps: { sx: { maxHeight: "28vh" } },
  getRowId: (row) => row.id.toString(),
  //   initialState: {
  //    showGlobalFilter: false,
  //    showColumnFilters: false,
  //   },
  initialState: {
   showGlobalFilter: true,
  },
 });

 return (
  <Box
   className="table-collapsed card-level-3"
   sx={{
    ".MuiPaper-root": {
     m: 0,
     boxShadow: "none",
    },
   }}
  >
   <MaterialReactTable key={data.length} table={table} />
  </Box>
 );
}
