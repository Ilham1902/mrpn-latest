"use client";

import ContentPage from "@/app/components/contents";
import React from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import { Button, SelectChangeEvent, Stack } from "@mui/material";
import CardCategory from "./partials/cardKategori";
import CardDampak from "./partials/cardDampak";
import CardKemungkinan from "./partials/cardKemungkinan";
import CardKategori from "./partials/cardKategori";

export default function PageKriteria({}) {
 const [value, setValue] = React.useState("");
 const [valueTheme, setValueTheme] = React.useState<string | null>("");
 const [project, setProject] = React.useState("");
 const [modalOpenSave, setModalOpenSave] = React.useState(false);
 const [userLevel, setUserLevel] = React.useState<string | null>("left");

 const handleUserLevel = (
  event: React.MouseEvent<HTMLElement>,
  newUserLevel: string | null
 ) => {
  setUserLevel(newUserLevel);
 };

 const handleModalOpenSave = () => {
  setModalOpenSave(true);
 };
 const handleModalClose = () => {
  setModalOpenSave(false);
  setValueTheme("");
 };

 const handleChangeProject = (event: SelectChangeEvent) => {
  setProject(event.target.value);
 };

 const handleAlignment = (
  event: React.MouseEvent<HTMLElement>,
  newAlignment: string | null
 ) => {
  setValueTheme(newAlignment);
 };

 const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setValue((event.target as HTMLInputElement).value);
 };

 const saveButton = (
  <Button
   variant="contained"
   onClick={handleModalOpenSave}
   sx={{
    minWidth: 160,
    mt: 2,
    borderRadius: 50,
    color: "white !important",
   }}
  >
   Simpan
  </Button>
 );

 const rangeValue = userLevel === "bappenas" ? "3" : "1-6";

 return (
  <>
   <DashboardLayout>
    <ContentPage
     title="Penetapan Kriteria"
     withCard={false}
     chipKp
     project={project}
     handleChangeProject={handleChangeProject}
    >
     <Stack gap={1}>
      <CardKategori />
      <CardKemungkinan />
      <CardDampak />
     </Stack>
    </ContentPage>
   </DashboardLayout>
  </>
 );
}
