import React from "react";
import {
 Box,
 Button,
 Paper,
 Stack,
 Table,
 TableBody,
 TableCell,
 TableContainer,
 TableRow,
 TextField,
 Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { IconFA } from "@/app/components/icons/icon-fa";
import { VisuallyHiddenInput } from "@/app/utils/constant";
import TextareaComponent from "@/app/components/textarea";

export default function TableNotaDinas() {
 return (
  <>
   <Stack gap={2}>
    <TableContainer component={Paper} elevation={0} variant="outlined">
     <Table sx={{ minWidth: 650 }} size="small">
      <TableBody>
       <TableRow>
        <TableCell width={300}>
         <Typography fontSize={14} color={grey[600]}>
          Topik
         </Typography>
        </TableCell>
        <TableCell width={2} sx={{ px: 0 }}>
         :
        </TableCell>
        <TableCell>Penurunan Stunting</TableCell>
       </TableRow>
       <TableRow>
        <TableCell>
         <Typography fontSize={14} color={grey[600]}>
          Periode
         </Typography>
        </TableCell>
        <TableCell width={2} sx={{ px: 0 }}>
         :
        </TableCell>
        <TableCell>-</TableCell>
       </TableRow>
       <TableRow>
        <TableCell>
         <Typography fontSize={14} color={grey[600]}>
          Usulan Objek MRPN Lintas Sektor
         </Typography>
        </TableCell>
        <TableCell width={2} sx={{ px: 0 }}>
         :
        </TableCell>
        <TableCell>-</TableCell>
       </TableRow>
       <TableRow>
        <TableCell colSpan={3}>
         <Typography gutterBottom fontSize={14} color={grey[600]}>
          Justifikasi & Penjelasan
         </Typography>
         <TextareaComponent
          width="100%"
          label="Justifikasi & Penjelasan Usulan Objek MRPN Lintas Sektor"
          placeholder="Justifikasi & Penjelasan Usulan Objek MRPN Lintas Sektor"
         />
        </TableCell>
       </TableRow>
      </TableBody>
     </Table>
    </TableContainer>
    <Typography fontWeight={600}>Usulan UPR Lintas Sektor</Typography>
    <TableContainer component={Paper} elevation={0} variant="outlined">
     <Table sx={{ minWidth: 650 }} size="small">
      <TableBody>
       <TableRow>
        <TableCell width={300}>
         <Typography fontSize={14} color={grey[600]}>
          1. Kementerian Koordinasi
         </Typography>
        </TableCell>
        <TableCell width={2} sx={{ px: 0 }}>
         :
        </TableCell>
        <TableCell>-</TableCell>
       </TableRow>
       <TableRow>
        <TableCell>
         <Typography fontSize={14} color={grey[600]}>
          2. Entitas MRPN Sektor Utama
         </Typography>
        </TableCell>
        <TableCell width={2} sx={{ px: 0 }}>
         :
        </TableCell>
        <TableCell>-</TableCell>
       </TableRow>
       <TableRow>
        <TableCell>
         <Typography fontSize={14} color={grey[600]}>
          3. Entitas MRPN Pendukung
         </Typography>
        </TableCell>
        <TableCell width={2} sx={{ px: 0 }}>
         :
        </TableCell>
        <TableCell>-</TableCell>
       </TableRow>
       <TableRow>
        <TableCell colSpan={3}>
         <Typography gutterBottom fontSize={14} color={grey[600]}>
          Justifikasi & Penjelasan
         </Typography>
         <TextareaComponent
          width="100%"
          label="Justifikasi & Penjelasan Usulan UPR Lintas Sektor"
          placeholder="Justifikasi & Penjelasan Usulan UPR Lintas Sektor"
         />
        </TableCell>
       </TableRow>
      </TableBody>
     </Table>
    </TableContainer>
    <TableContainer component={Paper} elevation={0} variant="outlined">
     <Table sx={{ minWidth: 650 }} size="small">
      <TableBody>
       <TableRow>
        <TableCell width={300}>
         <Typography fontSize={14} color={grey[600]}>
          Lokasi & Tanggal
         </Typography>
        </TableCell>
        <TableCell width={2} sx={{ px: 0 }}>
         :
        </TableCell>
        <TableCell>
         <Stack direction="row" gap={2}>
          <TextField
           size="small"
           InputLabelProps={{
            shrink: true,
           }}
           placeholder="Isi lokasi"
           value="Jakarta"
          />
          <TextField
           size="small"
           InputLabelProps={{
            shrink: true,
           }}
           placeholder="Isi tanggal"
          />
         </Stack>
        </TableCell>
       </TableRow>
       <TableRow>
        <TableCell width={300}>
         <Typography fontSize={14} color={grey[600]}>
          Direktorat
         </Typography>
        </TableCell>
        <TableCell width={2} sx={{ px: 0 }}>
         :
        </TableCell>
        <TableCell>
         <TextField
          size="small"
          InputLabelProps={{
           shrink: true,
          }}
          placeholder="Isi direktorat"
         />
        </TableCell>
       </TableRow>
       <TableRow>
        <TableCell width={300}>
         <Typography fontSize={14} color={grey[600]}>
          Dibuat oleh
         </Typography>
        </TableCell>
        <TableCell width={2} sx={{ px: 0 }}>
         :
        </TableCell>
        <TableCell>
         <Stack direction="row" gap={2} alignItems="center">
          <TextField
           size="small"
           InputLabelProps={{
            shrink: true,
           }}
           placeholder="Dibuat oleh"
          />
          <Button
           size="small"
           component="label"
           role={undefined}
           variant="contained"
           tabIndex={-1}
           startIcon={<IconFA name="upload" size={14} />}
           sx={{ textTransform: "capitalize", px: 2, height: 36 }}
          >
           Upload tanda tangan digital
           <VisuallyHiddenInput type="file" />
          </Button>
         </Stack>
        </TableCell>
       </TableRow>
       <TableRow>
        <TableCell>
         <Typography fontSize={14} color={grey[600]}>
          Disetujui oleh
         </Typography>
        </TableCell>
        <TableCell width={2} sx={{ px: 0 }}>
         :
        </TableCell>
        <TableCell>
         <Stack direction="row" gap={2} alignItems="center">
          <TextField
           size="small"
           InputLabelProps={{
            shrink: true,
           }}
           placeholder="Disetujui oleh"
          />
          <Button
           size="small"
           component="label"
           role={undefined}
           variant="contained"
           tabIndex={-1}
           startIcon={<IconFA name="upload" size={14} />}
           sx={{ textTransform: "capitalize", px: 2, height: 36 }}
          >
           Upload tanda tangan digital
           <VisuallyHiddenInput type="file" />
          </Button>
         </Stack>
        </TableCell>
       </TableRow>
      </TableBody>
     </Table>
    </TableContainer>
    <Stack width="100%" direction="row" justifyContent="flex-end">
     <Box>
      <Button color="success" variant="contained" size="large">
       Simpan Profil
      </Button>
     </Box>
    </Stack>
   </Stack>
  </>
 );
}
