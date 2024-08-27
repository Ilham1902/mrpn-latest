import React from "react";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import "gantt-task-react/dist/index.css";
import GanttChart from "./gantt-critical";
import { Box, Button, DialogActions, Stack, Typography } from "@mui/material";
import { green, grey, orange } from "@mui/material/colors";
import theme from "@/theme";
import DialogComponent from "@/app/components/dialog";
import FormCritical from "./form";
import useCardCriticalVM from "@/app/executive-summary/partials/tab6Critical/cardCriticalVM";

const ProjectType = ({ label, color }: { label: string; color: string }) => {
 return (
  <Stack direction="row" border={`1px solid ${grey[400]}`} alignItems="center">
   <Box bgcolor={color} width={60} height={30} />
   <Typography px={1} fontSize={12} color={grey[700]}>
    {label}
   </Typography>
  </Stack>
 );
};

export default function CardCritical({ project }: { project: string }) {

  const {
    optionsRO,
    modalOpen,
    setModalOpen
  } = useCardCriticalVM()

 const handleModalOpen = () => {
  setModalOpen(true);
 };

 const handleModalClose = () => {
  setModalOpen(false);
 };

 const isEmpty = false;

 return (
  <>
   <CardItem title="Critical Path" setting settingEditOnclick={handleModalOpen}>
    {isEmpty || project === "4" ? (
     <EmptyState
      dense
      icon={<IconEmptyData width={100} />}
      title="Data Kosong"
      description="Silahkan isi konten halaman ini"
     />
    ) : (
     <>
      <Stack gap={3}>
       <Stack direction="row" gap={1}>
        <ProjectType color={orange[800]} label="Proyek BUMN" />
        <ProjectType color={green[800]} label="Proyek DAK" />
        <ProjectType
         color={theme.palette.primary.main}
         label="Proyek Belanja K/L"
        />
       </Stack>
       <GanttChart project={project} />
      </Stack>
     </>
    )}
   </CardItem>
   <DialogComponent
    width={320}
    dialogOpen={modalOpen}
    dialogClose={handleModalClose}
    title="Ubah Critical Path"
    dialogFooter={
     <DialogActions sx={{ p: 2, px: 3 }}>
      <Button variant="outlined" onClick={handleModalClose}>
       Batal
      </Button>
      <Button variant="contained" type="submit">
       Simpan
      </Button>
     </DialogActions>
    }
   >
    <FormCritical optionsRO={optionsRO} />
   </DialogComponent>
  </>
 );
}
