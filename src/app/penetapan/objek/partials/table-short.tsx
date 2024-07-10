import React from "react";
import {
 Paper,
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

export default function TableShortlist({ mode }: { mode?: string }) {
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
   <TableContainer component={Paper} elevation={0} variant="outlined">
    <Table sx={{ minWidth: 650 }} size="small">
     <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
      <TableRow>
       <TableCell>Objek</TableCell>
       <TableCell>Sasaran</TableCell>
       <TableCell>Indikator</TableCell>
       <TableCell>Target</TableCell>
       <TableCell>Kementerian Koordinator</TableCell>
       <TableCell>Entitas MRPN Sektor Utama</TableCell>
       <TableCell>Entitas MRPN Pendukung</TableCell>
      </TableRow>
     </TableHead>
     <TableBody>
      {mode === "add" ? (
       <TableRow>
        <TableCell colSpan={3}>
         <EmptyState
          icon={<IconEmptyData />}
          title="Data Kosong"
          description="Silahkan isi konten tabel ini"
         />
        </TableCell>
       </TableRow>
      ) : (
       <>
        {rows.map((row, rowIndex) =>
         row.indicator.map((subItem, subIndex) => (
          <TableRow key={`${rowIndex}-${subIndex}`}>
           {subIndex === 0 && (
            <TableCell rowSpan={row.indicator.length}>{row.object}</TableCell>
           )}
           {subIndex === 0 && (
            <TableCell rowSpan={row.indicator.length}>{row.sasaran}</TableCell>
           )}
           <TableCell>{subItem}</TableCell>
           <TableCell>{row.target[subIndex]}</TableCell>
           {subIndex === 0 && (
            <TableCell rowSpan={row.indicator.length}>{row.kemenko}</TableCell>
           )}
           {subIndex === 0 && (
            <TableCell rowSpan={row.indicator.length}>
             {row.entitasUtama}
            </TableCell>
           )}
           {subIndex === 0 && (
            <TableCell rowSpan={row.indicator.length}>
             {row.entitasPendukung}
            </TableCell>
           )}
          </TableRow>
         ))
        )}
       </>
      )}
     </TableBody>
    </Table>
   </TableContainer>
  </>
 );
}
