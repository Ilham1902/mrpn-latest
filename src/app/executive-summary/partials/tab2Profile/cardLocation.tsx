import React from "react";
import {
 Box,
 Button,
 Chip,
 DialogActions,
 Stack,
 Typography,
} from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import DialogComponent from "@/app/components/dialog";
import { grey } from "@mui/material/colors";
import FormLocation from "./form-location";

export default function CardLocation({ project }: { project: string }) {
 const [modalOpen, setModalOpen] = React.useState(false);

 const handleModalOpen = () => {
  setModalOpen(true);
 };

 const handleModalClose = () => {
  setModalOpen(false);
 };

 const isEmpty = false;

 return (
  <CardItem title="Lokasi Proyek" setting settingEditOnclick={handleModalOpen}>
   {isEmpty || project !== "1" ? (
    <EmptyState
     dense
     icon={<IconEmptyData width={100} />}
     title="Data Kosong"
     description="Silahkan isi konten halaman ini"
    />
   ) : (
    <Stack direction="row" flexWrap="wrap" gap={2}>
     <Stack gap={3} direction="column" height="100%">
      <Stack gap={1}>
       <Typography fontSize={16} fontWeight={500}>
        Lokasi{" "}
        <Typography component="span" color={grey[500]}>
         (Provinsi)
        </Typography>
       </Typography>
       <Stack direction="row" flexWrap="wrap" gap={0.5}>
        <Chip size="small" label="DKI Jakarta" />
        <Chip size="small" label="Jawa Barat" />
        <Chip size="small" label="Jawa Tengah" />
        <Chip size="small" label="Sumatera Utara" />
        <Chip size="small" label="Banten" />
        <Chip size="small" label="NTT" />
        <Chip size="small" label="Sulawesi Barat" />
        <Chip size="small" label="Aceh" />
        <Chip size="small" label="NTB" />
        <Chip size="small" label="Kalimantan Selatan" />
       </Stack>
      </Stack>
      <Stack gap={1}>
       <Typography fontSize={16} fontWeight={500}>
        Keterangan{" "}
        <Typography component="span" color={grey[500]}>
         (Area of Interest)
        </Typography>
       </Typography>
       <Typography variant="body1" fontWeight={600}>
        43.503 Ha
       </Typography>
      </Stack>
     </Stack>
    </Stack>
   )}
   <DialogComponent
    width={520}
    dialogOpen={modalOpen}
    dialogClose={handleModalClose}
    title="Ubah Lokasi Proyek"
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
    <FormLocation mode="add" />
   </DialogComponent>
  </CardItem>
 );
}
