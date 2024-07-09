import React from "react";
import { Stack } from "@mui/material";
import CardCritical from "./tab6Critical/cardCritical";

export default function Tab6Critical({ project }: { project: string }) {
 return (
  <Stack gap={1}>
   <CardCritical project={project} />
  </Stack>
 );
}
