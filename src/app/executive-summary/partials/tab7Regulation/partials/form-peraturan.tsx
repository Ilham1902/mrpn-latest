import React, { Fragment } from "react";
import {
 Autocomplete,
 Box,
 Checkbox,
 Divider,
 FormControl,
 FormControlLabel,
 FormGroup,
 Grid,
 Paper,
 TextField,
 Typography,
} from "@mui/material";
import TextareaComponent from "@/app/components/textarea";
import FieldLabelInfo from "@/app/components/fieldLabelInfo";
import { listPeraturan } from "@/app/utils/data";
import {
 SxAutocomplete,
 SxAutocompleteTextField,
} from "@/app/components/dropdownKp";
import { paramVariantDefault } from "@/app/utils/constant";

type Option = (typeof listPeraturan)[number];

export default function FormPeraturan({ mode }: { mode?: string }) {
 const [columnsInstance, setColumnsInstance] = React.useState<Option[]>([]);
 const [selectAll, setSelectAll] = React.useState<boolean>(false);

 const handleToggleSelectAllInstance = () => {
  setSelectAll((prev) => {
   if (!prev) setColumnsInstance([...listPeraturan]);
   else setColumnsInstance([]);
   return !prev;
  });
 };

 return (
  <>
   <Grid container spacing={2}>
    <Grid item xs={12}>
     <FormControl fullWidth>
      <FieldLabelInfo
       title="Peraturan Terkait"
       information="Peraturan Terkait"
      />
      {mode === "add" || mode === "edit" ? (
       <Autocomplete
        multiple
        disableCloseOnSelect
        filterSelectedOptions
        size="small"
        freeSolo={false}
        value={columnsInstance}
        options={listPeraturan}
        getOptionLabel={(option) => option.source}
        onChange={(_e, value, reason) => {
         if (reason === "clear" || reason === "removeOption")
          setSelectAll(false);
         if (reason === "selectOption" && value.length === listPeraturan.length)
          setSelectAll(true);
         setColumnsInstance(value);
        }}
        renderInput={(params) => (
         <TextField
          {...params}
          InputLabelProps={{
           shrink: true,
          }}
          placeholder="Pilih peraturan terkait"
          sx={SxAutocompleteTextField(paramVariantDefault)}
         />
        )}
        PaperComponent={(paperProps) => {
         const { children, ...restPaperProps } = paperProps;
         return (
          <Paper {...restPaperProps}>
           <Box onMouseDown={(e) => e.preventDefault()} pl={1.5} py={0.5}>
            <FormControlLabel
             onClick={(e) => {
              e.preventDefault();
              handleToggleSelectAllInstance();
             }}
             label="Pilih semua peraturan"
             control={<Checkbox id="select-all-checkbox" checked={selectAll} />}
            />
           </Box>
           <Divider />
           {children}
          </Paper>
         );
        }}
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
    <Grid item xs={12}>
     <FormControl fullWidth>
      <FieldLabelInfo
       title="Amanat Peraturan yang Terkait"
       information="Amanat Peraturan yang Terkait"
      />
      {mode === "add" ? (
       <TextareaComponent
        label="Amanat Peraturan yang Terkait"
        placeholder="Amanat Peraturan yang Terkait"
       />
      ) : mode === "edit" ? (
       <TextareaComponent
        label="Amanat Peraturan yang Terkait"
        placeholder="Amanat Peraturan yang Terkait"
        value="-"
       />
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
   </Grid>
  </>
 );
}
