import React from "react";
import {
 Box,
 Button,
 Chip,
 DialogActions,
 Stack,
 Typography,
} from "@mui/material";
import EmptyState from "@/components/empty";
import { IconEmptyData } from "@/components/icons";
import CardItem from "@/components/cardTabItem";
import DialogComponent from "@/components/dialog";
import { grey } from "@mui/material/colors";
import FormLocation from "./form-location";
import useCardLocationVM from "@/app/executive-summary/partials/tab2Profile/cardLocation/cardLocationVM";

export default function CardLocation({ project }: { project: string }) {

  const {modal,setModal,data,request,setRequest,listProvinsi,updateData} = useCardLocationVM();

 return (
  <CardItem title="Lokasi Proyek" setting settingEditOnclick={() => setModal(true)}>
   {data.length == 0 ? (
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
        <Box>
          {data[0].provinsi.map((x, index) => (
            <Chip size="small" label={x.name} key={index}/>
          ))}
        </Box>
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
         {data[0].keterangan}
       </Typography>
      </Stack>
     </Stack>
    </Stack>
   )}
   <DialogComponent
    dialogOpen={modal}
    dialogClose={() => setModal(false)}
    title="Ubah Lokasi Proyek"
    dialogFooter={
     <DialogActions sx={{ p: 2, px: 3 }}>
      <Button variant="outlined" onClick={() => setModal(false)}>
       Batal
      </Button>
      <Button variant="contained" type="submit" onClick={() => updateData()}>
       Simpan
      </Button>
     </DialogActions>
    }
   >
    <FormLocation mode="add" options={listProvinsi} request={request} setRequest={setRequest} />
   </DialogComponent>
  </CardItem>
 );
}
