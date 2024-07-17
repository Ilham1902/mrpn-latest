import React from "react";
import { Button, DialogActions } from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import DialogComponent from "@/app/components/dialog";
import FormStakeholder from "./form-stakeholder";
import StakeholderChart from "./partials/stakeholder-chart";

export default function CardStakeholder({ project }: { project: string }) {
 const [modalOpenStakeholder, setModalOpenStakeholder] = React.useState(false);

 const handleModalOpenStakeholder = () => {
  setModalOpenStakeholder(true);
 };

 const handleModalClose = () => {
  setModalOpenStakeholder(false);
 };

 const isEmpty = false;

 return (
  <CardItem
   title="Stakeholder Mapping"
   setting
   settingEditOnclick={handleModalOpenStakeholder}
  >
   {isEmpty || project === "4" ? (
    <EmptyState
     dense
     icon={<IconEmptyData width={100} />}
     title="Data Kosong"
     description="Silahkan isi konten halaman ini"
    />
   ) : (
    <StakeholderChart project={project} />
   )}
   <DialogComponent
    dialogOpen={modalOpenStakeholder}
    dialogClose={handleModalClose}
    title="Stakeholder Mapping"
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
    <FormStakeholder mode="add" project={project} />
   </DialogComponent>
  </CardItem>
 );
}
