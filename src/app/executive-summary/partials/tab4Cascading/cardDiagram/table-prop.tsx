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
import {ProPDto, RoDto} from "@/app/misc/rkp/rkpServiceModel";
import {FormatIDR} from "@/lib/utils/currency";
import {MaterialReactTable, MRT_RowSelectionState, useMaterialReactTable} from "material-react-table";
import {
  ExsumInterventionState
} from "@/app/executive-summary/partials/tab4Cascading/cardIntervensi/cardIntervensiModel";
import {RowSelectionState} from "@tanstack/table-core";
import {
  ExsumCascadingStateDto,
  PropCascadingDto
} from "@/app/executive-summary/partials/tab4Cascading/cardDiagram/cardDiagramModel";

export default function TableProp(
  {
    data,
    setState
  }: {
    data: PropCascadingDto[]
    setState:(value: SetStateAction<ExsumCascadingStateDto>) => void
  }
) {

  const columns = useMemo(
    () => [
      {
        accessorKey: "code",
        header: "Format Kode",
        enableColumnFilterModes: true,
        filterFns: 'contains'
      },
      {
        accessorKey: "value",
        header: "Nomenklatur PROP",
      }
    ], []
  );

  const [rowSelection, setRowSelection] = React.useState<MRT_RowSelectionState>({});

  useEffect(() => {
    if (Object.keys(rowSelection).length === 0){
      const initSelected:MRT_RowSelectionState = {}
      data.map((y) => {
        if (y.isChecked){
          initSelected[(y.id.toString())] = y.isChecked
        }
      });
      if (Object.keys(initSelected).length > 0) setRowSelection(initSelected)
    }
  }, [data.length]);

  useEffect(() => {
    setState((prev) => {
      const newListRO = [...prev.src_rkp_prop_id]
      for (let i = 0; i < newListRO.length; i++) {
        newListRO[i].isChecked = false
      }
      for (const prop in rowSelection) {
        const index = newListRO.findIndex(x => x.id === parseInt(prop))
        if (index > -1){
          newListRO[index].isChecked = true
         }
      }
      return {
        ...prev,
        src_rkp_prop_id:newListRO
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
