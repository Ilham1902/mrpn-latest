import React from "react";
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
 Tooltip,
 Typography,
} from "@mui/material";
import TextareaComponent from "@/app/components/textarea";
import SelectCustomTheme from "@/app/components/select";
import { listEntitasUtama } from "@/app/utils/data";
import FieldLabelInfo from "@/app/components/fieldLabelInfo";
import TableAnggaran from "./table-anggaran";
import { CheckBox } from "@mui/icons-material";
import {
 SxAutocompleteTextField,
 SxAutocomplete,
} from "@/app/components/dropdownKp";
import { columns } from "@/app/manajemen-user/setting";
import { paramVariantDefault } from "@/app/utils/constant";
import { listProvinsi } from "@/app/utils/provinsi";
import { listTagProP } from "../../data";

type Option = (typeof listProvinsi)[number];
type OptionProP = (typeof listTagProP)[number];

export default function FormProfilRoProject({ mode }: { mode?: string }) {
 const [project, setProject] = React.useState("");
 const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
 const [columns, setColumns] = React.useState<Option[]>([]);
 const [columnsProP, setColumnsProp] = React.useState<OptionProP[]>([]);
 const [selectAll, setSelectAll] = React.useState<boolean>(false);

 const handleToggleSelectAll = () => {
  setSelectAll((prev) => {
   if (!prev) setColumns([...listProvinsi]);
   else setColumns([]);
   return !prev;
  });
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
   <Grid item xs={12} md={5}>
    <FormControl fullWidth>
     <FieldLabelInfo title="Format Kode" information="Format Kode" />
     {mode === "add" ? (
      <TextField
       variant="outlined"
       size="small"
       placeholder="Format Kode"
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
   <Grid item xs={12} md={5}>
    <FormControl fullWidth>
     <FieldLabelInfo title="Tagging ProP" information="Tagging ProP" />
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
         placeholder="Pilih tagging ProP"
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
   <Grid item xs={12} md={2}>
    <FormControl fullWidth>
     <FieldLabelInfo title="Intervensi Kunci" information="Intervensi Kunci" />
     {mode === "add" || mode === "edit" ? (
      <Stack direction="row" alignItems="center" height="40px">
       <CheckBox />
      </Stack>
     ) : (
      <Typography fontWeight={600}>-</Typography>
     )}
    </FormControl>
   </Grid>
   <Grid item xs={12} md={5}>
    <FormControl fullWidth>
     <FieldLabelInfo title="Penanggungjawab" information="Penanggungjawab" />
     {mode === "add" ? (
      <TextField
       variant="outlined"
       size="small"
       placeholder="Format Kode"
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
   {/* <Grid item xs={12} md={4}>
    <FormControl fullWidth>
     <Typography gutterBottom>Entitas Utama</Typography>
     {mode === "add" || mode === "edit" ? (
      <SelectCustomTheme
       defaultStyle
       small
       value={project}
       onChange={handleChangeProject}
      >
       <MenuItem value="" disabled>
        <Typography fontSize={14} fontStyle="italic">
         Pilih Entitas Utama
        </Typography>
       </MenuItem>
       {listEntitasUtama.map((euLabel, index) => (
        <MenuItem key={index} value={euLabel}>
         {euLabel.length >= 35 ? (
          <Tooltip title={euLabel} followCursor TransitionComponent={Grow}>
           <Typography
            aria-owns={open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
            sx={{ fontSize: 14 }}
           >
            {euLabel.substring(0, 35) + "..."}
           </Typography>
          </Tooltip>
         ) : (
          euLabel
         )}
        </MenuItem>
       ))}
      </SelectCustomTheme>
     ) : (
      <Typography fontWeight={600}>-</Typography>
     )}
    </FormControl>
   </Grid>
   <Grid item xs={12} md={4}>
    <FormControl fullWidth>
     <Typography gutterBottom>Entitas Kontributor</Typography>
     {mode === "add" ? (
      <TextField
       variant="outlined"
       size="small"
       placeholder="Entitas Kontributor"
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
   </Grid> */}
   <Grid item xs={12} md={7}>
    <FormControl fullWidth>
     <FieldLabelInfo
      title="Nomenklatur RO/Project"
      information="Nomenklatur RO/Project"
     />
     {mode === "add" ? (
      <TextField
       variant="outlined"
       size="small"
       placeholder="Nomenklatur RO/Project"
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
    <TableAnggaran project={project} />
   </Grid>
  </Grid>
 );
}
