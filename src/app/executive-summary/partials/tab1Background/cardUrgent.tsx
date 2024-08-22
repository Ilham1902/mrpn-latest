import React, { Fragment } from "react";
import { Button, DialogActions, Typography } from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import dynamic from "next/dynamic";
import DialogComponent from "@/app/components/dialog";
import { dataTema } from "../../dataTema";

export default function CardUrgent({ project }: { project: string }) {
 const [modalOpenSegment, setModalOpenSegment] = React.useState(false);

 const [value, setValue] = React.useState("");

 const handleModalOpenSegment = () => {
  setModalOpenSegment(true);
 };

 const handleModalClose = () => {
  setModalOpenSegment(false);
 };

 const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

 const isEmpty = false;

 return (
  <CardItem
   title="Urgensi Proyek"
   setting
   settingEditOnclick={handleModalOpenSegment}
  >
   {isEmpty || project === "4" ? (
    <EmptyState
     dense
     icon={<IconEmptyData width={100} />}
     title="Data Kosong"
     description="Silahkan isi konten halaman ini"
    />
   ) : (
    <>
     {dataTema.map((itemUrgent, index) => (
      <Fragment key={index}>
       {project === itemUrgent.temaId && (
        <>
         {itemUrgent.urgensi.length > 1 ? (
          <ul>
           {itemUrgent.urgensi.map((detailUrgent, index) => (
            <li key={index}>
             <Typography variant="body1">{detailUrgent}</Typography>
            </li>
           ))}
          </ul>
         ) : (
          <Typography variant="body1">{itemUrgent.urgensi}</Typography>
         )}
        </>
       )}
      </Fragment>
     ))}
    </>
   )}
   <DialogComponent
    width={520}
    dialogOpen={modalOpenSegment}
    dialogClose={handleModalClose}
    title="Urgensi Proyek"
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
    <ReactQuill theme="snow" value={value} onChange={setValue} />
   </DialogComponent>
  </CardItem>
 );
}
