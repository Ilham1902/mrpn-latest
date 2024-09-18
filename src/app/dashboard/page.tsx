"use client";

import ContentPage from "@/app/components/contents";
import React, { useEffect, useRef } from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import {
 Box,
 Grid,
 IconButton,
 SelectChangeEvent,
 Stack,
 Typography,
} from "@mui/material";
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
import { IconFA } from "../components/icons/icon-fa";
import { blue } from "@mui/material/colors";
import DropdownTopik from "./partials/dropdownTopik";

export default function PageDashboard() {
 const [project, setProject] = React.useState("");
 const [value, setValue] = React.useState(0);
 const [showElement, setShowElement] = React.useState(true);

 const handleClick = () => {
  setShowElement(!showElement);
 };
 const handleChangeProject = (event: SelectChangeEvent) => {
  setProject(event.target.value);
 };

 const handleChangeTopik = (value: any) => {
  setValue(value);
  setShowElement(!showElement);
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
  <DashboardLayout darkTheme={isEmpty ? false : true}>
   <ContentPage
    noMarginBotttom
    withCard={isEmpty ? true : false}
    project={project}
    handleChangeProject={handleChangeProject}
    darkTheme={isEmpty ? false : true}
   >
    {isEmpty ? (
     <EmptyState
      icon={<IconEmptyPage />}
      title="Halaman Dashboard Kosong"
      description="Silahkan isi konten halaman ini"
     />
    ) : (
     <>
      {blobAnim}
      <Box position="absolute" top={-32} right={0} zIndex={5}>
       {showElement ? (
        <Box
         bgcolor={blue[500]}
         borderRadius={50}
         px={3}
         py={1}
         onClick={handleClick}
         //  display={flaqShow ? "block" : "none"}
        >
         <Stack direction="row" alignItems="center" gap={1}>
          <Typography color="white" sx={{ userSelect: "none" }}>
           Topik:{" "}
           <Typography component="span" fontWeight={700}>
            {value === 1
             ? "Ketahanan Pangan"
             : value === 2
             ? "Jembatan Strategis"
             : value === 3
             ? "Internalisasi Pancasila"
             : value === 4
             ? "Ideologi Demokrasi"
             : value === 5
             ? "Ideologi Pancasila"
             : "Layanan Komunikasi"}
           </Typography>
          </Typography>
          <IconFA name="chevron-down" size={14} color="white" />
         </Stack>
        </Box>
       ) : (
        <DropdownTopik
         variant="primary"
         handleChangeProject={handleChangeTopik}
        />
       )}
      </Box>
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
     </>
    )}
   </ContentPage>
  </DashboardLayout>
 );
}
