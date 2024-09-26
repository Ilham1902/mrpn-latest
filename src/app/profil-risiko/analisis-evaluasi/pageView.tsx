"use client";

import ContentPage from "@/app/components/contents";
import React, {useEffect, useMemo} from "react";
import {Button, Chip, DialogActions, FormControl} from "@mui/material";
import DialogComponent from "@/app/components/dialog";
import FormTable from "./partials/form-table";
import AddButton from "@/app/components/buttonAdd";
import {
  MRT_ColumnDef,
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import ActionColumn from "@/app/components/actions/action";
import {advancedTable} from "@/app/components/table";
import {orange, red, green} from "@mui/material/colors";
import {useAuthContext, useRKPContext} from "@/lib/core/hooks/useHooks";
import usePenetapanGlobalVM from "@/app/penetapan/penetapanGlobalVM";
import {AutocompleteSelectSingle} from "@/components/autocomplete";
import {MasterListObjectRes} from "@/app/misc/master/masterServiceModel";
import useRiskAnalysisVM from "@/app/profil-risiko/analisis-evaluasi/pageVM";
import {usePathname} from "next/navigation";
import {hasPrivilege} from "@/lib/core/helpers/authHelpers";
import EmptyState from "@/components/empty";
import {IconEmptyData} from "@/components/icons";
import {RiskAnalysisDto, RiskAnalysisResDto} from "@/app/profil-risiko/analisis-evaluasi/pageModel";

type ColumnsType = {};

export default function PageAnalisisEvaluasiView({}) {

  const {
    permission
  } = useAuthContext(state => state)
  let pathname = usePathname()
  pathname = pathname == "/profil-risiko/analisis-evaluasi" ? "/profilRisiko/analisisEvaluasiRisiko" : pathname;

  const {
    year
  } = useRKPContext(state => state)

  const {
    objects,
    objectState,
    setObjectState,
    getMasterListObject
  } = usePenetapanGlobalVM()

  useEffect(() => {
    if (year > 0) {
      getMasterListObject()
    }
  }, [year]);


  const {
    optionsRisk,
    riskAnalysisData,
    state,
    setState,
    modal,
    actionModal,
    optionsRiskMatrix,
    getMasterRiskMatrix,
    getRiskAnalysisData,
    updateOrCreateOrDelete
  } = useRiskAnalysisVM()

  useEffect(() => {
    if (optionsRiskMatrix.length == 0) getMasterRiskMatrix();
    if (objectState !== undefined) {
      getRiskAnalysisData()
    }
    ;
  }, [objectState]);

  const dialogActionFooter = (
    <DialogActions sx={{p: 2, px: 3}}>
      <Button onClick={() => actionModal(false, "create")}>Batal</Button>
      <Button variant="contained" type="submit" onClick={() => updateOrCreateOrDelete()}>
        Simpan
      </Button>
    </DialogActions>
  );

  const dialogActionDeleteFooter = (
    <DialogActions sx={{p: 2, px: 3}}>
      <Button onClick={() => actionModal(false, "create")}>Batal</Button>
      <Button variant="contained" color="error" type="submit" onClick={() => updateOrCreateOrDelete()}>
        Hapus
      </Button>
    </DialogActions>
  );

  const columns = useMemo<MRT_ColumnDef<RiskAnalysisDto>[]>(
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
                accessorKey: "peristiwa_risiko",
                header: "Peristiwa Risiko",
                enableColumnActions: false,
              },
              {
                accessorKey: "kategori_risiko",
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
                accessorKey: "analisis",
                Cell: ({renderedCellValue}: { renderedCellValue: any }) => (
                  renderedCellValue.matriks.kemungkinan
                ),
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
                accessorKey: "analisis",
                Cell: ({renderedCellValue}: { renderedCellValue: any }) => (
                  renderedCellValue.matriks.dampak
                ),
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
                id:"br",
                accessorKey: "analisis",
                Cell: ({renderedCellValue}: { renderedCellValue: any }) => (
                  renderedCellValue.matriks.nilai
                ),
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
                accessorKey: "analisis",
                header: "Level Risiko",
                enableColumnActions: false,
                size: 160,
                Cell: ({renderedCellValue}: { renderedCellValue: any }) => (
                  <Chip
                    color={
                      renderedCellValue.matriks.level === "Sangat Tinggi (5)"
                        ? "error"
                        : renderedCellValue.matriks.level === "Tinggi (4)"
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
                    label={renderedCellValue.matriks.level}
                  />
                ),
              },
              {
                id:"risk_priority",
                accessorKey: "analisis",
                header: "Prioritas Risiko",
                Cell: ({renderedCellValue}: { renderedCellValue: any }) => (
                  parseInt(renderedCellValue.matriks.level.replace(/[^,\d]/g, ''))
                ),
                enableColumnActions: false,
                size: 160,
                muiTableHeadCellProps: {
                  align: "center",
                },
                muiTableBodyCellProps: {
                  align: "center",
                },
              },{
                accessorKey: "analisis",
                header: "Action",
                Cell: (item:any) => (
                  <ActionColumn
                    viewClick={hasPrivilege(permission, pathname, "list") ? () => actionModal(true, "read", item.row.original.id) : undefined}
                    editClick={hasPrivilege(permission, pathname, "update") ? () => actionModal(true, "update", item.row.original.id) : undefined}
                    deleteClick={hasPrivilege(permission, pathname, "delete") ? () => actionModal(true, "delete", item.row.original.id) : undefined}
                  />
                ),
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

  const data = riskAnalysisData
  const renderTopToolbar: ColumnsType = {
    renderTopToolbarCustomActions: () => (
      <AddButton onclick={() => actionModal(true, "create")} title="Tambah Analisis & Evaluasi"/>
    ),
  };
  const table = useMaterialReactTable({
    columns,
    data,
    ...renderTopToolbar,
    initialState: {
      showGlobalFilter: true,
      sorting: [
        {
          id: 'br',
          desc: false,
        }
      ]
    },
    // displayColumnDefOptions: {
    //   "mrt-row-actions": {
    //     header: "",
    //     size: 150,
    //     Cell: (item: any) => (
    //       <ActionColumn
    //         viewClick={hasPrivilege(permission, pathname, "list") ? () => actionModal(true, "read", item.cell.row.original.id) : undefined}
    //         editClick={hasPrivilege(permission, pathname, "update") ? () => actionModal(true, "update", item.cell.row.original.id) : undefined}
    //         deleteClick={hasPrivilege(permission, pathname, "delete") ? () => actionModal(true, "delete", item.cell.row.original.id) : undefined}
    //       />
    //     ),
    //   },
    // },
  });

  return (
    <>
      <ContentPage
        title="Analisis & Evaluasi Risiko"
        chooseObject={(
          <FormControl size="small" sx={{width: "20vw"}}>
            <AutocompleteSelectSingle
              value={objectState}
              options={objects}
              getOptionLabel={opt => `${opt.rkp.code} - ${opt.rkp.value}`}
              handleChange={(val: MasterListObjectRes) => setObjectState(val)}
              placeHolder={"Pilih RKP"}
            />
          </FormControl>
        )}
      >
        {objectState === undefined ?
          <EmptyState
            dense
            icon={<IconEmptyData width={100}/>}
            title="Pilih RKP"
            description="Silahkan pilih rkp terlebih dulu"
          />
          :
          <MaterialReactTable table={table}/>
        }
      </ContentPage>


      <DialogComponent
        dialogOpen={modal.isOpen && modal.action !== "delete"}
        dialogClose={() => actionModal(true, "create")}
        title="Tambah Analisis & Evaluasi Risiko"
        dialogFooter={dialogActionFooter}
      >
        <FormTable
          mode={modal.action}
          state={state}
          setState={setState}
          optionsRiskMatrix={optionsRiskMatrix}
          optionsRiskProfile={optionsRisk}
        />

      </DialogComponent>

      <DialogComponent
        width={240}
        dialogOpen={modal.isOpen && modal.action == "delete"}
        dialogClose={() => actionModal(true, "create")}
        title="Hapus Data"
        dialogFooter={dialogActionDeleteFooter}
      >
        Anda yakin akan menghapus data ini?
      </DialogComponent>
    </>
  );
}
