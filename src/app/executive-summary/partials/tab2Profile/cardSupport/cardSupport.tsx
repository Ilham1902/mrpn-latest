import React from "react";
import EmptyState from "@/components/empty";
import { IconEmptyData } from "@/components/icons";
import CardItem from "@/components/cardTabItem";
import TableSupport from "./table-support";
import useCardSupportVM from "@/app/executive-summary/partials/tab2Profile/cardSupport/cardSupportVM";

export default function CardSupport({ project }: { project: string }) {

  const {
    data,
    exsum
  } = useCardSupportVM()


 return (
  <CardItem title={`Mendukung ${project === "5" ? "PN" : "PP"}`}>
   {data == undefined ? (
    <EmptyState
     dense
     icon={<IconEmptyData width={100} />}
     title="Data Kosong"
     description="Silahkan isi konten halaman ini"
    />
   ) : (
    <TableSupport data={data} exsum={exsum} />
   )}
  </CardItem>
 );
}
