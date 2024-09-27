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
import { GetColor } from "@/utils/color";
import { ExsumCriticalData } from "@/app/executive-summary/partials/tab6Critical/cardCriticalModel";

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
  optionRO,
  optionStrategy,
  optionProjectCategory,
  modalOpen,
  setModalOpen,
  state,
  setState,
  handleSubmit,
  data,
  ganChart,
 } = useCardCriticalVM();

 const handleModalOpen = () => {
  setModalOpen(true);
 };

 const handleModalClose = () => {
  setModalOpen(false);
 };

 const groupProjectCategory = () => {
  const obj = Object.groupBy(
   data,
   ({ kategori_proyek_id }) => kategori_proyek_id
  );
  let dt: {
   id: number;
   name: string;
  }[] = [];
  for (const o in obj) {
   const index: number = parseInt(o);
   if (obj[index]) {
    dt.push({
     id: parseInt(o),
     name: obj[index][0].kategori_proyek.name,
    });
   }
  }
  return dt;
 };

 return (
  <>
   <CardItem title="Critical Path" setting settingEditOnclick={handleModalOpen}>
    {data.length == 0 || ganChart.length == 0 ? (
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
        {groupProjectCategory().map((d, index) => (
         <ProjectType key={index} color={GetColor(d.id)} label={d.name} />
        ))}
       </Stack>
       <GanttChart tasks={ganChart} />
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
      <Button variant="contained" type="submit" onClick={() => handleSubmit()}>
       Simpan
      </Button>
     </DialogActions>
    }
   >
    <FormCritical
     optionsRO={optionRO}
     optionsStrategy={optionStrategy}
     optionProjectCategory={optionProjectCategory}
     state={state}
     setState={setState}
    />
   </DialogComponent>
  </>
 );
}
