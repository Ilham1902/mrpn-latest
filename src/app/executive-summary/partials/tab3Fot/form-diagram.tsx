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
 TextField,
 Tooltip,
 Typography,
} from "@mui/material";
import {
 SxAutocompleteTextField,
 SxAutocomplete,
} from "@/app/components/dropdownKp";
import { paramVariantDefault } from "@/app/utils/constant";
import FieldLabelInfo from "@/app/components/fieldLabelInfo";
import { listSwotSo, listSwotSt, listSwotWo, listSwotWt } from "../../data";
import { listProvinsi } from "@/app/utils/provinsi";
import SelectCustomTheme from "@/app/components/select";
import { listFundSource, listRiskCategory } from "@/app/utils/data";

type Option = (typeof listSwotSo)[number];
type OptionLoc = (typeof listProvinsi)[number];

export default function FormDiagram({ mode }: { mode?: string }) {
 const [columnsSo, setColumnsSo] = React.useState<Option[]>([]);
 const [columnsWo, setColumnsWo] = React.useState<Option[]>([]);
 const [columnsSt, setColumnsSt] = React.useState<Option[]>([]);
 const [columnsWt, setColumnsWt] = React.useState<Option[]>([]);
 const [columnsLocation, setColumnsLocation] = React.useState<OptionLoc[]>([]);
 const [selectAll, setSelectAll] = React.useState<boolean>(false);
 const [valueSelect, setValueSelect] = React.useState("");
 const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

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
 const handleToggleSelectAllLocation = () => {
  setSelectAll((prev) => {
   if (!prev) setColumnsLocation([...listProvinsi]);
   else setColumnsLocation([]);
   return !prev;
  });
 };
 const handleChangeSelect = (event: SelectChangeEvent) => {
  setValueSelect(event.target.value);
 };
 const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
  setAnchorEl(event.currentTarget);
 };

 const handlePopoverClose = () => {
  setAnchorEl(null);
 };

 const open = Boolean(anchorEl);

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
     <Typography fontWeight={600}>
      Komitmen global dalam percepatan perbaikan gizi, termasuk penurunan
      stunting
     </Typography>
    </FormControl>
   </Grid>
   <Grid item xs={12}>
    <FormControl fullWidth>
     <FieldLabelInfo title="Sumber Pendanaan" information="Sumber Pendanaan" />
     {mode === "add" || mode === "edit" ? (
      <SelectCustomTheme
       defaultStyle
       small
       value={valueSelect}
       onChange={handleChangeSelect}
      >
       <MenuItem value="" disabled>
        <Typography fontSize={14} fontStyle="italic">
         Pilih sumber pendanaan
        </Typography>
       </MenuItem>
       {listFundSource.map((sourceItem, index) => (
        <MenuItem key={index} value={sourceItem}>
         {sourceItem.length >= 35 ? (
          <Tooltip title={sourceItem} followCursor TransitionComponent={Grow}>
           <Typography
            aria-owns={open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
            sx={{ fontSize: 14 }}
           >
            {sourceItem.substring(0, 35) + "..."}
           </Typography>
          </Tooltip>
         ) : (
          sourceItem
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
             handleToggleSelectAllWt();
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
