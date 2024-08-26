import React from "react";
import { Stack } from "@mui/material";
import CardRoadmap from "./tab5Roadmap/cardRoadmap/cardRoadmap";

export default function Tab5Roadmap({ project }: { project: string }) {
 return (
  <Stack gap={1}>
   <CardRoadmap project={project} />
  </Stack>
 );
}
