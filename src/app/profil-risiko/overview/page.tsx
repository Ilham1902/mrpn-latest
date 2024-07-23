"use client";

import ContentPage from "@/app/components/contents";
import React from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import MRTAnalisis from "../analisis-evaluasi/partials/mrt";
import { Stack, Typography } from "@mui/material";
import MRTPerlakuan from "../perlakuan/partials/mrt";
import MRTIdentifikasi from "../identifikasi/partials/mrt";

export default function PageOverview() {
 return (
  <DashboardLayout>
   <ContentPage title="Overview Risiko" chipKp>
    <Stack gap={1}>
     <MRTIdentifikasi
      viewOnly
      renderCaption={
       <Typography fontWeight={600} fontSize={17} px={1}>
        Identifikasi Risiko
       </Typography>
      }
     />
     <MRTAnalisis
      viewOnly
      renderCaption={
       <Typography fontWeight={600} fontSize={17} px={1}>
        Analisis & Evaluasi Risiko
       </Typography>
      }
     />
     <MRTPerlakuan
      viewOnly
      renderCaption={
       <Typography fontWeight={600} fontSize={17} px={1}>
        Perlakuan Risiko
       </Typography>
      }
     />
    </Stack>
   </ContentPage>
  </DashboardLayout>
 );
}
