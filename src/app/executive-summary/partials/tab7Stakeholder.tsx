import React from "react";
import { Stack } from "@mui/material";
// import CardStakeholder from "./tab7Regulation/cardStakeholder";
import CardStakeholder from "./tab7Regulation/cardStakeholder/cardStakeholder";

export default function Tab7Stakeholder({ project }: { project: string }) {
 return (
  <Stack gap={1}>
   <CardStakeholder project={project} />
  </Stack>
 );
}
