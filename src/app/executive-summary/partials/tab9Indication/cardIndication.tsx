import React from "react";
import { Button, DialogActions, Stack } from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import DialogComponent from "@/app/components/dialog";
import AddButton from "@/app/components/buttonAdd";
import TableIndication from "./partials/table";
import FormIndication from "./partials/form";
import useCardIndicationVM from "@/app/executive-summary/partials/tab9Indication/cardIndicationVM";

export default function CardIndication({ project }: { project: string }) {

  const {
    data,
    optionRiskType,
    optionStakeholder,
    optionStrategy,
    optionRO,
    state,
    setState,
    modalOpen,
    setModalOpen,
    updateData
  } = useCardIndicationVM();

 const handleModalOpen = () => {
  setModalOpen(true);
 };

 const handleModalClose = () => {
  setModalOpen(false);
 };

 return (
  <>
   <Stack gap={1}>
    <CardItem
     title="Indikasi Risiko Objek MRPN 5 Tahunan"
     addButton={
      <AddButton
       filled
       small
       title="Tambah Indikasi"
       onclick={handleModalOpen}
      />
     }
    >
     {data.length == 0 ? (
      <EmptyState
       dense
       icon={<IconEmptyData width={100} />}
       title="Data Kosong"
       description="Silahkan isi konten halaman ini"
      />
     ) : (
      <TableIndication data={data} />
     )}
    </CardItem>
   </Stack>
   <DialogComponent
     width={"90%"}
    dialogOpen={modalOpen}
    dialogClose={handleModalClose}
    title="Ubah Indikasi Risiko Objek MRPN 5 Tahunan"
    dialogFooter={
     <DialogActions sx={{ p: 2, px: 3 }}>
      <Button variant="outlined" onClick={handleModalClose}>
       Batal
      </Button>
      <Button variant="contained" type="submit" onClick={() => updateData()}>
       Simpan
      </Button>
     </DialogActions>
    }
   >
    <FormIndication
      state={state}
      setState={setState}
      optionRiskType={optionRiskType}
      optionStrategy={optionStrategy}
      optionStakeholder={optionStakeholder}
      optionRO={optionRO}
    />
   </DialogComponent>
  </>
 );
}
