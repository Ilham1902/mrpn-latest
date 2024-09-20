import React from "react";
import { FormControl, Grid, TextField, Typography } from "@mui/material";
import TextareaComponent from "@/app/components/textarea";
import FieldLabelInfo from "@/app/components/fieldLabelInfo";

export default function FormRegulation({ mode }: { mode?: string }) {
 return (
  <Grid container spacing={2}>
   <Grid item xs={12}>
    <FormControl fullWidth>
     <FieldLabelInfo
      title="Regulasi, Kebijakan, Peraturan, dan Prosedur Terkait"
      information="Regulasi, Kebijakan, Peraturan, dan Prosedur Terkait"
     />
     <Typography fontWeight={600}>
      Regulasi, Kebijakan, Peraturan, dan Prosedur Terkait
     </Typography>
    </FormControl>
   </Grid>
   <Grid item xs={12}>
    <FormControl fullWidth>
     <FieldLabelInfo title="Keterangan" information="Keterangan" />
     {mode === "add" ? (
      <TextareaComponent label="Keterangan" placeholder="Keterangan" />
     ) : mode === "edit" ? (
      <TextareaComponent
       label="Keterangan"
       placeholder="Keterangan"
       value="-"
      />
     ) : (
      <Typography fontWeight={600}>-</Typography>
     )}
    </FormControl>
   </Grid>
  </Grid>
 );
}
