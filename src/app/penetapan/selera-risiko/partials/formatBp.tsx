import React from "react";
import {
 Box,
 FormControl,
 Stack,
 Table,
 TableBody,
 TableCell,
 TableHead,
 TableRow,
 Typography,
} from "@mui/material";
import { blue, green, grey, orange, red, yellow } from "@mui/material/colors";

export default function FormatBP({ form }: { form: React.ReactNode }) {
 const matriksFive = (
  <Table>
   <TableHead>
    <TableRow sx={{ bgcolor: grey[200] }}>
     <TableCell colSpan={3} rowSpan={3} align="center" sx={{ p: 1 }}>
      Matriks Analisis Risiko 3 X 3
     </TableCell>
     <TableCell colSpan={5} align="center" sx={{ p: 1 }}>
      Level Dampak
     </TableCell>
    </TableRow>
    <TableRow sx={{ bgcolor: grey[200] }}>
     <TableCell align="center" sx={{ p: 1 }}>
      1
     </TableCell>
     <TableCell align="center" sx={{ p: 1 }}>
      2
     </TableCell>
     <TableCell align="center" sx={{ p: 1 }}>
      3
     </TableCell>
     <TableCell align="center" sx={{ p: 1 }}>
      4
     </TableCell>
     <TableCell align="center" sx={{ p: 1 }}>
      5
     </TableCell>
    </TableRow>
    <TableRow sx={{ bgcolor: grey[200] }}>
     <TableCell align="center" sx={{ p: 1 }}>
      Sangat Rendah
     </TableCell>
     <TableCell align="center" sx={{ p: 1 }}>
      Rendah
     </TableCell>
     <TableCell align="center" sx={{ p: 1 }}>
      Sedang
     </TableCell>
     <TableCell align="center" sx={{ p: 1 }}>
      Tinggi
     </TableCell>
     <TableCell align="center" sx={{ p: 1 }}>
      Sangat Tinggi
     </TableCell>
    </TableRow>
   </TableHead>
   <TableBody>
    <TableRow>
     <TableCell
      width={70}
      rowSpan={5}
      align="center"
      sx={{
       p: 1,
       transform: "rotate(270deg)",
      }}
     >
      Kemungkinan Terjadinya Risiko
     </TableCell>
     <TableCell align="center">5</TableCell>
     <TableCell>Hampir Pasti Terjadi</TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: green[400] }}>
      7
     </TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: yellow[400] }}>
      12
     </TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: yellow[400] }}>
      17
     </TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: red[400] }}>
      22
     </TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: red[400] }}>
      25
     </TableCell>
    </TableRow>
    <TableRow>
     <TableCell align="center">4</TableCell>
     <TableCell>Sering Terjadi</TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: blue[400] }}>
      4
     </TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: green[400] }}>
      9
     </TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: yellow[400] }}>
      14
     </TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: orange[400] }}>
      19
     </TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: red[400] }}>
      24
     </TableCell>
    </TableRow>
    <TableRow>
     <TableCell align="center">3</TableCell>
     <TableCell>Jarang Terjadi</TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: blue[400] }}>
      3
     </TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: green[400] }}>
      8
     </TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: yellow[400] }}>
      13
     </TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: orange[400] }}>
      18
     </TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: red[400] }}>
      23
     </TableCell>
    </TableRow>
    <TableRow>
     <TableCell align="center">2</TableCell>
     <TableCell>Kadang Terjadi</TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: blue[400] }}>
      2
     </TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: blue[400] }}>
      6
     </TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: green[400] }}>
      11
     </TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: yellow[400] }}>
      16
     </TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: red[400] }}>
      21
     </TableCell>
    </TableRow>
    <TableRow>
     <TableCell align="center">1</TableCell>
     <TableCell>Hampir Tidak Terjadi</TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: blue[400] }}>
      1
     </TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: blue[400] }}>
      5
     </TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: green[400] }}>
      10
     </TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: yellow[400] }}>
      15
     </TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: orange[400] }}>
      20
     </TableCell>
    </TableRow>
   </TableBody>
  </Table>
 );

 const levelMatriks = (
  <Table>
   <TableHead>
    <TableRow sx={{ bgcolor: grey[200] }}>
     <TableCell>Level Risiko</TableCell>
     <TableCell align="center">Besaran Risiko </TableCell>
     <TableCell align="center">Warna</TableCell>
    </TableRow>
   </TableHead>
   <TableBody>
    <TableRow>
     <TableCell>Sangat Tinggi (5)</TableCell>
     <TableCell align="center">21 - 25</TableCell>
     <TableCell align="center" sx={{ bgcolor: red[400] }}>
      Merah
     </TableCell>
    </TableRow>
    <TableRow>
     <TableCell>Tinggi (4)</TableCell>
     <TableCell align="center">18 - 20</TableCell>
     <TableCell align="center" sx={{ bgcolor: orange[400] }}>
      Oranye
     </TableCell>
    </TableRow>
    <TableRow>
     <TableCell>Sedang (3)</TableCell>
     <TableCell align="center">12 - 15</TableCell>
     <TableCell align="center" sx={{ bgcolor: yellow[400] }}>
      Kuning
     </TableCell>
    </TableRow>
    <TableRow>
     <TableCell>Rendah (2)</TableCell>
     <TableCell align="center">7 - 11</TableCell>
     <TableCell align="center" sx={{ bgcolor: green[400] }}>
      Hijau
     </TableCell>
    </TableRow>
    <TableRow>
     <TableCell>Sangat Rendah (1)</TableCell>
     <TableCell align="center">1 - 6</TableCell>
     <TableCell align="center" sx={{ bgcolor: blue[400] }}>
      Biru
     </TableCell>
    </TableRow>
   </TableBody>
  </Table>
 );

 return (
  <Stack gap={2}>
   <Typography fontStyle="italic">Tuliskan pernyataan selera risiko</Typography>
   <Box>
    <FormControl fullWidth>{form}</FormControl>
   </Box>
   <Stack display="grid" gridTemplateColumns="2.75fr 1.25fr" gap={2}>
    {matriksFive}
    {levelMatriks}
   </Stack>
  </Stack>
 );
}
