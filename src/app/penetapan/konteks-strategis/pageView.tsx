/* eslint-disable @next/next/no-img-element */
"use client";

import ContentPage from "@/components/contents";
import React from "react";
import {
 Stack,
} from "@mui/material";
import CardIndikasiSasaran from "./cardIndikasiSasaran/cardIndikasiSasaran";
import CardSasaranKinerjaUPR from "./cardSasaranKinerjaUPR/cardSasaranKinerjaUPR";
import TableRegulation from "./form/partials/table-regulation";
import TableStakeholderInternal from "./form/partials/table-stakeholder-internal";
import TableStakeholderEksternal from "./form/partials/table-stakeholder-eksternal";
import TableRincianOutput from "./form/partials/table-ro";
import {useRKPContext} from "@/lib/core/hooks/useHooks";
import {IconEmptyData} from "@/components/icons";
import EmptyState from "@/components/empty";

export default function PageKonteksStrategisView({}) {

 const {rkpState} = useRKPContext(state => state);

 return (
  <>
   <ContentPage
     title="Eksplorasi Konteks Strategis"
     chooseProject
   >
    {rkpState === undefined ?
      <EmptyState
        dense
        icon={<IconEmptyData width={100}/>}
        title="Pilih RKP"
        description="Silahkan pilih rkp terlebih dulu"
      />
    :
     <Stack gap={1}>
      <CardIndikasiSasaran />
      <CardSasaranKinerjaUPR />
      <TableRegulation mode="add" />
      <TableStakeholderInternal mode="view" project="1" />
      <TableStakeholderEksternal mode="view" project="1" />
      <TableRincianOutput mode="view" />
     </Stack>
    }
   </ContentPage>

   {/*<DialogComponent*/}
   {/* width={240}*/}
   {/* dialogOpen={modalOpenDelete}*/}
   {/* dialogClose={handleModalClose}*/}
   {/* title="Hapus Data"*/}
   {/* dialogFooter={<DialogActions sx={{ p: 2, px: 3 }}>
   <Button onClick={handleModalClose}>Batal</Button>
   <Button variant="contained" color="error" type="submit">
    Hapus
   </Button>
  </DialogActions>}*/}
   {/*>*/}
   {/* Anda yakin akan menghapus data ini?*/}
   {/*</DialogComponent>*/}

  </>
 );
}
