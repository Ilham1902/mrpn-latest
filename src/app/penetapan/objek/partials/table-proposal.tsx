import React from "react";
import {
 Box,
 Button,
 Checkbox,
 Paper,
 Stack,
 Table,
 TableBody,
 TableCell,
 TableContainer,
 TableHead,
 TableRow,
} from "@mui/material";
import theme from "@/theme";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";

export default function TableProposal({ mode }: { mode?: string }) {
 return (
  <>
   <TableContainer component={Paper} elevation={0} variant="outlined">
    <Table sx={{ minWidth: 650 }} size="small">
     <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
      <TableRow>
       <TableCell rowSpan={2} width={70}>
        No.
       </TableCell>
       <TableCell rowSpan={2}>Entitas MRPN</TableCell>
       <TableCell colSpan={5} align="center">
        Kriteria Pemilihan Prioritas UPR Linsek
       </TableCell>
      </TableRow>
      <TableRow>
       <TableCell width="16%">
        Kesesuaian dengan Arahan (Direktif) Presiden
       </TableCell>
       <TableCell width="16%">
        Memiliki Amanat dalam Peraturan Perundang-undangan
       </TableCell>
       <TableCell width="16%">Tercantum dalam Dokumen RKP & RPJMN</TableCell>
       <TableCell width="16%">Memiliki Tuga & Fungsi yang Relevan</TableCell>
       <TableCell width="16%">
        Memiliki Kontribusi Intervensi yang Signifikan Sesuai dengan Kerangka
        Kerja Logis (Diantaranya Anggaran, Kelembagaan, & Regulasi)
       </TableCell>
      </TableRow>
     </TableHead>
     <TableBody>
      {mode === "add" ? (
       <TableRow>
        <TableCell colSpan={7}>
         <EmptyState
          icon={<IconEmptyData />}
          title="Data Kosong"
          description="Silahkan isi konten tabel ini"
         />
        </TableCell>
       </TableRow>
      ) : (
       <>
        {[...new Array(3)].map((_, i) => (
         <TableRow key={i}>
          <TableCell>{i + 1}</TableCell>
          <TableCell>Entitas MRPN {i + 1}</TableCell>
          <TableCell align="center">
           <Checkbox />
          </TableCell>
          <TableCell align="center">
           <Checkbox />
          </TableCell>
          <TableCell align="center">
           <Checkbox />
          </TableCell>
          <TableCell align="center">
           <Checkbox />
          </TableCell>
          <TableCell align="center">
           <Checkbox />
          </TableCell>
         </TableRow>
        ))}
       </>
      )}
     </TableBody>
    </Table>
   </TableContainer>
   <Stack direction="row" justifyContent="flex-end">
    <Box mt={2}>
     <Button variant="contained" sx={{ borderRadius: 24 }}>
      Simpan
     </Button>
    </Box>
   </Stack>
  </>
 );
}
