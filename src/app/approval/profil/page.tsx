"use client";

import ContentPage from "@/app/components/contents";
import React from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import { Box, Button, Stack, Typography, alpha } from "@mui/material";
import MRTIdentifikasi from "@/app/profil-risiko/identifikasi/partials/mrt";
import { IconFA } from "@/app/components/icons/icon-fa";
import MRTPerlakuanComplete from "@/app/profil-risiko/perlakuan/partials/mrt-complete";
import { CardWithStamp } from "@/app/components/card-w-stamp";

export default function PageApprovalProfil() {
 const [approvalStamp, setApprovalStamp] = React.useState(false);
 const [rejectStamp, setRejectStamp] = React.useState(false);
 const [buttonStamp, setButtonStamp] = React.useState(true);

 const handleApprovalStamp = () => {
  setApprovalStamp(true);
  setButtonStamp(false);
 };

 const handleRejectStamp = () => {
  setRejectStamp(true);
  setButtonStamp(false);
 };

 return (
  <DashboardLayout>
   <ContentPage
    title="Approval Profil Risiko"
    chipKp
    addButton={
     buttonStamp ? (
      <Stack direction="row" gap={1}>
       <Button
        variant="outlined"
        color="error"
        startIcon={<IconFA name="thumbs-down" size={14} />}
        sx={{ px: 3, borderRadius: 12, whiteSpace: "nowrap" }}
        onClick={handleRejectStamp}
       >
        Reject
       </Button>
       <Button
        variant="contained"
        color="success"
        startIcon={<IconFA name="thumbs-up" size={14} />}
        sx={{ px: 3, borderRadius: 12, whiteSpace: "nowrap" }}
        onClick={handleApprovalStamp}
       >
        Approve
       </Button>
      </Stack>
     ) : (
      false
     )
    }
   >
    <Stack
     gap={1}
     sx={{
      transition: "margin all 500ms",
      ".MuiPaper-root ": {
       m: rejectStamp || approvalStamp ? 0 : 1,
      },
     }}
    >
     <CardWithStamp rejectStamp={rejectStamp} approvalStamp={approvalStamp}>
      <MRTIdentifikasi
       viewOnly
       headerOnly
       renderCaption={
        <Typography fontWeight={600} fontSize={17} px={1}>
         Identifikasi Risiko
        </Typography>
       }
      />
     </CardWithStamp>
     <CardWithStamp rejectStamp={rejectStamp} approvalStamp={approvalStamp}>
      <MRTPerlakuanComplete
       viewOnly
       renderCaption={
        <Typography fontWeight={600} fontSize={17} px={1}>
         Perlakuan Risiko
        </Typography>
       }
      />
     </CardWithStamp>
    </Stack>
    {buttonStamp && (
     <Stack mt={3} direction="row" justifyContent="flex-end">
      <Stack direction="row" gap={1}>
       <Button
        variant="outlined"
        color="error"
        startIcon={<IconFA name="thumbs-down" size={14} />}
        sx={{ px: 3, borderRadius: 12, whiteSpace: "nowrap" }}
        onClick={handleRejectStamp}
       >
        Reject
       </Button>
       <Button
        variant="contained"
        color="success"
        startIcon={<IconFA name="thumbs-up" size={14} />}
        sx={{ px: 3, borderRadius: 12, whiteSpace: "nowrap" }}
        onClick={handleApprovalStamp}
       >
        Approve
       </Button>
      </Stack>
     </Stack>
    )}
   </ContentPage>
  </DashboardLayout>
 );
}
