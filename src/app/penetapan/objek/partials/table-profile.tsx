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
 TableHead,
 TableRow,
 TextField,
 Typography,
} from "@mui/material";
import theme from "@/theme";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import { grey } from "@mui/material/colors";
import { IconFA } from "@/app/components/icons/icon-fa";
import { VisuallyHiddenInput } from "@/app/utils/constant";

export default function TableProfile({ mode }: { mode?: string }) {
 const rows = [
  {
   object: "Kegiatan Pembangunan: Reformasi Tata Kelola Pengelolan Sampah",
   sasaran: "Peningkatan tata kelola sampah",
   indicator: [
    "Indeks Kinerja Pengelolaan Sampah (IKPS) yang berbasis Waste Management Leader (WML platform persampahan) (nilai) (Baseline 2621- 50,06)",
   ],
   target: ["58,16"],
   kemenko: "Kementerian Koordinator Bidang Kemaritiman dan Investasi",
   entitasUtama:
    "Kementerian Lingkungan Hidup dan Kehutanan Cq. Direktorat Penanganan Sampah",
   entitasPendukung:
    "1. Direktorat Lingkungan Hidup, Kementerian PPN/Bappenas, 2. Direktorat Perumahan dan Kawasan Permukiman, Kementerian PPN/Bappenas, 3. Direktorat Pengurangan Sampah, Kementerian Lingkungan Hidup dan Kehutanan, 4. Direktorat Sanitasi, Kementerian Pekerjaan Umum dan Perumahan Rakyat, 5. Direktorat Sinkronisasi Urusan Pemerintah, Daerah 1, Kementerian Dalam Negeri, 6. Direktorat Pembangunan Daerah, Kementerian PPN/Bappenas, 7. Pemerintah Daerah",
  },
  {
   object:
    "Kegiatan Pembangunan: Peningkatan sampah terolah di TPST konservasi TPA, dan landfill mining",
   sasaran: "Peningkatan persentase sampah terolah di TPST dan TPA/LUR",
   indicator: [
    "Jumlah TPA/LUR yang beroperasi secara sanitary landfill (unit)",
    "Jumlah sampah yang diolah menjadi RDF (perlu dikonfirmasi data jumlah sampah atau jumlah fasilitas) (hektare) (Baseline 2022: 2525,62)",
   ],
   target: ["20", "4425"],
   kemenko: "(akan dindentifikasi lebih lanjut)",
   entitasUtama: "(akan dindentifikasi lebih lanjut)",
   entitasPendukung: "(akan dindentifikasi lebih lanjut)",
  },
  {
   object:
    "Kegiatan Pembangunan: Pengurangan dan pemilahan sampah di sumber serta pengumpulan pengangkutan terpilah jadwal",
   sasaran: "Peningkatan jumlah sampah yang dipilah dan dikurangi",
   indicator: [
    "Persentase Pengurangan Sampah (%)",
    " Proporsi rumah tangga yang sudah mendapatkan akses terhadap layanan penuh pengumpulan",
   ],
   target: ["18", "78"],
   kemenko: "(akan dindentifikasi lebih lanjut)",
   entitasUtama: "(akan dindentifikasi lebih lanjut)",
   entitasPendukung: "(akan dindentifikasi lebih lanjut)",
  },
 ];

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
         <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, facilis
          hic consectetur vel corrupti voluptatem illo nulla, assumenda
          exercitationem iure accusantium harum totam nam, sunt minus. Officia
          numquam eum explicabo! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Dolores accusamus tempora quis eligendi nostrum
          omnis. Quam ullam nihil, distinctio dolor, sapiente iusto quidem
          reiciendis fuga, vel quos omnis nulla aliquid. Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Delectus laborum architecto
          perferendis ratione repudiandae harum earum iure repellendus, soluta
          facilis dignissimos quia, aut ipsa expedita nobis pariatur dolore
          neque exercitationem.
         </p>
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
         <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, facilis
          hic consectetur vel corrupti voluptatem illo nulla, assumenda
          exercitationem iure accusantium harum totam nam, sunt minus. Officia
          numquam eum explicabo! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Dolores accusamus tempora quis eligendi nostrum
          omnis. Quam ullam nihil, distinctio dolor, sapiente iusto quidem
          reiciendis fuga, vel quos omnis nulla aliquid. Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Delectus laborum architecto
          perferendis ratione repudiandae harum earum iure repellendus, soluta
          facilis dignissimos quia, aut ipsa expedita nobis pariatur dolore
          neque exercitationem.
         </p>
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
