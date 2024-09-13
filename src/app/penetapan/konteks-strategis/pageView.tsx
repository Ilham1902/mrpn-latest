/* eslint-disable @next/next/no-img-element */
"use client";

import ContentPage from "@/components/contents";
import React from "react";
import {
 Stack,
} from "@mui/material";
import CardIndikasiSasaran from "./cardIndikasiSasaran/cardIndikasiSasaran";
import CardSasaranKinerjaUPR from "./cardSasaranKinerjaUPR/cardSasaranKinerjaUPR";
import CardRegulation from "./cardRegulasi/cardRegulation";
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
      <CardRegulation mode="add" />
      <TableStakeholderInternal mode="view" project="1" />
      <TableStakeholderEksternal mode="view" project="1" />
      <TableRincianOutput mode="view" />
     </Stack>
    }
   </ContentPage>

  </>
 );
}
