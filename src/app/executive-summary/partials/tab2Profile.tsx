import React from "react";
import { Stack } from "@mui/material";
import CardRelated from "./tab2Profile/cardRelated";
import CardSupport from "./tab2Profile/cardSupport";
import CardNomenklatur from "./tab2Profile/cardNomenklatur";
import CardIndicator from "./tab2Profile/cardIndicator";
import CardLocation from "./tab2Profile/cardLocation";
import CardProfilRo from "./tab2Profile/cardProfilRo";
import CardStakeholder from "./tab2Profile/cardStakeholder";

export default function Tab2Profile({ project }: { project: string }) {
 return (
  <Stack gap={1}>
   <CardNomenklatur project={project} />
   <CardSupport project={project} />
   <CardRelated project={project} />
   <CardIndicator project={project} />
   <CardLocation project={project} />
   <CardProfilRo project={project} />
   <CardStakeholder project={project} />
  </Stack>
 );
}
