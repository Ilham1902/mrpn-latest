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
 ToggleButton,
 ToggleButtonGroup,
 Typography,
} from "@mui/material";
import TextareaComponent from "@/app/components/textarea";
import FieldLabelInfo from "@/app/components/fieldLabelInfo";
import DateRangePicker from "@/app/components/dateRange";
import { green, orange } from "@mui/material/colors";
import theme from "@/theme";
import {
 SxAutocompleteTextField,
 SxAutocomplete,
} from "@/app/components/dropdownKp";
import { paramVariantDefault } from "@/app/utils/constant";
import { listTagProP } from "../../data";

type OptionProP = (typeof listTagProP)[number];

export default function FormCritical({ mode }: { mode?: string }) {
 const [alignment, setAlignment] = React.useState();
 const [columnsProP, setColumnsProp] = React.useState<OptionProP[]>([]);
 const [selectAll, setSelectAll] = React.useState<boolean>(false);

 const handleChange = (
  event: React.MouseEvent<HTMLElement>,
  newAlignment: string | any
 ) => {
  setAlignment(newAlignment);
 };

 const handleToggleSelectAllProP = () => {
  setSelectAll((prev) => {
   if (!prev) setColumnsProp([...listTagProP]);
   else setColumnsProp([]);
   return !prev;
  });
 };

 return (
  <Grid container spacing={2}>
   <Grid item xs={12}>
    <FormControl fullWidth>
     <FieldLabelInfo title="Kegiatan" information="Kegiatan" />
     {mode === "add" || mode === "edit" ? (
      <Autocomplete
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
         placeholder="Pilih kegiatan"
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
   <Grid item xs={12}>
    <FormControl fullWidth>
     <FieldLabelInfo title="Tagging Strategi" information="Tagging Strategi" />
     {mode === "add" || mode === "edit" ? (
      <Autocomplete
       multiple
       disableCloseOnSelect
       filterSelectedOptions
       size="small"
       freeSolo={false}
       value={columnsProP}
       options={listTagProP}
       getOptionLabel={(option) => option.description}
       onChange={(_e, value, reason) => {
        if (reason === "clear" || reason === "removeOption")
         setSelectAll(false);
        if (reason === "selectOption" && value.length === listTagProP.length)
         setSelectAll(true);
        setColumnsProp(value);
       }}
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
       PaperComponent={(paperProps) => {
        const { children, ...restPaperProps } = paperProps;
        return (
         <Paper {...restPaperProps}>
          <Box onMouseDown={(e) => e.preventDefault()} pl={1.5} py={0.5}>
           <FormControlLabel
            onClick={(e) => {
             e.preventDefault();
             handleToggleSelectAllProP();
            }}
            label="Pilih semua tagging"
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
     <FieldLabelInfo title="Penanggungjawab" information="Penanggungjawab" />
     {mode === "add" ? (
      <TextField
       variant="outlined"
       size="small"
       placeholder="Penanggungjawab"
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
     <FieldLabelInfo title="Sumber Anggaran" information="Sumber Anggaran" />
     {mode === "add" ? (
      <TextField
       variant="outlined"
       size="small"
       placeholder="Sumber Anggaran"
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
     <FieldLabelInfo
      title="Waktu Pengerjaan (Mulai - Selesai)"
      information="Waktu Pengerjaan (Mulai - Selesai)"
     />
     {mode === "add" || mode === "edit" ? (
      <DateRangePicker
       placeholder="Pilih periode"
       sxInput={{
        backgroundColor: "red",
       }}
      />
     ) : (
      <Typography fontWeight={600}>-</Typography>
     )}
    </FormControl>
   </Grid>

   <Grid item xs={12}>
    <FormControl fullWidth>
     <FieldLabelInfo title="Kategori Proyek" information="Kategori Proyek" />
     {mode === "add" || mode === "edit" ? (
      <ToggleButtonGroup
       value={alignment}
       exclusive
       onChange={handleChange}
       aria-label="time"
      >
       <ToggleButton
        value="bumn"
        sx={{
         lineHeight: 1,
         "&.Mui-selected": {
          bgcolor: orange[800],
          color: "white",
         },
        }}
       >
        Proyek BUMN
       </ToggleButton>
       <ToggleButton
        value="dak"
        sx={{
         lineHeight: 1,
         "&.Mui-selected": {
          bgcolor: green[800],
          color: "white",
         },
        }}
       >
        Proyek DAK
       </ToggleButton>
       <ToggleButton
        value="kl"
        sx={{
         lineHeight: 1,
         "&.Mui-selected": {
          bgcolor: theme.palette.primary.main,
          color: "white",
         },
        }}
       >
        Proyek Belanja K/L
       </ToggleButton>
      </ToggleButtonGroup>
     ) : (
      <Typography fontWeight={600}>-</Typography>
     )}
    </FormControl>
   </Grid>
  </Grid>
 );
}
