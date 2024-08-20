import React from "react";
import {
 Autocomplete,
 Button,
 Checkbox,
 Chip,
 Divider,
 FormControl,
 FormControlLabel,
 Grid,
 Icon,
 MenuItem,
 Paper,
 SelectChangeEvent,
 Stack,
 Table,
 TableBody,
 TableCell,
 TableHead,
 TableRow,
 TextField,
 Typography,
} from "@mui/material";
import TextareaComponent from "@/app/components/textarea";
import SelectCustomTheme from "@/app/components/select";
import { listPeristiwaRisiko } from "../setting";
import { red } from "@mui/material/colors";
import FieldLabelInfo from "@/app/components/fieldLabelInfo";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import theme from "@/theme";
import {
 SxAutocompleteTextField,
 SxAutocomplete,
} from "@/app/components/dropdownKp";
import HeaderIdentifikasi from "./header";
import { paramVariantDefault } from "@/app/utils/constant";
import { listRiskCategory } from "@/app/utils/data";

type Option = (typeof listPeristiwaRisiko)[number];

export default function FormTable({
 mode,
 handleModalOpenAddPeristiwa,
}: {
 mode?: string;
 handleModalOpenAddPeristiwa?: () => void;
}) {
 const [konteks, setKonteks] = React.useState("");
 const [project, setProject] = React.useState("");
 const [columns, setColumns] = React.useState<Option[]>([]);
 const [selectAll, setSelectAll] = React.useState<boolean>(false);

 const handleChangeProject = (event: SelectChangeEvent) => {
  setProject(event.target.value);
 };

 const handleChangeKonteks = (event: SelectChangeEvent) => {
  setKonteks(event.target.value);
 };

 function createData(
  id: number,
  indikator: string,
  nilai: string,
  satuan: string,
  anggaran: string,
  objek: string
 ) {
  return { id, indikator, nilai, satuan, anggaran, objek };
 }

 const rows = [
  createData(
   1,
   "Proyeksi timbulan sampah rumah tangga dan sampah sejenis sampah rumah tangga",
   "70,6",
   "juta ton",
   "-",
   "-"
  ),
  createData(
   2,
   "Target pengurangan sampah rumah tangga dan sampah sejenis sampah rumah tangga",
   "19,7",
   "juta ton",
   "-",
   "-"
  ),
  createData(
   3,
   "Target penanganan sampah rumah tangga dan sampah sejenis sampah rumah tangga",
   "50,1",
   "juta ton",
   "-",
   "-"
  ),
 ];

 const handleToggleSelectAll = () => {
  setSelectAll((prev) => {
   if (!prev) setColumns([...listPeristiwaRisiko]);
   else setColumns([]);
   return !prev;
  });
 };

 return (
  <Stack gap={2}>
   {mode === "addPeristiwa" ? null : <HeaderIdentifikasi noPadding />}
   <Grid container spacing={2}>
    {mode === "addPeristiwa" ? (
     <Grid item xs={12}>
      <FormControl fullWidth>
       <FieldLabelInfo
        title="Peristiwa Risiko Strategis MRPN Linsek"
        information="Peristiwa Risiko Strategis MRPN Linsek"
       />
       <TextareaComponent
        label="Peristiwa Risiko Strategis MRPN Linsek"
        placeholder="Peristiwa Risiko Strategis MRPN Linsek"
       />
      </FormControl>
     </Grid>
    ) : (
     <>
      {/* <Grid item lg={6}>
        <FormControl fullWidth>
        <Typography gutterBottom>Konteks</Typography>
        {mode === "add" ? (
        <SelectCustomTheme
            defaultStyle
            small
            value={konteks}
            onChange={handleChangeKonteks}
        >
            <MenuItem value="" disabled>
            <Typography fontSize={14} fontStyle="italic">
            Pilih konteks strategis
            </Typography>
            </MenuItem>
            <MenuItem value="1" defaultChecked>
            Penguatan Kebijakan Perlindungan Akses Pasar Dalam Negeri
            </MenuItem>
        </SelectCustomTheme>
        ) : mode === "edit" ? (
        <SelectCustomTheme small value={konteks} onChange={handleChangeKonteks}>
            <MenuItem value="" disabled>
            <Typography fontSize={14} fontStyle="italic">
            Pilih konteks strategis
            </Typography>
            </MenuItem>
            <MenuItem value="1" defaultChecked>
            Penguatan Kebijakan Perlindungan Akses Pasar Dalam Negeri
            </MenuItem>
        </SelectCustomTheme>
        ) : (
        <Typography fontWeight={600}>-</Typography>
        )}
        </FormControl>
        </Grid> */}
      {/* <Grid item xs={12}>
        <FormControl fullWidth>
        <FieldLabelInfo title="Sasaran" information="Sasaran" />
        {mode === "add" || mode === "edit" ? (
        <Autocomplete
        freeSolo
        size="small"
        options={listSasaran}
        getOptionLabel={(option: any) => option.target}
        renderInput={(params) => (
            <TextField
            {...params}
            InputLabelProps={{
            shrink: true,
            }}
            placeholder="Pilih sasaran"
            sx={SxAutocompleteTextField}
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
    </Grid> */}
      <Grid item xs={12}>
       <Divider>
        <Chip label="Indikator Sasaran" size="small" />
       </Divider>
      </Grid>
      <Grid item xs={12}>
       <Table size="small">
        <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
         <TableRow>
          {/* <TableCell width="70px" rowSpan={2}></TableCell> */}
          <TableCell rowSpan={2}>Indikator</TableCell>
          <TableCell colSpan={2} align="center">
           Target
          </TableCell>
          <TableCell rowSpan={2}>Anggaran</TableCell>
          <TableCell rowSpan={2}>Objek MRPN</TableCell>
         </TableRow>
         <TableRow>
          <TableCell>Nilai</TableCell>
          <TableCell>Satuan</TableCell>
         </TableRow>
        </TableHead>
        <TableBody>
         {mode === "add" ? (
          <TableRow>
           <TableCell colSpan={8}>
            <EmptyState
             icon={<IconEmptyData />}
             title="Data Kosong"
             description="Silahkan isi konten tabel ini"
            />
           </TableCell>
          </TableRow>
         ) : (
          <>
           {rows.map((row) => (
            <TableRow
             key={row.id}
             sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
             {/* <TableCell sx={{ textAlign: "center" }}>
              <Tooltip title="Delete" placement="top">
               <IconButton
                aria-label="delete"
                color="error"
                disabled={mode === "view"}
               >
                <Icon
                 baseClassName="fas"
                 className={`fa-trash-alt`}
                 sx={{
                  fontSize: "14px",
                 }}
                />
               </IconButton>
              </Tooltip>
             </TableCell> */}
             {/* <TableCell component="th" scope="row">
              {row.id}
             </TableCell> */}
             <TableCell>{row.indikator}</TableCell>
             <TableCell>{row.nilai}</TableCell>
             <TableCell>{row.satuan}</TableCell>
             <TableCell>{row.anggaran}</TableCell>
             <TableCell>{row.objek}</TableCell>
            </TableRow>
           ))}
          </>
         )}
        </TableBody>
       </Table>
      </Grid>
      <Grid item xs={12}>
       <Divider />
      </Grid>
      {/* <Grid item xs={12}>
    <FormControl fullWidth>
     <Typography gutterBottom>Uraian</Typography>
     {mode === "add" ? (
      <TextareaComponent label="Uraian" placeholder="Uraian" />
     ) : mode === "edit" ? (
      <TextareaComponent label="Uraian" placeholder="Uraian" value="-" />
     ) : (
      <Typography fontWeight={600}>-</Typography>
     )}
    </FormControl>
   </Grid>
   <Grid item sm={6}>
    <FormControl fullWidth>
     <Typography gutterBottom>Target</Typography>
     {mode === "add" ? (
      <Grid container spacing={2}>
       <Grid item xs={6}>
        <TextField
         fullWidth
         variant="outlined"
         size="small"
         placeholder="Nilai"
         InputLabelProps={{
          shrink: true,
         }}
        />
       </Grid>
       <Grid item xs={6}>
        <TextField
         fullWidth
         variant="outlined"
         size="small"
         placeholder="Satuan"
         InputLabelProps={{
          shrink: true,
         }}
        />
       </Grid>
      </Grid>
     ) : mode === "edit" ? (
      <Grid container spacing={2}>
       <Grid item xs={6}>
        <TextField
         fullWidth
         variant="outlined"
         size="small"
         value="2000"
         InputLabelProps={{
          shrink: true,
         }}
        />
       </Grid>
       <Grid item xs={6}>
        <TextField
         fullWidth
         variant="outlined"
         size="small"
         value="Orang"
         InputLabelProps={{
          shrink: true,
         }}
        />
       </Grid>
      </Grid>
     ) : (
      <Typography fontWeight={600}>-</Typography>
     )}
    </FormControl>
   </Grid>
   <Grid item xs={12} sm={6}>
    <FormControl fullWidth>
     <Typography gutterBottom>Fisik</Typography>
     {mode === "add" ? (
      <TextField
       variant="outlined"
       size="small"
       placeholder="Fisik"
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
    <Divider />
   </Grid> */}
      {/* <Grid item xs={12}>
    <FormControl fullWidth>
     <FieldLabelInfo
      title="Pemilik Risiko MRPN Linsek"
      information="Pemilik Risiko MRPN Linsek"
     />
     {mode === "add" ? (
      <TextField
       variant="outlined"
       size="small"
       placeholder="Pemilik risiko MRPN Linsek"
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
      <Grid item xs={12} sm={8}>
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
      <Grid item xs={12} sm={4}>
       <FormControl fullWidth>
        <FieldLabelInfo title="Insidentil" information="Insidentil" />
        {mode === "add" || mode === "edit" ? (
         <FormControlLabel
          control={<Checkbox />}
          label={
           <Typography fontWeight={600} color={red[600]}>
            Insidentil
           </Typography>
          }
         />
        ) : (
         <Typography fontWeight={600}>-</Typography>
        )}
       </FormControl>
      </Grid>
      <Grid item xs={12}>
       <FormControl fullWidth>
        <FieldLabelInfo
         title="Peristiwa Risiko Strategis MRPN Linsek"
         information="Peristiwa Risiko Strategis MRPN Linsek"
        />
        {mode === "add" || mode === "edit" ? (
         <Autocomplete
          multiple
          disableCloseOnSelect
          filterSelectedOptions
          freeSolo={false}
          size="small"
          value={columns}
          options={listPeristiwaRisiko}
          getOptionLabel={(option) => option.risk}
          noOptionsText={
           "Pencarian Anda tidak ada di list? Klik tombol Tambah Peristiwa Risiko Baru"
          }
          onChange={(_e, value, reason) => {
           if (reason === "clear" || reason === "removeOption")
            setSelectAll(false);
           if (
            reason === "selectOption" &&
            value.length === listPeristiwaRisiko.length
           )
            setSelectAll(true);
           setColumns(value);
          }}
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
          PaperComponent={(paperProps) => {
           const { children, ...restPaperProps } = paperProps;
           return (
            <Paper {...restPaperProps}>
             {children}
             <Divider />
             <Stack width="100%">
              <Button
               onMouseDown={handleModalOpenAddPeristiwa}
               fullWidth
               startIcon={
                <Icon
                 baseClassName="fas"
                 className={`fa-plus-circle`}
                 sx={{
                  fontSize: "18px",
                 }}
                />
               }
              >
               Tambah Peristiwa Risiko Baru
              </Button>
             </Stack>
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
         title="Penyebab/Faktor Risiko Strategis MRPN Linsek"
         information="Penyebab/Faktor Risiko Strategis MRPN Linsek"
        />
        {mode === "add" ? (
         <TextareaComponent
          label="Penyebab/faktor risiko strategis MRPN Linsek"
          placeholder="Penyebab/faktor risiko strategis MRPN Linsek"
         />
        ) : mode === "edit" ? (
         <TextareaComponent
          label="Penyebab/faktor risiko strategis MRPN Linsek"
          placeholder="Penyebab/faktor risiko strategis MRPN Linsek"
          value="-"
         />
        ) : (
         <Typography fontWeight={600}>-</Typography>
        )}
       </FormControl>
      </Grid>
      <Grid item xs={12}>
       <FormControl fullWidth>
        <FieldLabelInfo
         title="Dampak Strategis MRPN Linsek"
         information="Dampak Strategis MRPN Linsek"
        />
        {mode === "add" ? (
         <TextareaComponent
          label="Dampak strategis MRPN Linsek"
          placeholder="Dampak strategis MRPN Linsek"
         />
        ) : mode === "edit" ? (
         <TextareaComponent
          label="Dampak strategis MRPN Linsek"
          placeholder="Dampak strategis MRPN Linsek"
          value="-"
         />
        ) : (
         <Typography fontWeight={600}>-</Typography>
        )}
       </FormControl>
      </Grid>
     </>
    )}
   </Grid>
  </Stack>
 );
}
