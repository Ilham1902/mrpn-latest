import React from "react";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import TableFund from "./tableFund";

export default function CardFund({ project }: { project: string }) {
 const isEmpty = false;

 return (
  <CardItem
   title={`Pendanaan & Investasi ${project === "5" ? "PP" : "KP"}`}
   contentNoPadding
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
     <TableFund project={project} />
    </>
   )}
  </CardItem>
 );
}
