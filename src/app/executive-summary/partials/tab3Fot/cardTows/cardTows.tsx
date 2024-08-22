import React from "react";
import { Button, DialogActions } from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import DialogComponent from "@/app/components/dialog";
import TableTows from "./table";
import FormTows from "./form-tows";

export default function CardTows({ project }: { project: string }) {
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
   <CardItem title="Matriks TOWS" setting settingEditOnclick={handleModalOpen}>
    {isEmpty || project === "4" ? (
     <EmptyState
      dense
      icon={<IconEmptyData width={100} />}
      title="Data Kosong"
      description="Silahkan isi konten halaman ini"
     />
    ) : (
     <TableTows project={project} />
    )}
   </CardItem>
   <DialogComponent
    dialogOpen={modalOpen}
    dialogClose={handleModalClose}
    title="Ubah Matriks TOWS"
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
    <FormTows mode="add" />
   </DialogComponent>
  </>
 );
}
