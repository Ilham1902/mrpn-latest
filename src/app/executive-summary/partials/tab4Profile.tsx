import React from "react";
import { Stack } from "@mui/material";
import CardRoKunci from "./tab4Cascading/cardRoKunci";

export default function Tab4Profile({ project }: { project: string }) {
 return (
  <Stack gap={1}>
   <CardRoKunci project={project} />
  </Stack>
 );
}
