"use client";

import ContentPage from "@/app/components/contents";
import React from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import { Box, Button, Stack, Typography, alpha } from "@mui/material";
import MRTAnalisis from "@/app/profil-risiko/analisis-evaluasi/partials/mrt";
import MRTIdentifikasi from "@/app/profil-risiko/identifikasi/partials/mrt";
import MRTPerlakuan from "@/app/profil-risiko/perlakuan/partials/mrt";
import { IconFA } from "@/app/components/icons/icon-fa";
import Image from "next/image";
import { grey } from "@mui/material/colors";

const CardWithStamp = ({
 rejectStamp,
 approvalStamp,
 children,
}: {
 rejectStamp?: boolean;
 approvalStamp?: boolean;
 children?: React.ReactNode;
}) => {
 return (
  <Box
   position="relative"
   zIndex={1}
   sx={{
    "&:before": {
     content: rejectStamp || approvalStamp ? "''" : "none",
     bgcolor: alpha(grey[500], 0.3),
     width: "100%",
     height: "100%",
     position: "absolute",
     top: 0,
     left: 0,
     right: 0,
     bottom: 0,
     borderRadius: "20px",
     zIndex: 10,
     userSelect: "none",
     pointerEvents: "none",
    },
    ".MuiPaper-root": {
     m: 0,
    },
   }}
  >
   {children}
   <Box position="absolute" top={20} right={30} zIndex={15}>
    {rejectStamp && (
     <Image
      alt="MRPN"
      src="https://res.cloudinary.com/caturteguh/image/upload/v1721703228/mrpn/ttd/stamp-rejected_gdzucv.png"
      width={0}
      height={0}
      sizes="100vw"
      style={{
       width: "auto",
       height: "150px",
       opacity: 0.3,
       transform: "rotate(70deg)",
      }}
     />
    )}
    {approvalStamp && (
     <Image
      alt="MRPN"
      src="https://res.cloudinary.com/caturteguh/image/upload/v1721703223/mrpn/ttd/stamp-approved_dduusw.png"
      width={0}
      height={0}
      sizes="100vw"
      style={{
       width: "auto",
       height: "150px",
       opacity: 1,
       transform: "rotate(70deg)",
      }}
     />
    )}
   </Box>
  </Box>
 );
};

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
    <Stack gap={3}>
     <CardWithStamp rejectStamp={rejectStamp} approvalStamp={approvalStamp}>
      <MRTIdentifikasi
       viewOnly
       renderCaption={
        <Typography fontWeight={600} fontSize={17} px={1}>
         Identifikasi Risiko
        </Typography>
       }
      />
     </CardWithStamp>
     <CardWithStamp rejectStamp={rejectStamp} approvalStamp={approvalStamp}>
      <MRTAnalisis
       viewOnly
       renderCaption={
        <Typography fontWeight={600} fontSize={17} px={1}>
         Analisis & Evaluasi Risiko
        </Typography>
       }
      />
     </CardWithStamp>
     <CardWithStamp rejectStamp={rejectStamp} approvalStamp={approvalStamp}>
      <MRTPerlakuan
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
