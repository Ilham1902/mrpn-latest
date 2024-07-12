import React from "react";
import { Button, DialogActions, Paper, Stack } from "@mui/material";
import { AddCircle, EditSharp } from "@mui/icons-material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import DialogComponent from "@/app/components/dialog";
import FieldLabelInfo from "@/app/components/fieldLabelInfo";
import FormStakeholder from "./form-stakeholder";

export default function TableStakeholderInternal({
 mode,
 project,
}: {
 mode?: string;
 project?: string;
}) {
 const [modalOpenAdd, setModalOpenAdd] = React.useState(false);

 const handleModalOpenAdd = () => {
  setModalOpenAdd(true);
 };

 const handleModalClose = () => {
  setModalOpenAdd(false);
 };

 function createData(id: number, stakeholders: string, hubungan: string) {
  return { id, stakeholders, hubungan };
 }

 const rows = [
  createData(1, "-", "-"),
  createData(2, "-", "-"),
  createData(3, "-", "-"),
 ];

 const isEmpty = false;

 const dialogActionFooter = (
  <DialogActions sx={{ p: 2, px: 3 }}>
   <Button onClick={handleModalClose}>Batal</Button>
   <Button variant="contained" type="submit">
    Simpan
   </Button>
  </DialogActions>
 );

 return (
  <>
   <Stack
    mb={2}
    direction="row"
    justifyContent="space-between"
    alignItems="center"
   >
    <FieldLabelInfo
     titleSection
     title="Daftar Pemangku Kepentingan Internal (Stakeholder Internal)"
     information="Daftar Pemangku Kepentingan Internal (Stakeholder Internal)"
    />
    {mode === "add" ? (
     <Button
      variant="outlined"
      size="small"
      startIcon={<AddCircle />}
      sx={{ lineHeight: 1, py: 1, borderRadius: 24 }}
      onClick={handleModalOpenAdd}
     >
      Tambah Stakeholder Internal
     </Button>
    ) : mode === "edit" ? (
     <Button
      variant="outlined"
      size="small"
      startIcon={<EditSharp />}
      sx={{ lineHeight: 1, py: 1, borderRadius: 24 }}
      onClick={handleModalOpenAdd}
     >
      Ubah Stakeholder Internal
     </Button>
    ) : null}
   </Stack>
   {isEmpty ? (
    <EmptyState
     icon={<IconEmptyData />}
     title="Data tidak tersedia"
     description="Silahkan isi konten seksi ini"
    />
   ) : (
    <>
     {mode === "add" ? (
      <Paper variant="outlined">
       <EmptyState
        icon={<IconEmptyData />}
        title="Data tidak tersedia"
        description="Silahkan isi konten seksi ini"
       />
      </Paper>
     ) : (
      <Stack direction="row" flexWrap="wrap" gap={2}>
       {/* {dataTema.map((itemStakeholder, index) => (
        <Fragment key={index}>
         {project === itemStakeholder.temaId && (
          <>
           {itemStakeholder.stakeholder?.map((detailStakeholder, index) => (
            <CardItemStakeholder
             key={index}
             index={index}
             detailStakeholder={detailStakeholder}
            />
           ))}
          </>
         )}
        </Fragment>
       ))} */}
      </Stack>
     )}
    </>
   )}
   <DialogComponent
    dialogOpen={modalOpenAdd}
    dialogClose={handleModalClose}
    title="Stakeholder Mapping"
    dialogFooter={dialogActionFooter}
   >
    <FormStakeholder mode="add" project="1" />
   </DialogComponent>
  </>
 );
}
