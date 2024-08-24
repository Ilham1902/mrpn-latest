import React, { Fragment } from "react";
import {
 Chip,
 Paper,
 Table,
 TableBody,
 TableCell,
 TableContainer,
 TableHead,
 TableRow,
 Typography,
} from "@mui/material";
import theme from "@/theme";
import { dataTema } from "../../dataTema";
import {ExsumRelatedDto} from "@/app/executive-summary/partials/tab2Profile/cardRelated/cardRelatedModel";

export default function TableTagging({ project, data }: { project: string, data:ExsumRelatedDto[] }) {
 function createData(id: number, kebijakan: string, note: React.ReactNode) {
  return {
   id,
   kebijakan,
   note,
  };
 }

 const rows = [
  createData(
   1,
   "Janpres",
   "Memberi makan siang dan susu gratis di sekolah dan pesantren, serta bantuan gizi untuk anak balita dan ibu hamil"
  ),
  createData(
   2,
   "RPJPN",
   <ul>
    <li>
     Investasi pelayanan Kesehatan primer, penuntasan stunting, serta eliminasi
     penyakit menular dan penyakit tropis terabaikan (terutama: tuberculosis dan
     kusta)
    </li>
    <li>Prevalensi stunting (pendek dan sangat pendek) pada balita (%)</li>
   </ul>
  ),
 ];

 return (
  <TableContainer component={Paper} elevation={0}>
   <Table sx={{ minWidth: 650 }} size="small">
    <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
     <TableRow>
      <TableCell sx={{ width: 200 }}>
       <Typography variant="body1" fontWeight={600}>
        Kebijakan
       </Typography>
      </TableCell>
      <TableCell>
       <Typography variant="body1" fontWeight={600}>
        Keterangan
       </Typography>
      </TableCell>
     </TableRow>
    </TableHead>
    <TableBody>
     {data.map((x,index) => (
       <TableRow
         key={index}
         sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
       >
        <TableCell>
         {x.kebijakan.map((y,index2) => (
           <Chip
             key={index2}
             size="small"
             label={y.src_kebijakan?.name}
           />
         ))}
        </TableCell>
        <TableCell>
         <Typography variant="body1">{x.value}</Typography>
        </TableCell>
       </TableRow>
     ))}
    </TableBody>
   </Table>
  </TableContainer>
 );
}
