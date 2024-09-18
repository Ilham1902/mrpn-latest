import React from "react";
import {
 Chip,
 Stack,
 Table,
 TableBody,
 TableCell,
 TableHead,
 TableRow,
 alpha,
} from "@mui/material";
import { BlockCard } from "./card";
import { grey, orange, yellow } from "@mui/material/colors";

export default function TablePeristiwa() {
 function createData(
  id: number,
  peristiwa: string,
  inherent: number,
  residual: number,
  seleraRisiko: number,
  target: number,
  realisasi: number,
  efektifitas: number
 ) {
  return {
   id,
   peristiwa,
   inherent,
   residual,
   seleraRisiko,
   target,
   realisasi,
   efektifitas,
  };
 }

 const rows = [
  createData(
   1,
   "Tumpang tindih dan konflik pemanfaatan lahan",
   24,
   18,
   3,
   20,
   15,
   1
  ),
  createData(2, "Erosi tanah", 23, 16, 3, 18, 20, 2),
  createData(
   3,
   "Minimnya akses terhadap infrastruktur pertanian presisi, saprodi dan alsintan",
   19,
   13,
   1,
   18,
   20,
   3
  ),
  createData(4, "Ketidakpastian pasokan pangan", 18, 16, 3, 18, 18, 3),
 ];

 const matriksFive = (
  <Table>
   <TableHead>
    <TableRow
     sx={{
      "td, th": { borderColor: grey[700] },
     }}
    >
     <TableCell align="center" sx={{ p: 1, color: grey[400] }}>
      Peristiwa Risiko
     </TableCell>
     <TableCell align="center" sx={{ p: 1, color: grey[400] }}>
      Inherent Risk
     </TableCell>
     <TableCell align="center" sx={{ p: 1, color: grey[400] }}>
      Residual Risk
     </TableCell>
     <TableCell align="center" sx={{ p: 1, color: grey[400] }}>
      Selera Risiko
     </TableCell>
     <TableCell align="center" sx={{ p: 1, color: grey[400] }}>
      Target Kinerja
     </TableCell>
     <TableCell align="center" sx={{ p: 1, color: grey[400] }}>
      Realisasi Kinerja
     </TableCell>
     <TableCell align="center" sx={{ p: 1, color: grey[400] }}>
      Efektifitas
     </TableCell>
    </TableRow>
   </TableHead>
   <TableBody>
    {rows.map((row) => (
     <TableRow
      key={row.id}
      sx={{
       "td, th": { borderColor: grey[700] },
       "&:last-child td, &:last-child th": { border: 0 },
      }}
     >
      <TableCell
       component="th"
       scope="row"
       sx={{ color: "white", fontWeight: 600 }}
      >
       {row.peristiwa}
      </TableCell>
      <TableCell align="center" sx={{ color: "white", fontWeight: 600 }}>
       {row.inherent}
      </TableCell>
      <TableCell align="center" sx={{ color: "white", fontWeight: 600 }}>
       {row.residual}
      </TableCell>
      <TableCell align="center">
       {row.seleraRisiko === 3 ? (
        <Chip label="Di atas" size="small" color="error" />
       ) : row.seleraRisiko === 2 ? (
        <Chip
         label="Area risk appetite"
         size="small"
         sx={{ bgcolor: yellow[400], color: "black" }}
        />
       ) : (
        <Chip label="Di bawah" size="small" color="primary" />
       )}
      </TableCell>
      <TableCell align="center" sx={{ color: "white", fontWeight: 600 }}>
       {row.target}%
      </TableCell>
      <TableCell align="center" sx={{ color: "white", fontWeight: 600 }}>
       {row.realisasi}%
      </TableCell>
      <TableCell align="center">
       {row.efektifitas === 3 ? (
        <Chip label="Efektif" size="small" color="primary" />
       ) : row.efektifitas === 2 ? (
        <Chip
         label="Efektif Sebagian"
         size="small"
         sx={{ bgcolor: yellow[400], color: "black" }}
        />
       ) : (
        <Chip label="Tidak Efektif" size="small" color="error" />
       )}
      </TableCell>
     </TableRow>
    ))}
   </TableBody>
  </Table>
 );

 return <BlockCard>{matriksFive}</BlockCard>;
}
