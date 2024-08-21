import React from "react";
import { Stack } from "@mui/material";
import CardRegulation from "./tab7Regulation/cardRegulation";

export default function Tab7Regulation({ project }: { project: string }) {
 return (
  <Stack gap={1}>
   <CardRegulation project={project} />
  </Stack>
 );
}
