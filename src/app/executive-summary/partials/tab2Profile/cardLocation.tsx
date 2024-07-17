import React, { Fragment } from "react";
import {
 Box,
 Button,
 Card,
 CardContent,
 Chip,
 DialogActions,
 Stack,
 Typography,
} from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import DialogComponent from "@/app/components/dialog";
import { dataTema } from "../../dataTema";
// import FormSwot from "../tab1Background/form-swot";
import theme from "@/theme";
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
  <CardItem title="Lokasi" setting settingEditOnclick={handleModalOpen}>
   {isEmpty || project !== "1" ? (
    <EmptyState
     dense
     icon={<IconEmptyData width={100} />}
     title="Data Kosong"
     description="Silahkan isi konten halaman ini"
    />
   ) : (
    <Stack direction="row" flexWrap="wrap" gap={2}>
     {dataTema.map((itemLocation, index) => (
      <Fragment key={index}>
       {project === itemLocation.temaId && (
        <Stack direction="row" gap={2} width="100%">
         {itemLocation.location.map((detailLocation, index) => (
          <Stack
           key={index}
           direction="column"
           border={`1px solid ${grey[300]}`}
           borderRadius={2}
           width="50%"
          >
           <Box
            bgcolor={grey[200]}
            textAlign="center"
            p={1.5}
            borderRadius={2}
            borderBottom={`1px solid ${grey[300]}`}
            sx={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
           >
            <Typography fontSize={16} fontWeight={500}>
             Proyek {detailLocation.type}
            </Typography>
           </Box>
           <Stack p={2} gap={3} direction="column" height="100%">
            <Stack gap={1}>
             <Typography fontSize={16} fontWeight={500}>
              Lokasi{" "}
              <Typography component="span" color={grey[500]}>
               (Provinsi)
              </Typography>
             </Typography>
             <Stack direction="row" flexWrap="wrap" gap={0.5}>
              {detailLocation.list.length > 1 ? (
               <>
                {detailLocation.list.map((itemList, index) => (
                 <Box key={index}>
                  <Chip size="small" label={itemList} />
                 </Box>
                ))}
               </>
              ) : (
               "-"
              )}
             </Stack>
            </Stack>
            <Stack gap={1}>
             {detailLocation.note.length < 1 ? null : (
              <>
               <Typography fontSize={16} fontWeight={500}>
                Keterangan
               </Typography>
               {detailLocation.note.length > 1 ? (
                <ul>
                 {detailLocation.note.map((itemList, index) => (
                  <li key={index}>
                   <Typography variant="body1">{itemList}</Typography>
                  </li>
                 ))}
                </ul>
               ) : (
                <Typography variant="body1">{detailLocation.note}</Typography>
               )}
              </>
             )}
            </Stack>
           </Stack>
          </Stack>
         ))}
        </Stack>
       )}
      </Fragment>
     ))}
    </Stack>
   )}
   <DialogComponent
    dialogOpen={modalOpen}
    dialogClose={handleModalClose}
    title="Ubah Lokasi"
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
