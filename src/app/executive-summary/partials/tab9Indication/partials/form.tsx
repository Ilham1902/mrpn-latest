import React, { Fragment } from "react";
import {
 Autocomplete,
 Box,
 Checkbox,
 Divider,
 FormControl,
 FormControlLabel,
 Grid,
 Grow,
 MenuItem,
 Paper,
 SelectChangeEvent,
 Stack,
 TextField,
 ToggleButton,
 Tooltip,
 Typography,
} from "@mui/material";
import TextareaComponent from "@/app/components/textarea";
import SelectCustomTheme from "@/app/components/select";
import { listRisiko } from "@/app/utils/data";
import ReactQuill from "react-quill";
import dynamic from "next/dynamic";
import FormTable from "./add";
import FieldLabelInfo from "@/app/components/fieldLabelInfo";
import {
 SxAutocompleteTextField,
 SxAutocomplete,
} from "@/app/components/dropdownKp";
import { listTagProP } from "@/app/executive-summary/data";
import { paramVariantDefault } from "@/app/utils/constant";
import AddEntity from "./add";
import AddRisk from "./addRisk";

type OptionProP = (typeof listTagProP)[number];

export default function FormIndication({
 mode,
 project,
}: {
 mode?: string;
 project?: string;
}) {
 const [value, setValue] = React.useState("");
 const [valueSelect, setValueSelect] = React.useState("");
 const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
 const [columnsProP, setColumnsProp] = React.useState<OptionProP[]>([]);
 const [selectAll, setSelectAll] = React.useState<boolean>(false);

 const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
  setAnchorEl(event.currentTarget);
 };

 const handlePopoverClose = () => {
  setAnchorEl(null);
 };

 const open = Boolean(anchorEl);
 const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

 const handleChangeSelect = (event: SelectChangeEvent) => {
  setValueSelect(event.target.value);
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
     <FieldLabelInfo title="Jenis Risiko" information="Jenis Risiko" />
     {mode === "add" || mode === "edit" ? (
      <SelectCustomTheme
       defaultStyle
       small
       value={valueSelect}
       onChange={handleChangeSelect}
      >
       <MenuItem value="" disabled>
        <Typography fontSize={14} fontStyle="italic">
         Pilih jenis risiko
        </Typography>
       </MenuItem>
       {listRisiko.map((risikoLabel, index) => (
        <MenuItem key={index} value={risikoLabel}>
         {risikoLabel.length >= 35 ? (
          <Tooltip title={risikoLabel} followCursor TransitionComponent={Grow}>
           <Typography
            aria-owns={open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
            sx={{ fontSize: 14 }}
           >
            {risikoLabel.substring(0, 35) + "..."}
           </Typography>
          </Tooltip>
         ) : (
          risikoLabel
         )}
        </MenuItem>
       ))}
      </SelectCustomTheme>
     ) : (
      <Typography fontWeight={600}>-</Typography>
     )}
    </FormControl>
   </Grid>
   <Grid item xs={12}>
    <FormControl fullWidth>
     {mode === "add" || mode === "edit" ? (
      <AddRisk />
     ) : (
      <Typography fontWeight={600}>-</Typography>
     )}
    </FormControl>
   </Grid>
   <Grid item xs={12}>
    <FormControl fullWidth>
     <FieldLabelInfo title="Perlakuan Risiko" information="Perlakuan Risiko" />
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
         placeholder="Pilih RO Kunci"
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
            label="Pilih semua rincian output"
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
     <Typography gutterBottom>Indikasi Entitas Utama & Pendukung</Typography>
     {mode === "add" || mode === "edit" ? (
      <AddEntity />
     ) : (
      <Typography fontWeight={600}>-</Typography>
     )}
    </FormControl>
   </Grid>
  </Grid>
 );
}
