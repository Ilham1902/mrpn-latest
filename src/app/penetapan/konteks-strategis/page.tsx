/* eslint-disable @next/next/no-img-element */
"use client";

import ContentPage from "@/app/components/contents";
import React, { useMemo } from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import {
 MaterialReactTable,
 useMaterialReactTable,
} from "material-react-table";
import { advancedTable } from "@/app/components/table";
import {
 Accordion,
 AccordionDetails,
 AccordionSlots,
 AccordionSummary,
 Button,
 DialogActions,
 Fade,
 SelectChangeEvent,
 Stack,
 Typography,
} from "@mui/material";
import ActionColumn from "@/app/components/actions/action";
import AddButton from "@/app/components/buttonAdd";
import DialogComponent from "@/app/components/dialog";
import FormTable from "./form/partials/form-table";
import { addUrl, editUrl } from "@/app/utils/constant";
import LoadingPage from "@/app/components/loadingPage";
import { data } from "./setting";
import TableIdentifikasiSasaran from "./form/partials/table-identifikasi-sasaran";
import TableSasaran from "./form/partials/table-sasaran";
import TableRegulation from "./form/partials/table-regulation";
import TableStakeholderInternal from "./form/partials/table-stakeholder-internal";
import TableStakeholderEksternal from "./form/partials/table-stakeholder-eksternal";
import TableRincianOutput from "./form/partials/table-ro";
import TableKemungkinan from "./form/partials/table-kriteria-kemungkinan";
import TableDampak from "./form/partials/table-kriteria-dampak";
import { IconFA } from "@/app/components/icons/icon-fa";
import AccordionList from "@/app/components/accordion";

type ColumnsType = {};

export default function PageKonteksStrategis({}) {
 const [modalOpenView, setModalOpenView] = React.useState(false);
 const [modalOpenDelete, setModalOpenDelete] = React.useState(false);
 const [project, setProject] = React.useState("");
 const [expanded, setExpanded] = React.useState(false);

 const handleExpansion = () => {
  setExpanded((prevExpanded) => !prevExpanded);
 };

 const handleChangeProject = (event: SelectChangeEvent) => {
  setProject(event.target.value);
 };

 const renderTopToolbar: ColumnsType = {
  renderTopToolbarCustomActions: () => (
   <AddButton url={addUrl} title="Tambah Konteks" />
  ),
 };

 const handleModalOpenView = () => {
  setModalOpenView(true);
 };

 const handleModalOpenDelete = () => {
  setModalOpenDelete(true);
 };

 const handleModalClose = () => {
  setModalOpenView(false);
  setModalOpenDelete(false);
 };

 const columns = useMemo(
  () => [
   {
    accessorKey: "tahun",
    header: "Tahun",
    size: 150,
    grow: false,
    enableColumnActions: false,
   },
   {
    accessorKey: "lokasi",
    header: "Lokasi",
    size: 200,
    grow: false,
    enableColumnActions: false,
   },
   {
    accessorKey: "nama_pkppr",
    header: "Nama PKPPR",
    size: 200,
    grow: false,
    enableColumnActions: false,
   },
   {
    accessorKey: "kl_utama",
    header: "KL Utama",
    size: 200,
    grow: false,
    enableColumnActions: false,
   },
  ],
  []
 );

 const table = useMaterialReactTable({
  columns,
  data,
  ...renderTopToolbar,
  ...advancedTable,
  displayColumnDefOptions: {
   "mrt-row-actions": {
    header: "",
    size: 150,
    Cell: () => (
     <ActionColumn
      viewClick={handleModalOpenView}
      editUrl={editUrl}
      deleteClick={handleModalOpenDelete}
     />
    ),
   },
  },
 });

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
    <ContentPage title="Eksplorasi Konteks Strategis" chipKp>
     {/* <AccordionList
      id={"eks-1"}
      header="Identifikasi Sasaran dan Indikator Objek MRPN Lintas Sektor"
      content={undefined}
     /> */}
     <Stack gap={1}>
      <TableIdentifikasiSasaran mode="view" />
      <TableSasaran mode="view" />
      <TableRegulation mode="add" />
      <TableStakeholderInternal mode="view" project="1" />
      <TableStakeholderEksternal mode="view" project="1" />
      <TableRincianOutput mode="view" />
     </Stack>
    </ContentPage>
   </DashboardLayout>
   <DialogComponent
    dialogOpen={modalOpenView}
    dialogClose={handleModalClose}
    title="Detail Konteks Strategis"
   >
    <FormTable mode="view" />
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
