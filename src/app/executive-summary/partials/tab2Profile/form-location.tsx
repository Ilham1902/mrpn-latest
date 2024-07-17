import React from "react";
import {
 Autocomplete,
 Box,
 Checkbox,
 Divider,
 FormControlLabel,
 Paper,
 Stack,
 TextField,
 Typography,
} from "@mui/material";
import TextareaComponent from "@/app/components/textarea";
import { grey } from "@mui/material/colors";
import {
 SxAutocompleteTextField,
 SxAutocomplete,
} from "@/app/components/dropdownKp";
import { listProvinsi } from "@/app/utils/provinsi";

type Option = (typeof listProvinsi)[number];

const LocationItem = ({ mode }: { mode?: string }) => {
 const [columns, setColumns] = React.useState<Option[]>([]);
 const [selectAll, setSelectAll] = React.useState<boolean>(false);
 const currentDate = new Date();

 const minDate = new Date();
 const maxDate = new Date();

 minDate.setFullYear(currentDate.getFullYear() - 10);
 maxDate.setFullYear(currentDate.getFullYear() + 20);

 const handleToggleSelectAll = () => {
  setSelectAll((prev) => {
   if (!prev) setColumns([...listProvinsi]);
   else setColumns([]);
   return !prev;
  });
 };

 return (
  <Stack p={2} gap={3} direction="column" height="100%">
   <Stack gap={1}>
    <Typography fontSize={16} fontWeight={500}>
     Lokasi
    </Typography>
    {mode === "add" ? (
     <Autocomplete
      multiple
      disableCloseOnSelect
      filterSelectedOptions
      size="small"
      freeSolo={false}
      value={columns}
      options={listProvinsi}
      getOptionLabel={(option) => option.nama}
      onChange={(_e, value, reason) => {
       if (reason === "clear" || reason === "removeOption") setSelectAll(false);
       if (reason === "selectOption" && value.length === listProvinsi.length)
        setSelectAll(true);
       setColumns(value);
      }}
      renderInput={(params) => (
       <TextField
        {...params}
        InputLabelProps={{
         shrink: true,
        }}
        placeholder="Pilih provinsi"
        sx={SxAutocompleteTextField}
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
            handleToggleSelectAll();
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
   </Stack>
   <Stack gap={1}>
    <Typography fontSize={16} fontWeight={500}>
     Keterangan
    </Typography>
    {mode === "add" ? (
     <TextareaComponent
      label="Keterangan proyek fisik"
      placeholder="Keterangan proyek fisik"
     />
    ) : mode === "edit" ? (
     <TextareaComponent
      label="Keterangan proyek fisik"
      placeholder="Keterangan proyek fisik"
      value="-"
     />
    ) : (
     <Typography fontWeight={600}>-</Typography>
    )}
   </Stack>
  </Stack>
 );
};

export default function FormLocation({ mode }: { mode?: string }) {
 const [columns, setColumns] = React.useState<Option[]>([]);
 const [selectAll, setSelectAll] = React.useState<boolean>(false);
 const currentDate = new Date();

 const minDate = new Date();
 const maxDate = new Date();

 minDate.setFullYear(currentDate.getFullYear() - 10);
 maxDate.setFullYear(currentDate.getFullYear() + 20);

 const handleToggleSelectAll = () => {
  setSelectAll((prev) => {
   if (!prev) setColumns([...listProvinsi]);
   else setColumns([]);
   return !prev;
  });
 };

 return (
  <Stack direction="column" gap={2} width="100%">
   <Stack
    direction="column"
    border={`1px solid ${grey[300]}`}
    borderRadius={2}
    width="100%"
   >
    <Box
     bgcolor={grey[200]}
     textAlign="center"
     p={1.5}
     borderRadius={2}
     borderBottom={`1px solid ${grey[300]}`}
     sx={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
    >
     <Typography fontSize={16} fontWeight={500}>
      Proyek Fisik
     </Typography>
    </Box>
    <LocationItem mode={mode} />
   </Stack>
   <Stack
    direction="column"
    border={`1px solid ${grey[300]}`}
    borderRadius={2}
    width="100%"
   >
    <Box
     bgcolor={grey[200]}
     textAlign="center"
     p={1.5}
     borderRadius={2}
     borderBottom={`1px solid ${grey[300]}`}
     sx={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
    >
     <Typography fontSize={16} fontWeight={500}>
      Proyek Non-fisik
     </Typography>
    </Box>
    <LocationItem mode={mode} />
   </Stack>
  </Stack>
 );
}
