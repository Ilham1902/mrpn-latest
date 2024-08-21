"use client";

import ContentPage from "@/app/components/contents";
import React from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import { SelectChangeEvent } from "@mui/material";
import TableNotaDinas from "./partials/table-nota-dinas";
import EmptyState from "@/app/components/empty";
import { IconEmptyPage } from "@/app/components/icons";

export default function PageApprovalNotaDinas({}) {
 const [project, setProject] = React.useState("");

 const handleChangeProject = (value: any) => {
  setProject(value);
 };

 return (
  <DashboardLayout>
   <ContentPage
    title="Nota Dinas Objek MRPN & UPR Lintas Sektor"
    withCard
    chooseProject
    project={project}
    handleChangeProject={handleChangeProject}
   >
    {project === "1" ? (
     <TableNotaDinas />
    ) : (
     <EmptyState
      icon={<IconEmptyPage />}
      title="Halaman Executive Summary Kosong"
      description="Silahkan isi konten halaman ini"
     />
    )}
   </ContentPage>
  </DashboardLayout>
 );
}
