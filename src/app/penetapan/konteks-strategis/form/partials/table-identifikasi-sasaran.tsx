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
import FormIdentifikasi from "./form-identifikasi";
import CardItem from "@/app/components/cardTabItem";

export default function TableIdentifikasiSasaran({
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
  uraian: string,
  sasaran: string,
  indikator: string,
  target: string
 ) {
  return { id, uraian, sasaran, indikator, target };
 }

 const rows = [
  createData(
   1,
   "Ketahanan Sosial Budaya dan Ekologi",
   "Lingkungan Hidup Berkualitas",
   "Timbulan Sampah Terolah di Fasilitas Pengolahan Sampah",
   "0.37"
  ),
  createData(
   2,
   "Peningkatan Sampah Terolah di TPST, Konservasi TPA, dan Landfill Mining",
   "Meningkatnya Persentase Sampah Terolah di TPST dan TPA/LUR",
   "Jumlah TPA/LUR yang Beroperasi Secara Sanitary Landfill",
   "10"
  ),
  createData(
   3,
   "Pengembangan Standar Produk Hasil Olahan Sampah",
   "-",
   "Jumlah Entitas usaha/kegiatan yang menerapkan standar pengelolaan limbah non-B3 dan sampah",
   "300"
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
    title="Identifikasi Sasaran dan Indikator Objek MRPN Lintas Sektor"
    setting
    settingEditOnclick={handleModalOpenAdd}
   >
    {/* <Stack
     mb={2}
     direction="row"
     justifyContent="space-between"
     alignItems="center"
    >
     <FieldLabelInfo
      titleSection
      title="Identifikasi Sasaran dan Indikator Objek MRPN Lintas Sektor"
      information="Identifikasi Sasaran dan Indikator Objek MRPN Lintas Sektor"
     />
     {mode === "add" || mode === "edit" ? (
      <Button
       variant="outlined"
       size="small"
       startIcon={<AddCircle />}
       sx={{ lineHeight: 1, py: 1, borderRadius: 24 }}
       onClick={handleModalOpenAdd}
      >
       Tambah Identifikasi
      </Button>
     ) : null}
    </Stack> */}
    <TableContainer component={Paper} elevation={0} variant="outlined">
     <Table size="small">
      <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
       <TableRow>
        {/* <TableCell width="70px"></TableCell>
        <TableCell>No.</TableCell> */}
        <TableCell>Uraian</TableCell>
        <TableCell>Sasaran</TableCell>
        <TableCell>Indikator</TableCell>
        <TableCell width={150}>Target</TableCell>
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
           </TableCell>
           <TableCell>{row.id}</TableCell> */}
           <TableCell>{row.uraian}</TableCell>
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
    title="Tambah Identifkasi Sasaran"
    dialogFooter={dialogActionFooter}
   >
    <FormIdentifikasi mode="add" />
   </DialogComponent>
  </>
 );
}
