"use client";

import ContentPage from "@/app/components/contents";
import React from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import { Grid, SelectChangeEvent } from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyPage } from "@/app/components/icons";
import ChartRisiko from "./partials/chart-risiko";
import ChartEntitas from "./partials/chart-entitas";
import ChartPeringkat from "./partials/chart-peringkat";
import ChartStatus from "./partials/chart-status";
import CardGroup from "./partials/card-group";
import TableMatriks from "./partials/table-matriks";
import TablePeristiwa from "./partials/table-peristiwa";
import ChartTarget from "./partials/chart-target";

export default function PageDashboard() {
 const [project, setProject] = React.useState("");

 const handleChangeProject = (event: SelectChangeEvent) => {
  setProject(event.target.value);
 };

 const isEmpty = false;

 const blobAnim = (
  <div className="blobs">
   <div className="blob a">a</div>
   <div className="blob b">b</div>
   <div className="blob c">c</div>
   <div className="blob d">d</div>
   <div className="blob e">e</div>
  </div>
 );

 return (
  <DashboardLayout darkTheme>
   <ContentPage
    noMarginBotttom
    withCard={false}
    project={project}
    handleChangeProject={handleChangeProject}
    darkTheme
   >
    {blobAnim}
    {isEmpty ? (
     <EmptyState
      icon={<IconEmptyPage />}
      title="Halaman Dashboard Kosong"
      description="Silahkan isi konten halaman ini"
     />
    ) : (
     <Grid container sx={{ position: "relative", zIndex: 1 }}>
      <Grid item xs={12}>
       <CardGroup />
      </Grid>
      <Grid item xs={12} md={6}>
       <ChartPeringkat />
      </Grid>
      <Grid item xs={12} md={6}>
       <ChartStatus />
      </Grid>
      <Grid item xs={12} md={4}>
       <ChartRisiko />
      </Grid>
      <Grid item xs={12} md={4}>
       <ChartEntitas />
      </Grid>
      <Grid item xs={12} md={4}>
       <ChartTarget />
      </Grid>
      <Grid item xs={12}>
       <TableMatriks />
      </Grid>
      <Grid item xs={12}>
       <TablePeristiwa />
      </Grid>
     </Grid>
    )}
   </ContentPage>
  </DashboardLayout>
 );
}
