"use client";

import ContentPage from "@/app/components/contents";
import React from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import { SelectChangeEvent } from "@mui/material";
import TableNotaDinas from "./partials/table-nota-dinas";

export default function PageApprovalNotaDinas({}) {
 const [project, setProject] = React.useState("");

 const handleChangeProject = (event: SelectChangeEvent) => {
  setProject(event.target.value);
 };

 return (
  <DashboardLayout>
   <ContentPage
    title="Nota Dinas Objek MRPN & UPR Lintas Sektor"
    withCard
    project={project}
    handleChangeProject={handleChangeProject}
   >
    <TableNotaDinas />
   </ContentPage>
  </DashboardLayout>
 );
}
