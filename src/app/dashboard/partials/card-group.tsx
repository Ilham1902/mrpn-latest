import React from "react";
import { Grid } from "@mui/material";
import { logoOrange, logoBrown, logoGreen, logoBlue } from "@/utils/color";
import { BlockCard, CardValue } from "../partials/card";

export default function CardGroup() {
 return (
  <BlockCard>
   <Grid container spacing={2}>
    <CardValue
     iconName="lightbulb"
     color={logoOrange}
     value="36,9%"
     title="Realisasi Perlakuan Risiko"
    />
    <CardValue
     iconName="equals"
     color={logoBrown}
     value="5"
     title="Jumlah Perlakuan Risiko"
    />
    <CardValue
     iconName="file-lines"
     color={logoGreen}
     value="88%"
     title="Laporan Profil Risiko UPR LS"
    />
    <CardValue
     iconName="list-check"
     color={logoBlue}
     value="57,8%"
     title="Efektivitas Perlakuan Risiko"
    />
   </Grid>
  </BlockCard>
 );
}
