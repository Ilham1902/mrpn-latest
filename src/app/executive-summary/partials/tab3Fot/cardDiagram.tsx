import React, { Fragment } from "react";
import {
 Box,
 Button,
 DialogActions,
 Table,
 Tooltip,
 styled,
} from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import DialogComponent from "@/app/components/dialog";
import FormFramework from "./form";
import TableTows from "./table";
import TableDiagram from "./tableDiagram";
import FormDiagram from "./form-diagram";

export default function CardDiagram({ project }: { project: string }) {
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
   <CardItem title="Diagram" setting settingEditOnclick={handleModalOpen}>
    {isEmpty || project === "4" ? (
     <EmptyState
      dense
      icon={<IconEmptyData width={100} />}
      title="Data Kosong"
      description="Silahkan isi konten halaman ini"
     />
    ) : (
     <TableDiagram project={project} />
    )}
   </CardItem>
   <DialogComponent
    dialogOpen={modalOpen}
    dialogClose={handleModalClose}
    title="Ubah Diagram"
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
    <FormDiagram mode="add" />
   </DialogComponent>
  </>
 );
}
