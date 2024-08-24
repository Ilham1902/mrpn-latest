import React, { Fragment } from "react";
import { Button, DialogActions, Typography } from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import AddButton from "@/app/components/buttonAdd";
import DialogComponent from "@/app/components/dialog";
import TableTagging from "./table-tagging";
import FormRelated from "./cardRelated/form-related";
import { dataTema } from "../../dataTema";

export default function CardIndicator({ project }: { project: string }) {
 const [modalOpenTag, setModalOpenTag] = React.useState(false);

 const handleModalOpenTag = () => {
  setModalOpenTag(true);
 };

 const handleModalClose = () => {
  setModalOpenTag(false);
 };

 const isEmpty = false;

 return (
  <CardItem title={`Indikator Kinerja Utama ${project === "5" ? "PN" : "PP"}`}>
   {isEmpty || project === "4" ? (
    <EmptyState
     dense
     icon={<IconEmptyData width={100} />}
     title="Data Kosong"
     description="Silahkan isi konten halaman ini"
    />
   ) : (
    <>
     {dataTema.map((itemIndicator, index) => (
      <Fragment key={index}>
       {project === itemIndicator.temaId && (
        <>
         {itemIndicator.iku.length > 1 ? (
          <ul>
           {itemIndicator.iku.map((detailIndicator, index) => (
            <li key={index}>
             <Typography variant="body1">{detailIndicator}</Typography>
            </li>
           ))}
          </ul>
         ) : (
          <Typography variant="body1">{itemIndicator.iku}</Typography>
         )}
        </>
       )}
      </Fragment>
     ))}
    </>
   )}
   <DialogComponent
    dialogOpen={modalOpenTag}
    dialogClose={handleModalClose}
    title="Tambah Kebijakan"
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
    {/*<FormRelated mode="add" />*/}
   </DialogComponent>
  </CardItem>
 );
}
