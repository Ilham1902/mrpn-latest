import React, { useState } from "react";
import {
 Autocomplete,
 Box,
 Checkbox,
 Chip,
 Divider,
 FormControl,
 Grid,
 InputAdornment,
 MenuItem,
 OutlinedInput,
 Paper,
 SelectChangeEvent,
 Stack,
 Table,
 TableBody,
 TableCell,
 TableContainer,
 TableHead,
 TableRow,
 TextField,
 Typography,
} from "@mui/material";
import SelectCustomTheme from "@/app/components/select";
import {
 listKeputusan,
 listPenanggungjawab,
 listPeristiwaRisiko,
} from "../setting";
import { grey, red } from "@mui/material/colors";
import FieldLabelInfo from "@/app/components/fieldLabelInfo";
import {
 SxAutocompleteTextField,
 SxAutocomplete,
} from "@/app/components/dropdownKp";
import DateRangePicker from "@/app/components/dateRange";
import theme from "@/theme";
import { paramVariantDefault } from "@/app/utils/constant";
import { listRiskCategory } from "@/app/utils/data";
import Matriks from "../../analisis-evaluasi/partials/matriks";

type Option = (typeof listPeristiwaRisiko)[number];
type OptionRspn = (typeof listPenanggungjawab)[number];

const data = [
 {
  id: 1,
  ro: "Suplementasi gizi mikro pada balita",
  target: "72,42",
  satuan: "poin",
  anggaran: "Kemen PUPR",
 },
 {
  id: 2,
  ro: "	Tata laksana balita gizi buruk",
  target: "33",
  satuan: "%",
  anggaran: "Kemen PPN",
 },
 {
  id: 3,
  ro: "Penanggulangan kurang energi kronik (KEK) pada ibu hamil",
  target: "moderat",
  satuan: "indeks",
  anggaran: "Kemenkeu",
 },
 {
  id: 4,
  ro: "Suplementasi gizi mikro pada balita",
  target: "72,42",
  satuan: "poin",
  anggaran: "Kemen PUPR",
 },
 {
  id: 5,
  ro: "	Tata laksana balita gizi buruk",
  target: "33",
  satuan: "%",
  anggaran: "Kemen PPN",
 },
 {
  id: 6,
  ro: "Penanggulangan kurang energi kronik (KEK) pada ibu hamil",
  target: "moderat",
  satuan: "indeks",
  anggaran: "Kemenkeu",
 },
 {
  id: 7,
  ro: "Suplementasi gizi mikro pada balita",
  target: "72,42",
  satuan: "poin",
  anggaran: "Kemen PUPR",
 },
 {
  id: 8,
  ro: "	Tata laksana balita gizi buruk",
  target: "33",
  satuan: "%",
  anggaran: "Kemen PPN",
 },
 {
  id: 9,
  ro: "Penanggulangan kurang energi kronik (KEK) pada ibu hamil",
  target: "moderat",
  satuan: "indeks",
  anggaran: "Kemenkeu",
 },
];

const highlightText = (text: any, highlight: any) => {
 if (!highlight.trim()) {
  return text;
 }
 const regex = new RegExp(`(${highlight})`, "gi");
 const parts = text.split(regex);
 return parts.map((part: any, index: any) =>
  regex.test(part) ? (
   <span key={index} style={{ backgroundColor: "yellow" }}>
    {part}
   </span>
  ) : (
   part
  )
 );
};

const TablePerlakuanMultiCheck = () => {
 const [search, setSearch] = React.useState("");

 const handleSearchChange = (event: any) => {
  setSearch(event.target.value);
 };

 const filteredData = data.filter(
  (row: any) => row.ro.toLowerCase().includes(search.toLowerCase())
  //    || row.email.toLowerCase().includes(search.toLowerCase())
 );

 return (
  <Paper elevation={0} variant="outlined" sx={{ minWidth: "100% !important" }}>
   <TextField
    InputLabelProps={{
     shrink: true,
    }}
    variant="outlined"
    fullWidth
    placeholder="Cari nomenklatur RO"
    value={search}
    onChange={handleSearchChange}
    sx={SxAutocompleteTextField(paramVariantDefault)}
    size="small"
   />
   <TableContainer sx={{ maxHeight: 200 }}>
    <Table stickyHeader size="small">
     <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
      <TableRow>
       <TableCell sx={{ width: 30 }}></TableCell>
       <TableCell>Nomenklatur RO</TableCell>
       <TableCell>Target</TableCell>
       <TableCell>Satuan</TableCell>
       <TableCell>Anggaran</TableCell>
      </TableRow>
     </TableHead>
     <TableBody>
      {filteredData.map((row) => (
       <TableRow key={row.id}>
        <TableCell>
         <Checkbox size="small" />
        </TableCell>
        <TableCell>{highlightText(row.ro, search)}</TableCell>
        <TableCell>{highlightText(row.target, search)}</TableCell>
        <TableCell>{highlightText(row.satuan, search)}</TableCell>
        <TableCell>{highlightText(row.anggaran, search)}</TableCell>
       </TableRow>
      ))}
     </TableBody>
    </Table>
   </TableContainer>
  </Paper>
 );
};

export default function FormTable({ mode }: { mode?: string }) {
 const [project, setProject] = useState("");
 const [columnsRspn, setColumnsRspn] = useState<OptionRspn[]>([]);
 const [selectAll, setSelectAll] = useState<boolean>(false);

 const [clickedCell, setClickedCell] = useState({
  rowIndex: null,
  colIndex: null,
  value: null,
 });

 const handleClick = (rowIndex: any, colIndex: any, value: any) => {
  setClickedCell({ rowIndex, colIndex, value });
 };
 const handleChangeProject = (event: SelectChangeEvent) => {
  setProject(event.target.value);
 };

 const conditionValueLK =
  clickedCell.value === 7 ||
  clickedCell.value === 12 ||
  clickedCell.value === 17 ||
  clickedCell.value === 22 ||
  clickedCell.value === 25
   ? 5
   : clickedCell.value === 4 ||
     clickedCell.value === 9 ||
     clickedCell.value === 14 ||
     clickedCell.value === 19 ||
     clickedCell.value === 24
   ? 4
   : clickedCell.value === 3 ||
     clickedCell.value === 8 ||
     clickedCell.value === 13 ||
     clickedCell.value === 18 ||
     clickedCell.value === 23
   ? 3
   : clickedCell.value === 2 ||
     clickedCell.value === 6 ||
     clickedCell.value === 11 ||
     clickedCell.value === 16 ||
     clickedCell.value === 21
   ? 2
   : clickedCell.value === 1 ||
     clickedCell.value === 5 ||
     clickedCell.value === 10 ||
     clickedCell.value === 15 ||
     clickedCell.value === 20
   ? 1
   : "-";

 const conditionValueLD =
  clickedCell.value === 7 ||
  clickedCell.value === 4 ||
  clickedCell.value === 3 ||
  clickedCell.value === 2 ||
  clickedCell.value === 1
   ? 1
   : clickedCell.value === 12 ||
     clickedCell.value === 9 ||
     clickedCell.value === 8 ||
     clickedCell.value === 6 ||
     clickedCell.value === 5
   ? 2
   : clickedCell.value === 17 ||
     clickedCell.value === 14 ||
     clickedCell.value === 13 ||
     clickedCell.value === 11 ||
     clickedCell.value === 10
   ? 3
   : clickedCell.value === 22 ||
     clickedCell.value === 19 ||
     clickedCell.value === 18 ||
     clickedCell.value === 16 ||
     clickedCell.value === 15
   ? 4
   : clickedCell.value === 25 ||
     clickedCell.value === 24 ||
     clickedCell.value === 23 ||
     clickedCell.value === 21 ||
     clickedCell.value === 20
   ? 5
   : "-";

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
       disableCloseOnSelect
       filterSelectedOptions
       freeSolo={false}
       size="small"
       options={listPeristiwaRisiko}
       getOptionLabel={(option) => option.risk}
       noOptionsText={
        "Pencarian Anda tidak ada di list? Klik tombol Tambah Peristiwa Risiko Baru"
       }
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
    <Divider>
     <Chip label="Analisis & Evaluasi Risiko" size="small" />
    </Divider>
   </Grid>
   <Grid item xs={12} sm={4}>
    <FormControl fullWidth>
     <FieldLabelInfo
      title="Level Dampak (LD)"
      information="Level Dampak (LD)"
     />
     <Typography fontWeight={600}>5</Typography>
    </FormControl>
   </Grid>
   <Grid item xs={12} sm={4}>
    <FormControl fullWidth>
     <FieldLabelInfo
      title="Level Kemungkinan (LK)"
      information="Level Kemungkinan (LK)"
     />
     <Typography fontWeight={600}>4</Typography>
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
   <Grid item xs={12}>
    <Divider>
     <Chip label="Perlakuan Risiko" size="small" />
    </Divider>
   </Grid>
   <Grid item xs={12}>
    <FormControl fullWidth>
     <FieldLabelInfo title="Keputusan" information="Keputusan" />
     {mode === "add" || mode === "edit" ? (
      <Autocomplete
       size="small"
       options={listKeputusan}
       getOptionLabel={(option) => option.label}
       renderInput={(params) => (
        <TextField
         {...params}
         InputLabelProps={{
          shrink: true,
         }}
         placeholder="Pilih keputusan"
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
     <FieldLabelInfo
      title="Keterangan Perlakuan Risiko"
      information="Keterangan Perlakuan Risiko"
     />
     <TablePerlakuanMultiCheck />
    </FormControl>
   </Grid>
   <Grid item xs={12}>
    <FormControl fullWidth>
     <FieldLabelInfo title="Waktu Rencana" information="Waktu Rencana" />
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
   <Grid item xs={12} sm={6}>
    <FormControl fullWidth>
     <FieldLabelInfo title="Penanggungjawab" information="Penanggungjawab" />
     {mode === "add" || mode === "edit" ? (
      <Autocomplete
       multiple
       disableCloseOnSelect
       filterSelectedOptions
       freeSolo={false}
       size="small"
       value={columnsRspn}
       options={listPenanggungjawab}
       getOptionLabel={(option) => option.label}
       onChange={(_e, value, reason) => {
        if (reason === "clear" || reason === "removeOption")
         setSelectAll(false);
        if (
         reason === "selectOption" &&
         value.length === listPenanggungjawab.length
        )
         setSelectAll(true);
        setColumnsRspn(value);
       }}
       renderInput={(params) => (
        <TextField
         {...params}
         InputLabelProps={{
          shrink: true,
         }}
         placeholder="Pilih penanggungjawab"
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
   <Grid item xs={12} sm={6}>
    <FormControl fullWidth>
     <FieldLabelInfo
      title="Target Capaian Progress Project/RO"
      information="Target Capaian Progress Project/RO"
     />
     {mode === "add" ? (
      <OutlinedInput
       size="small"
       fullWidth
       placeholder="Target Capaian Progress Project/RO"
       endAdornment={<InputAdornment position="end">%</InputAdornment>}
      />
     ) : mode === "edit" ? (
      <OutlinedInput
       size="small"
       fullWidth
       value={23}
       endAdornment={<InputAdornment position="end">%</InputAdornment>}
      />
     ) : (
      <Typography fontWeight={600}>-</Typography>
     )}
    </FormControl>
   </Grid>
   <Grid item xs={12}>
    <Divider>
     <Chip label="Risiko Residual Harapan" size="small" />
    </Divider>
   </Grid>
   <Grid item xs={12}>
    <FormControl>
     <Typography fontStyle="italic" variant="overline" color={grey[600]}>
      Klik kotak berwarna untuk menampilkan nilai LK & LD
     </Typography>
    </FormControl>
    <Matriks levelId={5} handleClick={handleClick} clickedCell={clickedCell} />
   </Grid>
   <Grid item xs={12} sm={6}>
    <FormControl fullWidth>
     <FieldLabelInfo
      title="Level Kemungkinan (LK)"
      information="Level Kemungkinan (LK)"
     />
     <Typography fontWeight={600}>{conditionValueLK}</Typography>
    </FormControl>
   </Grid>
   <Grid item xs={12} sm={6}>
    <FormControl fullWidth>
     <FieldLabelInfo
      title="Level Dampak (LD)"
      information="Level Dampak (LD)"
     />
     <Typography fontWeight={600}>{conditionValueLD}</Typography>
    </FormControl>
   </Grid>
   <Grid item xs={12} sm={6}>
    <FormControl fullWidth>
     <FieldLabelInfo
      title="Besaran Risiko (BR)"
      information="Besaran Risiko (BR)"
     />
     <Stack sx={{ height: 40 }} direction="row" alignItems="center">
      <Typography fontWeight={600}>22</Typography>
     </Stack>
    </FormControl>
   </Grid>
   <Grid item xs={12} sm={6}>
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
  </Grid>
 );
}
