import React from "react";
import {
 Autocomplete,
 Box,
 Checkbox,
 Chip,
 Divider,
 FormControl,
 FormControlLabel,
 Grid,
 Paper,
 Stack,
 TextField,
 Typography,
} from "@mui/material";
import TextareaComponent from "@/app/components/textarea";
import {
 SxAutocompleteTextField,
 SxAutocomplete,
} from "@/app/components/dropdownKp";
import { listProvinsi } from "@/app/utils/provinsi";
import { paramVariantDefault } from "@/app/utils/constant";
import FieldLabelInfo from "@/app/components/fieldLabelInfo";

type Option = (typeof listProvinsi)[number];

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
  <Grid container spacing={2}>
   <Grid item xs={12}>
    <FormControl fullWidth>
     <FieldLabelInfo title="Lokasi" information="Lokasi" />
     <Stack direction="row" flexWrap="wrap" gap={0.5}>
      <Chip size="small" label="DKI Jakarta" />
      <Chip size="small" label="Jawa Barat" />
      <Chip size="small" label="Jawa Tengah" />
      <Chip size="small" label="Sumatera Utara" />
      <Chip size="small" label="Banten" />
      <Chip size="small" label="NTT" />
      <Chip size="small" label="Sulawesi Barat" />
      <Chip size="small" label="Aceh" />
      <Chip size="small" label="NTB" />
      <Chip size="small" label="Kalimantan Selatan" />
     </Stack>
    </FormControl>
   </Grid>
   <Grid item xs={12}>
    <FormControl fullWidth>
     <FieldLabelInfo title="Keterangan" information="Keterangan" />
     {mode === "add" ? (
      <TextareaComponent label="Keterangan" placeholder="Keterangan" />
     ) : mode === "edit" ? (
      <TextareaComponent
       label="Keterangan"
       placeholder="Keterangan"
       value="-"
      />
     ) : (
      <Typography fontWeight={600}>-</Typography>
     )}
    </FormControl>
   </Grid>
  </Grid>
 );
}
