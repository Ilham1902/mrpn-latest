import React from "react";
import { Stack } from "@mui/material";
import CardCascading from "./tab4Cascading/cardCascading";
import CardRoKunci from "./tab4Cascading/cardRoKunci";

export default function Tab4Cascading({ project }: { project: string }) {
 return (
  <Stack gap={1}>
   <CardCascading project={project} />
   <CardRoKunci project={project} />
  </Stack>
 );
}
