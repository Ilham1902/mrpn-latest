import React from "react";
import { Stack } from "@mui/material";
import CardCascading from "./tab4Cascading/cardCascading";
export default function Tab4Diagram({ project }: { project: string }) {
 return (
  <Stack gap={1}>
   <CardCascading project={project} />
  </Stack>
 );
}
