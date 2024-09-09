import React from "react";
import CardItem from "@/app/components/cardTabItem";
import CascadingOrgChart from "./partials/org-chart";
import useCardDiagramVM from "@/app/executive-summary/partials/tab4Cascading/cardDiagram/cardDiagramVM";

export default function CardCascading({ project }: { project: string }) {

  const {
    rkpState
  } = useCardDiagramVM()

 return (
  <CardItem title="Cascading">
   <CascadingOrgChart project={project} />
  </CardItem>
 );
}
