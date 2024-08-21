import React from "react";
import { Stack } from "@mui/material";
import CardDiagram from "./tab3Fot/cardDiagram";

export default function Tab3Diagram({ project }: { project: string }) {
 return (
  <Stack gap={1}>
   <CardDiagram project={project} />
  </Stack>
 );
}
