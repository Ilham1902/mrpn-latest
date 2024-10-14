import React from "react";
import { Typography } from "@mui/material";
import EmptyState from "@/components/empty";
import { IconEmptyData } from "@/components/icons";
import CardItem from "@/components/cardTabItem";
import useCardSupportVM from "@/app/executive-summary/partials/tab2Profile/cardSupport/cardSupportVM";
import {useRKPContext} from "@/lib/core/hooks/useHooks";
import {IndikatorDto} from "@/app/misc/rkp/rkpServiceModel";

export const getLevel = (level:string) => {
  switch (level){
    case "PN":
      return "PN"
    case "PP":
      return "PN"
    case "KP":
      return "PP"
    case "PROP":
      return "KP"
    case "P":
      return "PROP"
    default:
      return "KP"
  }
}

export default function CardIndicator({ project }: { project: string }) {

  const {
    data,
    exsum
  } = useCardSupportVM();

  const { rpjmn, year } = useRKPContext((store) => store);

  const getTarget = (indikator: IndikatorDto) => {
    let index = 0;

    if (rpjmn != undefined) {
      for (let i = rpjmn.start; i <= rpjmn.end; i++) {
        if (i !== year && i <= year) {
          index++;
        }
      }
    }
    let target = "";
    switch (index) {
      case 0:
        target = indikator.target_0 +" "+indikator.satuan;
        break;
      case 1:
        target = indikator.target_1 +" "+indikator.satuan;
        break;
      case 2:
        target = indikator.target_2 +" "+indikator.satuan;
        break;
      case 3:
        target = indikator.target_3 +" "+indikator.satuan;
        break;
      case 4:
        target = indikator.target_4 +" "+indikator.satuan;
        break;
      default:
        target = indikator.target_0 +" "+indikator.satuan;
        break;
    }

    return target;
  };

 return (
  <CardItem title={`Indikator Kinerja Utama ${exsum.level}`}>
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
              <Typography variant="body1">{`${indikator.value} (${getTarget(indikator)})`}</Typography>
            </li>
          ))
       )}
     </ul>
   )}
  </CardItem>
 );
}
