import React from "react";
import {
 Autocomplete,
 Box,
 Button,
 Chip,
 Divider,
 FormControl,
 Grid,
 Icon,
 MenuItem,
 Paper,
 SelectChangeEvent,
 Stack,
 TextField,
 Typography,
} from "@mui/material";
import SelectCustomTheme from "@/app/components/select";
import { listPeristiwaRisiko } from "../setting";
import { red } from "@mui/material/colors";
import FieldLabelInfo from "@/app/components/fieldLabelInfo";
import {
 SxAutocompleteTextField,
 SxAutocomplete,
} from "@/app/components/dropdownKp";
import TextareaComponent from "@/app/components/textarea";
import { paramVariantDefault } from "@/app/utils/constant";
import { listRiskCategory } from "@/app/utils/data";

type Option = (typeof listPeristiwaRisiko)[number];

export default function FormTable({ mode }: { mode?: string }) {
 const [project, setProject] = React.useState("");
 const [columns, setColumns] = React.useState<Option[]>([]);
 const [selectAll, setSelectAll] = React.useState<boolean>(false);

 const handleChangeProject = (event: SelectChangeEvent) => {
  setProject(event.target.value);
 };

 return (
  <Grid container spacing={2}>
   <Grid item xs={12}>
    <Divider>
     <Chip label="Identifikasi Risiko" size="small" />
    </Divider>
   </Grid>
   <Grid item xs={12}>
    <FormControl fullWidth>
     <FieldLabelInfo
      title="Peristiwa Risiko Strategis MRPN Linsek"
      information="Peristiwa Risiko Strategis MRPN Linsek"
     />
     {mode === "add" || mode === "edit" ? (
      <Autocomplete
       //    multiple
       disableCloseOnSelect
       filterSelectedOptions
       //    freeSolo={false}
       size="small"
       //    value={columns}
       options={listPeristiwaRisiko}
       getOptionLabel={(option) => option.risk}
       noOptionsText={
        "Pencarian Anda tidak ada di list? Klik tombol Tambah Peristiwa Risiko Baru"
       }
       //    onChange={(_e, value, reason) => {
       //     if (reason === "clear" || reason === "removeOption")
       //      setSelectAll(false);
       //     if (
       //      reason === "selectOption" &&
       //      value.length === listPeristiwaRisiko.length
       //     )
       //      setSelectAll(true);
       //     setColumns(value);
       //    }}
       renderInput={(params) => (
        <TextField
         {...params}
         InputLabelProps={{
          shrink: true,
         }}
         placeholder="Pilih peristiwa risiko"
         sx={SxAutocompleteTextField(paramVariantDefault)}
        />
       )}
       //    PaperComponent={(paperProps) => {
       //     const { children, ...restPaperProps } = paperProps;
       //     return (
       //      <Paper {...restPaperProps}>
       //       {children}
       //       <Divider />
       //       <Stack width="100%">
       //        <Button
       //         fullWidth
       //         startIcon={
       //          <Icon
       //           baseClassName="fas"
       //           className={`fa-plus-circle`}
       //           sx={{
       //            fontSize: "18px",
       //           }}
       //          />
       //         }
       //        >
       //         Tambah Peristiwa Risiko Baru
       //        </Button>
       //       </Stack>
       //      </Paper>
       //     );
       //    }}
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
      title="Kategori Risiko MRPN Linsek"
      information="Kategori Risiko MRPN Linsek"
     />
     {mode === "add" || mode === "edit" ? (
      <SelectCustomTheme
       small
       defaultStyle
       value={project}
       onChange={handleChangeProject}
      >
       <MenuItem value="" disabled>
        <Typography fontSize={14} fontStyle="italic">
         Pilih kategori risiko MRPN Linsek
        </Typography>
       </MenuItem>
       {listRiskCategory.map((category, index) => (
        <MenuItem key={index} value={index} defaultChecked>
         {category}
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
     <FieldLabelInfo title="Penyebab" information="Penyebab" />
     {mode === "add" ? (
      <TextareaComponent label="Penyebab" placeholder="Penyebab" />
     ) : mode === "edit" ? (
      <TextareaComponent label="Penyebab" placeholder="Penyebab" value="-" />
     ) : (
      <Typography fontWeight={600}>-</Typography>
     )}
    </FormControl>
   </Grid>
   <Grid item xs={12}>
    <FormControl fullWidth>
     <FieldLabelInfo title="Dampak" information="Dampak" />
     {mode === "add" ? (
      <TextareaComponent label="Dampak" placeholder="Dampak" />
     ) : mode === "edit" ? (
      <TextareaComponent label="Dampak" placeholder="Dampak" value="-" />
     ) : (
      <Typography fontWeight={600}>-</Typography>
     )}
    </FormControl>
   </Grid>
   <Grid item xs={12}>
    <Divider>
     <Chip label="Analisis & Evaluasi Risiko" size="small" />
    </Divider>
   </Grid>
   <Grid item xs={12} sm={6}>
    <FormControl fullWidth>
     <FieldLabelInfo
      title="Level Kemungkinan (LK)"
      information="Level Kemungkinan (LK)"
     />
     {mode === "add" || mode === "edit" ? (
      <SelectCustomTheme
       small
       defaultStyle
       value={project}
       onChange={handleChangeProject}
      >
       <MenuItem value="" disabled>
        <Typography fontSize={14} fontStyle="italic">
         Pilih level kemungkinan (LK)
        </Typography>
       </MenuItem>
       {[...new Array(5)].map((_, i) => (
        <MenuItem key={i} value={i} defaultChecked>
         {i + 1}
        </MenuItem>
       ))}
      </SelectCustomTheme>
     ) : (
      <Typography fontWeight={600}>-</Typography>
     )}
    </FormControl>
   </Grid>
   <Grid item xs={12} sm={6}>
    <FormControl fullWidth>
     <FieldLabelInfo
      title="Level Dampak (LD)"
      information="Level Dampak (LD)"
     />
     {mode === "add" || mode === "edit" ? (
      <SelectCustomTheme
       small
       defaultStyle
       value={project}
       onChange={handleChangeProject}
      >
       <MenuItem value="" disabled>
        <Typography fontSize={14} fontStyle="italic">
         Pilih level dampak (LD)
        </Typography>
       </MenuItem>
       {[...new Array(5)].map((_, i) => (
        <MenuItem key={i} value={i} defaultChecked>
         {i + 1}
        </MenuItem>
       ))}
      </SelectCustomTheme>
     ) : (
      <Typography fontWeight={600}>-</Typography>
     )}
    </FormControl>
   </Grid>
   <Grid item xs={12} sm={4}>
    <FormControl fullWidth>
     <FieldLabelInfo
      title="Besaran Risiko (BR)"
      information="Besaran Risiko (BR)"
     />
     <Typography fontWeight={600}>19</Typography>
    </FormControl>
   </Grid>
   <Grid item xs={12} sm={4}>
    <FormControl fullWidth>
     <FieldLabelInfo title="Level Risiko" information="Level Risiko" />
     <Box>
      <Chip
       color="error"
       sx={{
        minWidth: 80,
        borderWidth: "2px",
        borderStyle: "solid",
        "& .MuiChip-label": {
         fontWeight: 600,
        },
        "&.MuiChip-colorError": {
         bgcolor: red[100],
         borderColor: red[400],
         color: red[900],
        },
       }}
       label="Sangat Tinggi"
      />
     </Box>
    </FormControl>
   </Grid>
   <Grid item xs={12} sm={4}>
    <FormControl fullWidth>
     <FieldLabelInfo title="Prioritas Risiko" information="Prioritas Risiko" />
     <Typography fontWeight={600}>3</Typography>
    </FormControl>
   </Grid>
  </Grid>
 );
}
