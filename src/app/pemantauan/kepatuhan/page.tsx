"use client";

import ContentPage from "@/app/components/contents";
import React from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import { Button, DialogActions } from "@mui/material";
import DialogComponent from "@/app/components/dialog";
import AddButton from "@/app/components/buttonAdd";
import TableAdd from "./partials/table";
import CardGroup from "./partials/card-group";

export default function PageKepatuhan({}) {
 const [modalOpenAdd, setModalOpenAdd] = React.useState(false);

 const handleModalOpenAdd = () => {
  setModalOpenAdd(true);
 };
 const handleModalClose = () => {
  setModalOpenAdd(false);
 };

 const dialogActionFooter = (
  <DialogActions sx={{ p: 2, px: 3 }}>
   <Button onClick={handleModalClose}>Batal</Button>
   <Button variant="contained" type="submit">
    Simpan
   </Button>
  </DialogActions>
 );

 return (
  <>
   <DashboardLayout>
    <ContentPage
     title="Kepatuhan"
     chipKp
     addButton={
      <AddButton
       title="Tambah Kepatuhan"
       noMargin
       filled
       onclick={handleModalOpenAdd}
      />
     }
    >
     <CardGroup />
    </ContentPage>
   </DashboardLayout>
   <DialogComponent
    width={980}
    dialogOpen={modalOpenAdd}
    dialogClose={handleModalClose}
    title="Tambah Kepatuhan"
    dialogFooter={dialogActionFooter}
   >
    <TableAdd />
   </DialogComponent>
  </>
 );
}
