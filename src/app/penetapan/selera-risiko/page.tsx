"use client";

import ContentPage from "@/app/components/contents";
import React from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import { Button, DialogActions, SelectChangeEvent } from "@mui/material";
import DialogComponent from "@/app/components/dialog";
import RiskContent from "./partials/risk";

export default function PageSeleraRisiko({}) {
 const [project, setProject] = React.useState("");
 const [modalOpenSave, setModalOpenSave] = React.useState(false);

 const handleModalOpenSave = () => {
  setModalOpenSave(true);
 };
 const handleModalClose = () => {
  setModalOpenSave(false);
 };

 const handleChangeProject = (event: SelectChangeEvent) => {
  setProject(event.target.value);
 };

 return (
  <>
   <DashboardLayout>
    <ContentPage
     title="Selera Risiko"
     withCard
     chipKp
     project={project}
     handleChangeProject={handleChangeProject}
    >
     <RiskContent handleSaveButton={handleModalOpenSave} />
    </ContentPage>
   </DashboardLayout>
   <DialogComponent
    noDivider={false}
    width={300}
    dialogOpen={modalOpenSave}
    dialogClose={handleModalClose}
    title="Simpan Data"
    dialogFooter={
     <DialogActions sx={{ p: 2, px: 3 }}>
      <Button variant="outlined" onClick={handleModalClose}>
       Keluar
      </Button>
     </DialogActions>
    }
   >
    Data Selera Risiko sudah tersimpan
   </DialogComponent>
  </>
 );
}
