import React from "react";
import { Stack } from "@mui/material";
import CardTows from "./tab3Fot/cardTows/cardTows";

export default function Tab3Fot({ project }: { project: string }) {
 return (
  <Stack gap={1}>
   {/* <CardFot project={project} /> */}
   <CardTows project={project} />
  </Stack>
 );
}
