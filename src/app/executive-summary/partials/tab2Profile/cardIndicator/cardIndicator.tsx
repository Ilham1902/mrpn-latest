import React from "react";
import { Typography } from "@mui/material";
import EmptyState from "@/components/empty";
import { IconEmptyData } from "@/components/icons";
import CardItem from "@/components/cardTabItem";
import useCardSupportVM from "@/app/executive-summary/partials/tab2Profile/cardSupport/cardSupportVM";

export default function CardIndicator({ project }: { project: string }) {

  const {
    data,
    exsum
  } = useCardSupportVM();

 return (
  <CardItem title={`Indikator Kinerja Utama ${project === "5" ? "PN" : "PP"}`}>
   {data === undefined ? (
    <EmptyState
     dense
     icon={<IconEmptyData width={100} />}
     title="Data Kosong"
     description="Silahkan isi konten halaman ini"
    />
   ) : (
     <ul>
       {data.sasaran.map((sasaran, index) =>
          sasaran.indikator.map((indikator, index2) => (
            <li key={index}>
              <Typography variant="body1">{indikator.value}</Typography>
            </li>
          ))
       )}
     </ul>
   )}
  </CardItem>
 );
}
