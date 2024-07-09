import React from "react";
import { Stack } from "@mui/material";
import CardFund from "./tab8Fund/cardFund";

export default function Tab8Fund({ project }: { project: string }) {
 return (
  <Stack gap={1}>
   <CardFund project={project} />
  </Stack>
 );
}
