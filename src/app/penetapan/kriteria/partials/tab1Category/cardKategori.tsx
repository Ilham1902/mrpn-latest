import React from "react";
import { Button, DialogActions } from "@mui/material";
import CardItem from "@/app/components/cardTabItem";
import DialogComponent from "@/app/components/dialog";
import TableKategori from "./table-kategori";
import FormKategori from "./form-kategori";

export default function CardKategori() {
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
   <CardItem
    title="Kategori Risiko"
    // setting
    // settingEditOnclick={handleModalOpenAdd}
   >
    <TableKategori mode="view" />
   </CardItem>
   <DialogComponent
    width={1200}
    dialogOpen={modalOpenAdd}
    dialogClose={handleModalClose}
    title="Tambah Kriteria Dampak"
    dialogFooter={dialogActionFooter}
   >
    <FormKategori mode="add" />
   </DialogComponent>
  </>
 );
}
