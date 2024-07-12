import React from "react";
import { FormControl, Grid, TextField, Typography } from "@mui/material";
import TextareaComponent from "@/app/components/textarea";
import FieldLabelInfo from "@/app/components/fieldLabelInfo";

export default function FormSasaran({ mode }: { mode?: string }) {
 return (
  <Grid container spacing={2}>
   <Grid item xs={12}>
    <FormControl fullWidth>
     <FieldLabelInfo title="Peran" information="Peran" />
     {mode === "add" ? (
      <TextareaComponent label="Peran" placeholder="Peran" />
     ) : mode === "edit" ? (
      <TextareaComponent label="Peran" placeholder="Peran" value="-" />
     ) : (
      <Typography fontWeight={600}>-</Typography>
     )}
    </FormControl>
   </Grid>
   <Grid item xs={12}>
    <FormControl fullWidth>
     <FieldLabelInfo title="Entitas MRPN" information="Entitas MRPN" />
     {mode === "add" ? (
      <TextareaComponent label="Entitas MRPN" placeholder="Entitas MRPN" />
     ) : mode === "edit" ? (
      <TextareaComponent
       label="Entitas MRPN"
       placeholder="Entitas MRPN"
       value="-"
      />
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
