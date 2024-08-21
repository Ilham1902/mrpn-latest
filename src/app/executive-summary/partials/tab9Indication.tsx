import React from "react";
import { Stack } from "@mui/material";
import CardIndication from "./tab9Indication/cardIndication";

export default function Tab9Indication({ project }: { project: string }) {
 return (
  <Stack gap={1}>
   <CardIndication project={project} />
  </Stack>
 );
}
