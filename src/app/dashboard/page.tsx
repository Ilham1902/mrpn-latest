"use client";

import ContentPage from "@/app/components/contents";
import React from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import { SelectChangeEvent } from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyPage } from "@/app/components/icons";
import {useRKPContext} from "@/lib/core/hooks/useHooks";

export default function PageDashboard() {
 const [project, setProject] = React.useState("");

 const handleChangeProject = (event: SelectChangeEvent) => {
  setProject(event.target.value);
 };

 const {rkpState} = useRKPContext((state) => state)
 console.log(rkpState)

 return (
  <DashboardLayout>
   <ContentPage
    title="Dashboard"
    withCard
    project={project}
    handleChangeProject={handleChangeProject}
   >
    <EmptyState
     icon={<IconEmptyPage />}
     title="Halaman Dashboard Kosong"
     description="Silahkan isi konten halaman ini"
    />
   </ContentPage>
  </DashboardLayout>
 );
}
