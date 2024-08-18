import React from "react";
import {
 Autocomplete,
 Box,
 Checkbox,
 Divider,
 FormControl,
 FormControlLabel,
 Grid,
 Paper,
 TextField,
 Typography,
} from "@mui/material";
import {
 SxAutocompleteTextField,
 SxAutocomplete,
} from "@/app/components/dropdownKp";
import { paramVariantDefault } from "@/app/utils/constant";
import FieldLabelInfo from "@/app/components/fieldLabelInfo";
import { listSwotSo, listSwotSt, listSwotWo, listSwotWt } from "../../data";

type Option = (typeof listSwotSo)[number];

export default function FormTows({ mode }: { mode?: string }) {
 const [columnsSo, setColumnsSo] = React.useState<Option[]>([]);
 const [columnsWo, setColumnsWo] = React.useState<Option[]>([]);
 const [columnsSt, setColumnsSt] = React.useState<Option[]>([]);
 const [columnsWt, setColumnsWt] = React.useState<Option[]>([]);
 const [selectAll, setSelectAll] = React.useState<boolean>(false);
 const currentDate = new Date();

 const minDate = new Date();
 const maxDate = new Date();

 minDate.setFullYear(currentDate.getFullYear() - 10);
 maxDate.setFullYear(currentDate.getFullYear() + 20);

 const handleToggleSelectAllSo = () => {
  setSelectAll((prev) => {
   if (!prev) setColumnsSo([...listSwotSo]);
   else setColumnsSo([]);
   return !prev;
  });
 };

 const handleToggleSelectAllWo = () => {
  setSelectAll((prev) => {
   if (!prev) setColumnsWo([...listSwotWo]);
   else setColumnsWo([]);
   return !prev;
  });
 };
 const handleToggleSelectAllSt = () => {
  setSelectAll((prev) => {
   if (!prev) setColumnsSt([...listSwotSt]);
   else setColumnsSt([]);
   return !prev;
  });
 };
 const handleToggleSelectAllWt = () => {
  setSelectAll((prev) => {
   if (!prev) setColumnsWt([...listSwotWt]);
   else setColumnsWt([]);
   return !prev;
  });
 };

 return (
  <Grid container spacing={2}>
   <Grid item xs={12}>
    <FormControl fullWidth>
     <FieldLabelInfo title="Strategi SO" information="Strategi SO" />
     {mode === "add" || mode === "edit" ? (
      <Autocomplete
       multiple
       disableCloseOnSelect
       filterSelectedOptions
       size="small"
       freeSolo={false}
       value={columnsSo}
       options={listSwotSo}
       getOptionLabel={(option) => option.description}
       onChange={(_e, value, reason) => {
        if (reason === "clear" || reason === "removeOption")
         setSelectAll(false);
        if (reason === "selectOption" && value.length === listSwotSo.length)
         setSelectAll(true);
        setColumnsSo(value);
       }}
       renderInput={(params) => (
        <TextField
         {...params}
         InputLabelProps={{
          shrink: true,
         }}
         placeholder="Pilih strategi Strength Opportunity (SO)"
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
             handleToggleSelectAllSo();
            }}
            label="Pilih semua strategi"
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
     <FieldLabelInfo title="Strategi WO" information="Strategi WO" />
     {mode === "add" || mode === "edit" ? (
      <Autocomplete
       multiple
       disableCloseOnSelect
       filterSelectedOptions
       size="small"
       freeSolo={false}
       value={columnsWo}
       options={listSwotWo}
       getOptionLabel={(option) => option.description}
       onChange={(_e, value, reason) => {
        if (reason === "clear" || reason === "removeOption")
         setSelectAll(false);
        if (reason === "selectOption" && value.length === listSwotWo.length)
         setSelectAll(true);
        setColumnsWo(value);
       }}
       renderInput={(params) => (
        <TextField
         {...params}
         InputLabelProps={{
          shrink: true,
         }}
         placeholder="Pilih strategi Weakness Opportunity (WO)"
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
             handleToggleSelectAllWo();
            }}
            label="Pilih semua strategi"
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
     <FieldLabelInfo title="Strategi ST" information="Strategi ST" />
     {mode === "add" || mode === "edit" ? (
      <Autocomplete
       multiple
       disableCloseOnSelect
       filterSelectedOptions
       size="small"
       freeSolo={false}
       value={columnsSt}
       options={listSwotSt}
       getOptionLabel={(option) => option.description}
       onChange={(_e, value, reason) => {
        if (reason === "clear" || reason === "removeOption")
         setSelectAll(false);
        if (reason === "selectOption" && value.length === listSwotSt.length)
         setSelectAll(true);
        setColumnsSt(value);
       }}
       renderInput={(params) => (
        <TextField
         {...params}
         InputLabelProps={{
          shrink: true,
         }}
         placeholder="Pilih strategi Strength Threats (ST)"
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
             handleToggleSelectAllSt();
            }}
            label="Pilih semua strategi"
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
     <FieldLabelInfo title="Strategi WT" information="Strategi WT" />
     {mode === "add" || mode === "edit" ? (
      <Autocomplete
       multiple
       disableCloseOnSelect
       filterSelectedOptions
       size="small"
       freeSolo={false}
       value={columnsWt}
       options={listSwotWt}
       getOptionLabel={(option) => option.description}
       onChange={(_e, value, reason) => {
        if (reason === "clear" || reason === "removeOption")
         setSelectAll(false);
        if (reason === "selectOption" && value.length === listSwotWt.length)
         setSelectAll(true);
        setColumnsWt(value);
       }}
       renderInput={(params) => (
        <TextField
         {...params}
         InputLabelProps={{
          shrink: true,
         }}
         placeholder="Pilih strategi Weakness Threats (WT)"
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
             handleToggleSelectAllWt();
            }}
            label="Pilih semua strategi"
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
  </Grid>
 );
}
