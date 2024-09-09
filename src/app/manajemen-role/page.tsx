"use client";

import ContentPage from "@/app/components/contents";
import React, {useMemo} from "react";
import DashboardLayout from "@/components/layouts/layout";
import {
  MaterialReactTable, type MRT_ColumnDef,
  useMaterialReactTable,
} from "material-react-table";
import {advancedTable} from "@/app/components/table";
import ActionColumn from "@/components/actions/action";
import AddButton from "@/app/components/buttonAdd";
import DialogComponent from "@/components/dialog";
import {DialogActions, Button, Chip} from "@mui/material";
import FormTable from "./partials/form-table";
import useManagementRoleVM from "@/app/manajemen-role/pageVM";

export default function PageRoleManagement() {

  const {
    managementRoleData,
    stateRoleName,
    setStateRoleName,
    stateRolePermission,
    setStateRolePermission,
    menuConfig,
    modal,
    setModal,
    handleOpenModal,
    createData,
  } = useManagementRoleVM()

  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Nama Role",
        enableColumnFilterModes: true,
        filterFns: 'contains'
      },
    ], []
  );

  const data = managementRoleData
  const table = useMaterialReactTable({
    columns,
    data,
    ...advancedTable,
    enableRowNumbers: true,
    renderTopToolbarCustomActions: () => (
      <AddButton title="Tambah Role" onclick={() => handleOpenModal(0)}/>
    ),
    displayColumnDefOptions: {
      "mrt-row-actions": {
        header: "",
        size: 50,
        Cell: (row) => (
          <ActionColumn
            editClick={() => handleOpenModal(row.cell.row.original.id)}
            // deleteClick={() => handleOpenModal(row.cell.row.original.id)}
          />
        ),
      },
    },
  });

  return (
    <>
      <DashboardLayout>
        <ContentPage title="Manajemen Role">
          <MaterialReactTable table={table}/>
        </ContentPage>
      </DashboardLayout>

      <DialogComponent
        width={"50%"}
        dialogOpen={modal}
        dialogClose={() => setModal(false)}
        title="Detail Role"
        dialogFooter={<DialogActions sx={{p: 2, px: 3}}>
          <Button onClick={() => setModal(false)}>Batal</Button>
          <Button variant="contained" type="submit" onClick={() => createData()}>
            Simpan
          </Button>
        </DialogActions>}
      >
        <FormTable
          menu={menuConfig}
          roleName={stateRoleName}
          setRoleName={setStateRoleName}
          stateRolePermission={stateRolePermission}
          setStateRolePermission={setStateRolePermission}
        />
      </DialogComponent>

      {/*<DialogComponent*/}
      {/*  width={240}*/}
      {/*  dialogOpen={modalOpenDelete}*/}
      {/*  dialogClose={handleModalClose}*/}
      {/*  title="Hapus Data"*/}
      {/*  dialogFooter={<DialogActions sx={{p: 2, px: 3}}>*/}
      {/*    <Button onClick={handleModalClose}>Batal</Button>*/}
      {/*    <Button variant="contained" color="error" type="submit">*/}
      {/*      Hapus*/}
      {/*    </Button>*/}
      {/*  </DialogActions>}*/}
      {/*>*/}
      {/*  Anda yakin akan menghapus data ini?*/}
      {/*</DialogComponent>*/}
    </>
  );
}
