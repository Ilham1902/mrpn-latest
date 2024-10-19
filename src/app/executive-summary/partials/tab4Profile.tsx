import React from "react";
import { Stack } from "@mui/material";
import CardIntervensi from "./tab4Cascading/cardIntervensi/cardIntervensi";

export default function Tab4Profile({
  project,
  toggleShowTab,
}: {
  project: string;
  toggleShowTab?: boolean;
}) {
  return (
    <Stack gap={1}>
      <CardIntervensi project={project} toggleShowTab={toggleShowTab} />
    </Stack>
  );
}
