import React, { SetStateAction, useEffect, useMemo } from "react";
import {
  alpha,
  Box,
  Checkbox,
  Chip,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import theme from "@/theme";
import { RoDto } from "@/app/misc/rkp/rkpServiceModel";
import { FormatIDR } from "@/lib/utils/currency";
import {
  MaterialReactTable,
  MRT_RowSelectionState,
  useMaterialReactTable,
} from "material-react-table";
import { ExsumInterventionState } from "@/app/executive-summary/partials/tab4Cascading/cardIntervensi/cardIntervensiModel";
import { RowSelectionState } from "@tanstack/table-core";
import { advancedTable } from "@/app/components/table";

export default function TableProfilRoKunci({
  data,
  setState,
}: {
  data: RoDto[];
  setState: (value: SetStateAction<ExsumInterventionState>) => void;
}) {
  const columns = useMemo(
    () => [
      {
        accessorKey: "intervention",
        header: "Intervensi Kunci",
        size: 150,
        Cell: (item: any) => {
          const value =
            item.row.original.intervention == true
              ? "Intervensi Kunci"
              : "Reguler";
          const color =
            item.row.original.intervention == true ? "primary" : "default";
          return (
            <Stack height="100%" alignItems="flex-start">
              <Chip size="small" color={color} label={value} />
            </Stack>
          );
        },
      },
      {
        accessorKey: "tahun",
        header: "Tahun",
        size: 120,
        enableColumnFilterModes: true,
        filterFns: "contains",
        Cell: (item: any) => {
          return (
            <Stack height="100%" alignItems="flex-start">
              {item.row.original.tahun}
            </Stack>
          );
        },
      },
      {
        accessorKey: "code",
        header: "Format Kode",
        enableColumnFilterModes: true,
        filterFns: "contains",
        Cell: (item: any) => {
          return (
            <Stack height="100%" alignItems="flex-start">
              {item.row.original.code}
            </Stack>
          );
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
        Cell: (item: any) => {
          return (
            <Stack height="100%" alignItems="flex-start">
              {item.row.original.value}
            </Stack>
          );
        },
      },
      {
        accessorKey: "target",
        header: "Target",
        Cell: (item: any) => {
          return (
            <Stack height="100%" alignItems="flex-start">
              {item.row.original.target}
            </Stack>
          );
        },
      },
      {
        accessorKey: "anggaran",
        header: "Anggaran",

        Cell: (item: any) => {
          const value = FormatIDR(item.row.original.alokasi);
          return (
            <Stack
              width="100%"
              height="100%"
              alignItems="flex-end"
              justifyContent="flex-start"
            >
              {value}
            </Stack>
          );
        },
      },
      {
        accessorKey: "sumber_anggaran",
        header: "Sumber Anggaran",
        Cell: (item: any) => {
          return (
            <Stack height="100%" alignItems="flex-start">
              {item.row.original.sumber_anggaran}
            </Stack>
          );
        },
      },
    ],
    []
  );

  const [rowSelection, setRowSelection] = React.useState<MRT_RowSelectionState>(
    {}
  );

  useEffect(() => {
    if (Object.keys(rowSelection).length === 0) {
      const initSelected: MRT_RowSelectionState = {};
      data.map((y) => {
        if (y.intervention) {
          initSelected[y.id.toString()] = y.intervention;
        }
      });
      if (Object.keys(initSelected).length > 0) setRowSelection(initSelected);
    }
  }, [data.length]);

  useEffect(() => {
    setState((prev) => {
      const newListRO = [...prev.ro];
      for (let i = 0; i < newListRO.length; i++) {
        newListRO[i].intervention = false;
      }
      for (const prop in rowSelection) {
        const index = newListRO.findIndex((x) => x.id === parseInt(prop));
        if (index > -1) {
          newListRO[index].intervention = true;
        }
      }
      return {
        ...prev,
        ro: newListRO,
      };
    });
  }, [rowSelection]);

  const table = useMaterialReactTable({
    columns,
    data,
    ...advancedTable,
    enableRowActions: false,
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    state: { rowSelection },
    getRowId: (originalRow) => originalRow.id.toString(),
    layoutMode: "grid",
    positionActionsColumn: "last",
    paginationDisplayMode: "pages",
    initialState: {
      showGlobalFilter: true,
      showColumnFilters: true,
    },
  });

  return (
    <Box
      className="table-collapsed perlakuan-risiko"
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
