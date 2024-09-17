import React from "react";
import { BlockCard } from "./card";
import Matriks from "./matriks";
import DropdownKp from "@/app/components/dropdownKp";

export default function TableMatriks() {
 const [project, setProject] = React.useState("");

 const handleChangeProject = (value: any) => {
  setProject(value);
 };
 return (
  <BlockCard
   title="Peta Risiko"
   cardAction={
    <DropdownKp handleChangeProject={handleChangeProject} variant="primary" />
   }
  >
   <Matriks levelId={2} />
  </BlockCard>
 );
}
