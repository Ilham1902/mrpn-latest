import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { SxAutocomplete, SxAutocompleteTextField } from "../dropdownKp";
import { paramVariantDefault } from "@/app/utils/constant";

export default function AutocompleteSelect({
 multiple,
 value,
 options,
 onChange,
 paperComponent,
 getOptionLabel,
 placeholder,
}: {
 multiple?: boolean;
 value?: any;
 options?: any;
 onChange?: any;
 paperComponent?: any;
 getOptionLabel?: any;
 placeholder?: string;
}) {
 return (
  <Autocomplete
   multiple={multiple}
   disableCloseOnSelect
   filterSelectedOptions
   size="small"
   freeSolo={false}
   value={value}
   options={options}
   getOptionLabel={getOptionLabel}
   onChange={onChange}
   renderInput={(params) => (
    <TextField
     {...params}
     InputLabelProps={{
      shrink: true,
     }}
     placeholder={placeholder}
     sx={SxAutocompleteTextField(paramVariantDefault)}
    />
   )}
   PaperComponent={paperComponent}
   sx={{
    ...SxAutocomplete,
    ".MuiInputBase-root": {
     borderRadius: 1,
    },
   }}
  />
 );
}
