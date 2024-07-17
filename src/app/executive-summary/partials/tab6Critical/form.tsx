import React from "react";
import {
 FormControl,
 Grid,
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

export default function FormCritical({ mode }: { mode?: string }) {
 const [alignment, setAlignment] = React.useState();

 const handleChange = (
  event: React.MouseEvent<HTMLElement>,
  newAlignment: string | any
 ) => {
  setAlignment(newAlignment);
 };

 return (
  <>
   <Grid container spacing={2}>
    <Grid item xs={12}>
     <FormControl fullWidth>
      <FieldLabelInfo title="Kegiatan" information="Kegiatan" />
      {mode === "add" ? (
       <TextareaComponent label="Kegiatan" placeholder="Kegiatan" />
      ) : mode === "edit" ? (
       <TextareaComponent label="Kegiatan" placeholder="Kegiatan" value="-" />
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
  </>
 );
}
