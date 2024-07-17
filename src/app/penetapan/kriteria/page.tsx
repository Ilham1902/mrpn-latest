"use client";

import ContentPage from "@/app/components/contents";
import React from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import { SelectChangeEvent } from "@mui/material";
import TabCriteria from "./partials/tab";

export default function PageKriteria({}) {
 const [project, setProject] = React.useState("");
 const handleChangeProject = (event: SelectChangeEvent) => {
  setProject(event.target.value);
 };

 return (
  <DashboardLayout>
   <ContentPage
    title="Kriteria Kemungkinan & Dampak Risiko"
    withCard={false}
    chipKp
    project={project}
    handleChangeProject={handleChangeProject}
   >
    <TabCriteria />
   </ContentPage>
  </DashboardLayout>
 );
}
