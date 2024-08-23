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
import { listProvinsi } from "@/app/utils/provinsi";
import { listFundSource, listKldBadanUsaha } from "@/app/utils/data";
import { StrategyTowsContent } from "./tableDiagram";

type Option = (typeof listFundSource)[number];
type OptionKl = (typeof listKldBadanUsaha)[number];
type OptionLoc = (typeof listProvinsi)[number];

export default function FormDiagram({ mode }: { mode?: string }) {
 const [columnsInstance, setColumnsInstance] = React.useState<Option[]>([]);
 const [columnsKl, setColumnsKl] = React.useState<OptionKl[]>([]);
 const [columnsLocation, setColumnsLocation] = React.useState<OptionLoc[]>([]);
 const [selectAll, setSelectAll] = React.useState<boolean>(false);

 const handleToggleSelectAllInstance = () => {
  setSelectAll((prev) => {
   if (!prev) setColumnsInstance([...listFundSource]);
   else setColumnsInstance([]);
   return !prev;
  });
 };

 const handleToggleSelectAllLocation = () => {
  setSelectAll((prev) => {
   if (!prev) setColumnsLocation([...listProvinsi]);
   else setColumnsLocation([]);
   return !prev;
  });
 };

 const handleToggleSelectAllKl = () => {
  setSelectAll((prev) => {
   if (!prev) setColumnsKl([...listKldBadanUsaha]);
   else setColumnsKl([]);
   return !prev;
  });
 };

 return (
  <Grid container spacing={2}>
   <Grid item xs={12}>
    <FormControl fullWidth>
     <FieldLabelInfo
      title="Nomenklatur Kegiatan Prioritas"
      information="Nomenklatur Kegiatan Prioritas"
     />
     <Typography fontWeight={600}>
      Penanggulangan kurang energi kronik (KEK) pada ibu hamil
     </Typography>
    </FormControl>
   </Grid>
   <Grid item xs={12}>
    <FormControl fullWidth>
     <FieldLabelInfo
      title="Sasaran & Kegiatan Prioritas"
      information="Sasaran & Kegiatan Prioritas"
     />
     <Typography fontWeight={600}>Kesehatan untuk Semua</Typography>
    </FormControl>
   </Grid>
   <Grid item xs={12}>
    <FormControl fullWidth>
     <FieldLabelInfo title="Strategi TOWS" information="Strategi TOWS" />
     <StrategyTowsContent />
    </FormControl>
   </Grid>
   <Grid item xs={12}>
    <FormControl fullWidth>
     <FieldLabelInfo title="Sumber Pendanaan" information="Sumber Pendanaan" />

     {mode === "add" || mode === "edit" ? (
      <Autocomplete
       multiple
       disableCloseOnSelect
       filterSelectedOptions
       size="small"
       freeSolo={false}
       value={columnsInstance}
       options={listFundSource}
       getOptionLabel={(option) => option.source}
       onChange={(_e, value, reason) => {
        if (reason === "clear" || reason === "removeOption")
         setSelectAll(false);
        if (reason === "selectOption" && value.length === listFundSource.length)
         setSelectAll(true);
        setColumnsInstance(value);
       }}
       renderInput={(params) => (
        <TextField
         {...params}
         InputLabelProps={{
          shrink: true,
         }}
         placeholder="Pilih sumber pendanaan"
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
            label="Pilih semua sumber pendanaan"
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
      title="Indikasi K/L/D Badan Usaha"
      information="Indikasi K/L/D Badan Usaha"
     />
     {mode === "add" || mode === "edit" ? (
      <Autocomplete
       multiple
       disableCloseOnSelect
       filterSelectedOptions
       size="small"
       freeSolo={false}
       value={columnsKl}
       options={listKldBadanUsaha}
       getOptionLabel={(option) => option.source}
       onChange={(_e, value, reason) => {
        if (reason === "clear" || reason === "removeOption")
         setSelectAll(false);
        if (
         reason === "selectOption" &&
         value.length === listKldBadanUsaha.length
        )
         setSelectAll(true);
        setColumnsKl(value);
       }}
       renderInput={(params) => (
        <TextField
         {...params}
         InputLabelProps={{
          shrink: true,
         }}
         placeholder="Pilih indikasi K/L/D/Badan usaha"
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
             handleToggleSelectAllKl();
            }}
            label="Pilih semua indikasi"
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
     <FieldLabelInfo title="Indikasi Lokasi" information="Indikasi Lokasi" />
     {mode === "add" || mode === "edit" ? (
      <Autocomplete
       multiple
       disableCloseOnSelect
       filterSelectedOptions
       size="small"
       freeSolo={false}
       value={columnsLocation}
       options={listProvinsi}
       getOptionLabel={(option) => option.nama}
       onChange={(_e, value, reason) => {
        if (reason === "clear" || reason === "removeOption")
         setSelectAll(false);
        if (reason === "selectOption" && value.length === listProvinsi.length)
         setSelectAll(true);
        setColumnsLocation(value);
       }}
       renderInput={(params) => (
        <TextField
         {...params}
         InputLabelProps={{
          shrink: true,
         }}
         placeholder="Pilih provinsi"
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
             handleToggleSelectAllLocation();
            }}
            label="Pilih semua provinsi"
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
