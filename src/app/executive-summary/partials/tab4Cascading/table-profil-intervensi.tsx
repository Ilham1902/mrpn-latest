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

export default function TableProfilIntervensi({
 project,
 data,
}: {
 project: string;
 data: RoDto[];
}) {
 const columns = useMemo(
  () => [
   {
    accessorKey: "tahun",
    header: "Tahun",
    size: 200,
    enableColumnFilterModes: true,
    filterFns: "contains",
   },
   {
    accessorKey: "code",
    header: "Format Kode",
    enableColumnFilterModes: true,
    filterFns: "contains",
   },
   {
    accessorKey: "intervention",
    header: "Keterangan Intervensi",
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
    enableColumnFilterModes: false,
    Cell: (item: any) => {
     return item.row.original.kementrian.value;
    },
   },
   {
    accessorKey: "value",
    header: "Nomenklatur RO/Project",
   },
   {
    accessorKey: "target",
    header: "Target",
   },
   {
    accessorKey: "anggaran",
    header: "Anggaran",
    Cell: (item: any) => {
     const value = FormatIDR(item.row.original.alokasi);
     return <div style={{ textAlign: "right", width: "100%" }}>{value}</div>;
    },
   },
   {
    accessorKey: "sumber_anggaran",
    header: "Sumber Anggaran",
   },
  ],
  []
 );

 const table = useMaterialReactTable({
  columns,
  data,
  layoutMode: "grid",
  positionActionsColumn: "last",
  paginationDisplayMode: "pages",
  getRowId: (row) => row.id.toString(),
  initialState: {
   showGlobalFilter: false,
   showColumnFilters: false,
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
