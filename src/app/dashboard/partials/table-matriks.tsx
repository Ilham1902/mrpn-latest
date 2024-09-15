import React from "react";
import { BlockCard } from "./card";
import Matriks from "./matriks";

export default function TableMatriks() {
 return (
  <BlockCard title="Peta Risiko">
   <Matriks levelId={2} />
  </BlockCard>
 );
}
