import React from "react";
import {
 Button,
 DialogActions,
 Icon,
 IconButton,
 Paper,
 Stack,
 Table,
 TableBody,
 TableCell,
 TableContainer,
 TableHead,
 TableRow,
 Tooltip,
} from "@mui/material";
import theme from "@/theme";
import { AddCircle } from "@mui/icons-material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import DialogComponent from "@/app/components/dialog";
import FieldLabelInfo from "@/app/components/fieldLabelInfo";
import FormSasaran from "./form-sasaran";
import CardItem from "@/app/components/cardTabItem";

export default function TableSasaran({
 variant,
 mode,
}: {
 variant?: string;
 mode?: string;
}) {
 const [modalOpenAdd, setModalOpenAdd] = React.useState(false);

 const handleModalOpenAdd = () => {
  setModalOpenAdd(true);
 };

 const handleModalClose = () => {
  setModalOpenAdd(false);
 };

 function createData(
  id: number,
  peran: string,
  entitas: string,
  sasaran: string,
  indikator: string,
  target: string
 ) {
  return { id, peran, entitas, sasaran, indikator, target };
 }

 const rows = [
  createData(
   1,
   "KP Peningkatan sampah terolah di TPST, konservasi TPA, dan landfill mining",
   "Kementerian Lingkungan Hidup dan Kehutanan",
   "Meningkatnya persentase sampah terolah di TPST dan TPA/LUR (24% di semua fasilitas pengelolaan sampah (2025)) (exsisting baseline  2022: 15) (target proyeksi tiap tahun kenaikan 3%)",
   "1. Jumlah TPA/LUR yang beroperasi secara sanitary landfill (baseline 2022:  15), 2. Jumlah sampah yang diolah menjadi RDF (perlu dikonfirmasi data jumlah sampah atau jumlah fasilitas)",
   "1. 20"
  ),
  createData(
   2,
   "KP Pengurangan dan pemilahan sampah di sumber serta pengumpulan pengangkutan terpilah jadwal",
   "Kementerian Lingkungan Hidup dan Kehutanan",
   "Meningkatnya persentase pengurangan sampah",
   "Persentase pengurangan sampah",
   "30%"
  ),
 ];

 const dialogActionFooter = (
  <DialogActions sx={{ p: 2, px: 3 }}>
   <Button onClick={handleModalClose}>Batal</Button>
   <Button variant="contained" type="submit">
    Simpan
   </Button>
  </DialogActions>
 );

 return (
  <>
   <CardItem
    title="Sasaran, Indikator, dan Target Kinerja UPR Lintas Sektor"
    setting
    settingEditOnclick={handleModalOpenAdd}
   >
    <TableContainer component={Paper} elevation={0} variant="outlined">
     <Table size="small">
      <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
       <TableRow>
        {/* <TableCell width="70px"></TableCell> */}
        <TableCell>Peran</TableCell>
        <TableCell>Entitas MRPN</TableCell>
        <TableCell>Sasaran</TableCell>
        <TableCell>Indikator</TableCell>
        <TableCell>Target</TableCell>
       </TableRow>
      </TableHead>
      <TableBody>
       {mode === "add" ? (
        <TableRow>
         <TableCell colSpan={5}>
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
           <TableCell>{row.peran}</TableCell>
           <TableCell>{row.entitas}</TableCell>
           <TableCell>{row.sasaran}</TableCell>
           <TableCell>{row.indikator}</TableCell>
           <TableCell align="right">{row.target}</TableCell>
          </TableRow>
         ))}
        </>
       )}
      </TableBody>
     </Table>
    </TableContainer>
   </CardItem>
   <DialogComponent
    width={320}
    dialogOpen={modalOpenAdd}
    dialogClose={handleModalClose}
    title="Tambah Sasaran"
    dialogFooter={dialogActionFooter}
   >
    <FormSasaran mode="add" />
   </DialogComponent>
  </>
 );
}
