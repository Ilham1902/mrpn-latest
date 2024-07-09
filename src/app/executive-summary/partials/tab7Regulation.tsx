import React from "react";
import { Stack } from "@mui/material";
import CardRegulation from "./tab7Regulation/cardRegulation";
import CardInstitution from "./tab7Regulation/cardInstitution";

export default function Tab7Regulation({ project }: { project: string }) {
 return (
  <Stack gap={1}>
   <CardInstitution project={project} />
   <CardRegulation project={project} />
  </Stack>
 );
}
