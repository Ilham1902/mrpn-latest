import React, {SetStateAction, useEffect, useMemo} from "react";
import {
  Box,
  Checkbox, Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import theme from "@/theme";
import {RoDto} from "@/app/misc/rkp/rkpServiceModel";
import {FormatIDR} from "@/lib/utils/currency";
import {MaterialReactTable, MRT_RowSelectionState, useMaterialReactTable} from "material-react-table";
import {
  ExsumInterventionState
} from "@/app/executive-summary/partials/tab4Cascading/cardIntervensi/cardIntervensiModel";
import {RowSelectionState} from "@tanstack/table-core";

export default function TableProfilRoKunci(
  {
    data,
    setState
  }: {
    data: RoDto[]
    setState:(value: SetStateAction<ExsumInterventionState>) => void
  }
) {

  const columns = useMemo(
    () => [
      {
        accessorKey: "tahun",
        header: "Tahun",
        size: 200,
        enableColumnFilterModes: true,
        filterFns: 'contains'
      },
      {
        accessorKey: "code",
        header: "Format Kode",
        enableColumnFilterModes: true,
        filterFns: 'contains'
      },
      {
        accessorKey: "kementrian_id",
        header: "Penanggungjawab",
        enableColumnFilterModes: false,
        Cell: (item: any) => {
          return item.row.original.kementrian.value
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
          const value = FormatIDR(item.row.original.alokasi)
          return (<div style={{textAlign: "right", width: "100%"}}>{value}</div>)
        },
      },
      {
        accessorKey: "sumber_anggaran",
        header: "Sumber Anggaran",
      }
    ], []
  );

  const [rowSelection, setRowSelection] = React.useState<MRT_RowSelectionState>({});

  useEffect(() => {
    if (Object.keys(rowSelection).length === 0){
      const initSelected:MRT_RowSelectionState = {}
      data.map((y) => {
        if (y.intervention){
          initSelected[(y.id.toString())] = y.intervention
        }
      });
      if (Object.keys(initSelected).length > 0) setRowSelection(initSelected)
    }
  }, [data.length]);

  useEffect(() => {
    setState((prev) => {
      const newListRO = [...prev.ro]
      for (let i = 0; i < newListRO.length; i++) {
        newListRO[i].intervention = false
      }
      for (const prop in rowSelection) {
        const index = newListRO.findIndex(x => x.id === parseInt(prop))
        if (index > -1){
          newListRO[index].intervention = true
         }
      }
      return {
        ...prev,
        ro:newListRO
      }
    })
  }, [rowSelection]);

  const table = useMaterialReactTable({
    columns,
    data,
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    state: { rowSelection },
    getRowId: (originalRow) => originalRow.id.toString(),
    layoutMode: "grid",
    positionActionsColumn: "last",
    paginationDisplayMode: "pages",
    initialState: {
      showGlobalFilter: true,
      showColumnFilters: true
    }
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
      <MaterialReactTable key={data.length} table={table}/>
    </Box>
  );
}
