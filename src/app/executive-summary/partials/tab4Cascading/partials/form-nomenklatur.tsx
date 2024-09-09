import React from "react";
import {
 Autocomplete,
 FormControl,
 Grid,
 TextField,
 Typography,
} from "@mui/material";
import TableProfilRoKunci from "../table-profil-ro-kunci";
import {
 SxAutocompleteTextField,
 SxAutocomplete,
} from "@/app/components/dropdownKp";
import FieldLabelInfo from "@/app/components/fieldLabelInfo";
import { listTagProP } from "@/app/executive-summary/data";
import { paramVariantDefault } from "@/app/utils/constant";

export default function FormNomenklatur({ mode }: { mode?: string }) {
 return (
  <>
   <Grid container spacing={2}>
    <Grid item xs={12} md={6}>
     <FormControl fullWidth>
      <FieldLabelInfo title="Nomenklatur IKU" information="Nomenklatur IKU" />
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="Nomenklatur IKU"
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
    <Grid item xs={12} md={6}>
     <FormControl fullWidth>
      <FieldLabelInfo title="Tagging Strategi" information="Tagging Strategi" />
      {mode === "add" || mode === "edit" ? (
       <Autocomplete
        disableCloseOnSelect
        filterSelectedOptions
        size="small"
        freeSolo={false}
        options={listTagProP}
        getOptionLabel={(option) => option.description}
        renderInput={(params) => (
         <TextField
          {...params}
          InputLabelProps={{
           shrink: true,
          }}
          placeholder="Pilih tagging strategi"
          sx={SxAutocompleteTextField(paramVariantDefault)}
         />
        )}
        sx={{
         ...SxAutocomplete,
         ".MuiInputBase-root": {
          borderRadius: 1,
         },
        }}
       />
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item xs={12}></Grid>
   </Grid>
   {/*<TableProfilRoKunci />*/}
  </>
 );
}
