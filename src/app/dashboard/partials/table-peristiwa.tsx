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
import { grey, orange } from "@mui/material/colors";

export default function TablePeristiwa() {
 function createData(
  id: number,
  peristiwa: string,
  inherent: number,
  risidual: number,
  analisis: number,
  target: number,
  realisasi: number,
  efektifitas: number
 ) {
  return {
   id,
   peristiwa,
   inherent,
   risidual,
   analisis,
   target,
   realisasi,
   efektifitas,
  };
 }

 const rows = [
  createData(1, "Keterbatasan anggaran", 21, 44, 1, 20, 15, 3),
  createData(2, "Penggunaan teknologi masih rendah", 45, 84, 3, 18, 20, 2),
  createData(3, "Kerusakan lingkungan", 69, 97, 2, 18, 20, 1),
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
      Risidual Risk
     </TableCell>
     <TableCell align="center" sx={{ p: 1, color: grey[400] }}>
      Analisis Risk
     </TableCell>
     <TableCell align="center" sx={{ p: 1, color: grey[400] }}>
      Target Progress
     </TableCell>
     <TableCell align="center" sx={{ p: 1, color: grey[400] }}>
      Realisasi Progress
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
       {row.risidual}
      </TableCell>
      <TableCell align="center">
       {row.analisis === 3 ? (
        <Chip label="Di atas selera risiko" size="small" color="primary" />
       ) : row.analisis === 2 ? (
        <Chip
         label="Area risk appetite"
         size="small"
         sx={{ bgcolor: orange[600], color: "white" }}
        />
       ) : (
        <Chip label="Di bawah selera risiko" size="small" color="error" />
       )}
      </TableCell>
      <TableCell align="center" sx={{ color: "white", fontWeight: 600 }}>
       {row.target}
      </TableCell>
      <TableCell align="center" sx={{ color: "white", fontWeight: 600 }}>
       {row.realisasi}
      </TableCell>
      <TableCell align="center">
       {row.efektifitas === 3 ? (
        <Chip label="Efektif" size="small" color="primary" />
       ) : row.efektifitas === 2 ? (
        <Chip
         label="Efektif Sebagian"
         size="small"
         sx={{ bgcolor: orange[600], color: "white" }}
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
