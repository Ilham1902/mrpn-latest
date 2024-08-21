import React, { Fragment } from "react";
import { Button, styled } from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import { IconFA } from "@/app/components/icons/icon-fa";
import Image from "next/image";
import { dataTema } from "../../dataTema";
import { VisuallyHiddenInput } from "@/app/utils/constant";
import TablePeraturan from "./partials/table-peraturan";

export default function CardRegulation({ project }: { project: string }) {
 const [modalOpen, setModalOpen] = React.useState(false);

 const handleModalOpen = () => {
  setModalOpen(true);
 };

 const handleModalClose = () => {
  setModalOpen(false);
 };

 const isEmpty = false;

 return (
  <CardItem
   title="Kerangka Regulasi"
   setting
   settingEditOnclick={handleModalOpen}
  >
   {isEmpty || project === "4" ? (
    <EmptyState
     dense
     icon={<IconEmptyData width={100} />}
     title="Data Kosong"
     description="Silahkan isi konten halaman ini"
    />
   ) : (
    <TablePeraturan
     mode="view"
     modalOpen={modalOpen}
     modalClose={handleModalClose}
    />
   )}
  </CardItem>
 );
}
