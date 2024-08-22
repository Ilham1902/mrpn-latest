import React from "react";
import { Button, DialogActions, Stack } from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import DialogComponent from "@/app/components/dialog";
import AddButton from "@/app/components/buttonAdd";
import TableIndication from "./partials/table";
import FormIndication from "./partials/form";
import Matriks from "@/app/penetapan/kriteria/partials/tab4Matriks/matriks";
import FormRisk from "./partials/formRisk";

export default function CardRisk({ project }: { project: string }) {
 const [modalOpen, setModalOpen] = React.useState(false);

 const handleModalOpen = () => {
  setModalOpen(true);
 };

 const handleModalClose = () => {
  setModalOpen(false);
 };

 const isEmpty = false;

 return (
  <>
   <Stack gap={1}>
    <CardItem
     title="Selera Risiko"
     setting
     settingEditOnclick={handleModalOpen}
    >
     {isEmpty || project === "4" ? (
      <EmptyState
       dense
       icon={<IconEmptyData width={100} />}
       title="Data Kosong"
       description="Silahkan isi konten halaman ini"
      />
     ) : (
      <Matriks levelId={2} />
     )}
    </CardItem>
   </Stack>
   <DialogComponent
    width={480}
    dialogOpen={modalOpen}
    dialogClose={handleModalClose}
    title="Ubah Indikasi Risiko Objek MRPN 5 Tahunan"
    dialogFooter={
     <DialogActions sx={{ p: 2, px: 3 }}>
      <Button variant="outlined" onClick={handleModalClose}>
       Batal
      </Button>
      <Button variant="contained" type="submit">
       Simpan
      </Button>
     </DialogActions>
    }
   >
    <FormRisk mode="add" project={project} />
   </DialogComponent>
  </>
 );
}
