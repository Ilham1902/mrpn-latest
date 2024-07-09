import React from "react";
import { Stack } from "@mui/material";
import CardFot from "./tab3Fot/cardFot";

export default function Tab3Fot({ project }: { project: string }) {
 return (
  <Stack gap={1}>
   <CardFot project={project} />
  </Stack>
 );
}
