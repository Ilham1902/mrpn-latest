import React from "react";
import { Stack } from "@mui/material";
import CardSwot from "./tab1Background/cardSwot";
import CardGoals from "./tab1Background/cardGoals";
import CardSegment from "./tab1Background/cardSegment";
import CardUrgent from "./tab1Background/cardUrgent";

export default function Tab1Background({ project }: { project: string }) {
 return (
  <Stack gap={1}>
   <CardUrgent project={project} />
   <CardSegment project={project} />
   <CardSwot project={project} />
   <CardGoals project={project} />
  </Stack>
 );
}
