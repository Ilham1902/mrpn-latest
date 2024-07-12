import React from "react";
import { FormControl, Grid, TextField, Typography } from "@mui/material";
import TextareaComponent from "@/app/components/textarea";
import FieldLabelInfo from "@/app/components/fieldLabelInfo";

export default function FormIdentifikasi({ mode }: { mode?: string }) {
 return (
  <Grid container spacing={2}>
   <Grid item xs={12}>
    <FormControl fullWidth>
     <FieldLabelInfo title="Uraian" information="Uraian" />
     {mode === "add" ? (
      <TextareaComponent label="Uraian" placeholder="Uraian" />
     ) : mode === "edit" ? (
      <TextareaComponent label="Uraian" placeholder="Uraian" value="-" />
     ) : (
      <Typography fontWeight={600}>-</Typography>
     )}
    </FormControl>
   </Grid>
   <Grid item xs={12}>
    <FormControl fullWidth>
     <FieldLabelInfo title="Sasaran" information="Sasaran" />
     {mode === "add" ? (
      <TextareaComponent label="Sasaran" placeholder="Sasaran" />
     ) : mode === "edit" ? (
      <TextareaComponent label="Sasaran" placeholder="Sasaran" value="-" />
     ) : (
      <Typography fontWeight={600}>-</Typography>
     )}
    </FormControl>
   </Grid>
   <Grid item xs={12}>
    <FormControl fullWidth>
     <FieldLabelInfo title="Indikator" information="Indikator" />
     {mode === "add" ? (
      <TextField
       variant="outlined"
       size="small"
       placeholder="Indikator"
       InputLabelProps={{
        shrink: true,
       }}
      />
     ) : mode === "edit" ? (
      <TextField
       variant="outlined"
       size="small"
       value="-"
       InputLabelProps={{
        shrink: true,
       }}
      />
     ) : (
      <Typography fontWeight={600}>-</Typography>
     )}
    </FormControl>
   </Grid>
   <Grid item xs={12}>
    <FormControl fullWidth>
     <FieldLabelInfo title="Target" information="Target" />
     {mode === "add" ? (
      <TextField
       variant="outlined"
       size="small"
       placeholder="Target"
       InputLabelProps={{
        shrink: true,
       }}
      />
     ) : mode === "edit" ? (
      <TextField
       variant="outlined"
       size="small"
       value="-"
       InputLabelProps={{
        shrink: true,
       }}
      />
     ) : (
      <Typography fontWeight={600}>-</Typography>
     )}
    </FormControl>
   </Grid>
  </Grid>
 );
}
