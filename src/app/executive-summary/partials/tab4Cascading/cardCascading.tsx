import React from "react";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import CascadingOrgChart from "./partials/org-chart";

export default function CardCascading({ project }: { project: string }) {
 const isEmpty = false;

 return (
  <CardItem title="Cascading">
   {isEmpty || project === "4" ? (
    <EmptyState
     dense
     icon={<IconEmptyData width={100} />}
     title="Data Kosong"
     description="Silahkan isi konten halaman ini"
    />
   ) : (
    <CascadingOrgChart project={project} />
   )}
  </CardItem>
 );
}
