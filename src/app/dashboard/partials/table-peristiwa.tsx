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
  efektifitas: number,
  target: number,
  realisasi: number
 ) {
  return { id, peristiwa, efektifitas, target, realisasi };
 }

 const rows = [
  createData(1, "Keterbatasan anggaran", 3, 20, 15),
  createData(2, "Penggunaan teknologi masih rendah", 2, 18, 20),
  createData(3, "Kerusakan lingkungan", 1, 18, 20),
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
      Efektifitas
     </TableCell>
     <TableCell align="center" sx={{ p: 1, color: grey[400] }}>
      Target
     </TableCell>
     <TableCell align="center" sx={{ p: 1, color: grey[400] }}>
      Realisasi
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
      <TableCell align="center" sx={{ color: "white", fontWeight: 600 }}>
       {row.target}
      </TableCell>
      <TableCell align="center" sx={{ color: "white", fontWeight: 600 }}>
       {row.realisasi}
      </TableCell>
     </TableRow>
    ))}
   </TableBody>
  </Table>
 );

 return <BlockCard>{matriksFive}</BlockCard>;
}
