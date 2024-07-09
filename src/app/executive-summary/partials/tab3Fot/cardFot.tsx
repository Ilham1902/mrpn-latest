import React, { Fragment } from "react";
import { Button, styled } from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import { IconFA } from "@/app/components/icons/icon-fa";
import Image from "next/image";
import { dataTema } from "../../dataTema";

export default function CardFot({ project }: { project: string }) {
 const isEmpty = false;

 const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
 });

 return (
  <CardItem
   title="Kerangka Pikir"
   addButton={
    <Button
     size="small"
     component="label"
     role={undefined}
     variant="contained"
     tabIndex={-1}
     startIcon={<IconFA name="upload" size={14} />}
     sx={{ borderRadius: 25, textTransform: "capitalize", px: 2 }}
    >
     Upload file
     <VisuallyHiddenInput type="file" />
    </Button>
   }
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
     {dataTema.map((itemFot, index) => (
      <Fragment key={index}>
       {project === itemFot.temaId && (
        <>
         {itemFot.fot.map((imgFot, index) => (
          <Image
           key={index}
           alt="Kerangka Pikir"
           src={imgFot}
           width={0}
           height={0}
           sizes="100vw"
           style={{ width: "100%", height: "auto" }}
          />
         ))}
        </>
       )}
      </Fragment>
     ))}
    </>
   )}
  </CardItem>
 );
}
