"use client";

import ContentPage from "@/app/components/contents";
import React from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import { Box, Stack, Typography } from "@mui/material";
import MRTIdentifikasi from "../identifikasi/partials/mrt";
import MRTPerlakuanComplete from "../perlakuan/partials/mrt-complete";

export default function PageOverview() {
 return (
  <DashboardLayout>
   <ContentPage title="Overview Risiko" chipKp>
    <Stack gap={1}>
     <MRTIdentifikasi
      viewOnly
      headerOnly
      renderCaption={
       <Typography fontWeight={600} fontSize={17} px={1}>
        Identifikasi Risiko
       </Typography>
      }
     />
     <Box className="table-sticky-horizontal">
      <MRTPerlakuanComplete
       viewOnly
       renderCaption={
        <Typography fontWeight={600} fontSize={17} px={1}>
         Perlakuan Risiko
        </Typography>
       }
      />
     </Box>
    </Stack>
   </ContentPage>
  </DashboardLayout>
 );
}
