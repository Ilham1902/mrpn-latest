import React from "react";
import { Stack } from "@mui/material";
import CardRisk from "./tab9Indication/cardRisk";

export default function Tab9Risk({ project }: { project: string }) {
 return (
  <Stack gap={1}>
   <CardRisk project={project} />
  </Stack>
 );
}
