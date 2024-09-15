import React from "react";
import { Stack } from "@mui/material";
import CardIntervensi from "./tab4Cascading/cardIntervensi/cardIntervensi";

export default function Tab4Profile({ project }: { project: string }) {
 return (
  <Stack gap={1}>
   <CardIntervensi project={project} />
  </Stack>
 );
}
