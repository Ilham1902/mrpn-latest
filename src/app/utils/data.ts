export const listKemungkinan = [
 { id: "1", value: "1", label: "Kemungkinan 1" },
 { id: "2", value: "2", label: "Kemungkinan 2" },
 { id: "3", value: "3", label: "Kemungkinan 3" },
 { id: "4", value: "4", label: "Kemungkinan 4" },
 { id: "5", value: "5", label: "Kemungkinan 5" },
];

export const listDampak = [
 { id: "1", value: "1", label: "Dampak 1" },
 { id: "2", value: "2", label: "Dampak 2" },
 { id: "3", value: "3", label: "Dampak 3" },
 { id: "4", value: "4", label: "Dampak 4" },
 { id: "5", value: "5", label: "Dampak 5" },
];

export const listTriwulan = [
 "Triwulan 1 (Jan - Mar)",
 "Triwulan 2 (Apr - Mei)",
 "Triwulan 3 (Jul - Sep)",
 "Triwulan 4 (Okt - Des)",
 "Tahun 2025",
 "Tahun 2026",
 "Tahun 2027",
 "Tahun 2028",
 "Tahun 2029",
];

export const listRiskCategory = [
 "Risiko Lingkungan",
 "Risiko Sosial",
 "Risiko Geopolitik",
 "Risiko Ekonomi",
 "Risiko Teknologi",
 "Risiko Tata Kelola",
 "Risiko Reputasi",
];

export const listFundSource = [
 "APBN",
 "APBD",
 "Hibah",
 "Penerimaan Pembiayaan",
];

export const listEntitasUtama = [
 "Kementerian Kesehatan",
 "Kementerian PUPR",
 "Kementerian Perindustrian",
];

export const listEntitasPendukung = ["Kementerian Pertanian", "BPOM", "Simas"];

export const listTahun = ["2025", "2026", "2027", "2028", "2029"];

export const listLevelKemungkinan = [
 "1 - Sangat rendah",
 "2 - Rendah",
 "3 - Sedang",
 "4 - Tinggi",
 "5 - Sangat Tinggi",
];

export interface OptionKebijakan {
 id: string;
 value: string;
 label: string;
 list?: string[];
}

export const listKebijakan: OptionKebijakan[] = [
 //  { id: "1", value: "1", label: "Janpres" },
 //  { id: "2", value: "2", label: "SDGs" },
 //  { id: "3", value: "3", label: "Dekon" },
 //  { id: "4", value: "4", label: "DAK" },
 //  { id: "5", value: "5", label: "PEN" },
 //  { id: "6", value: "6", label: "RPJPN" },
 //  { id: "7", value: "7", label: "RPJMN" },
 //  { id: "8", value: "8", label: "RKP" },
 //  { id: "9", value: "9", label: "Major Project" },
 //  {
 //   id: "10",
 //   value: "10",
 //   label: "Astacita",
 //   list: [
 //    "Memperkokoh ideologi Pancasila, demokrasi, dan hak asasi manusia (HAM).",
 //    "Memantapkan sistem pertahanan keamanan negara dan mendorong kemandirian bangsa melalui swasembada pangan, energi, air, ekonomi kreatif, ekonomi hijau, dan ekonomi biru.",
 //    "Melanjutkan pengembangan infrastruktur dan meningkatkan lapangan kerja yang berkualitas, mendorong kewirausahaan, mengembangkan industri kreatif serta mengembangkan agromaritim industri di sentra produksi melalui peran aktif koperasi.",
 //    "Memperkuat pembangunan sumber daya manusia (SDM), sains, teknologi, pendidikan, kesehatan, prestasi olahraga, kesetaraan gender, serta penguatan peran perempuan, pemuda (generasi milenial dan generasi Z), dan penyandang disabilitas.",
 //    "Melanjutkan hilirisasi dan mengembangkan industri berbasis sumber daya alam untuk meningkatkan nilai tambah di dalam negeri.",
 //    "Membangun dari desa dan dari bawah untuk pemerataan ekonomi dan pemberantasan kemiskinan.",
 //    "Memperkuat reformasi politik, hukum, dan birokrasi, serta memperkuat pencegahan dan pemberantasan korupsi, narkoba, judi, dan penyelundupan.",
 //    "Memperkuat penyelarasan kehidupan yang harmonis dengan lingkungan, alam dan budaya, serta peningkatan toleransi antarumat beragama untuk mencapai masyarakat yang adil dan makmur.",
 //   ],
 //  },
 //  { id: "11", value: "11", label: "Renstra" },
 //  { id: "12", value: "12", label: "RKPD" },
 { id: "12", value: "12", label: "17 Program Prioritas" },
 {
  id: "13",
  value: "13",
  label: "8 Quick Wins",
  list: [
   "Memberi makan siang dan susu gratis di sekolah dan pesantren, serta bantuan gizi untuk anak balita dan ibu hamil",
   "Menyelenggarakan pemeriksaan kesehatan gratis, menuntaskan kasus TBC, dan membangun Rumah Sakit lengkap berkualitas di kabupaten",
   "Mencetak dan meningkatkan produktivitas lahan pertanian dengan lumbung pangan desa, daerah, dan nasional",
   "Membangun sekolah-sekolah unggul terintegrasi di setiap kabupaten, dan memperbaiki sekolah-sekolah yang perlu renovasi",
   "Melanjutkan dan menambahkan program kartu-kartu kesejahteraan sosial serta kartu usaha untuk menghilangkan kemiskinan absolut",
   "Menaikkan gaji ASN (terutama guru, dosen, tenaga kesehatan, dan penyuluh), TNI/POLRI, dan pejabat negara",
   "Melanjutkan pembangunan infrastruktur desa, Bantuan Langsung Tunai (BLT), dan menyediakan rumah murah bersanitasi baik untuk yang membutuhkan, terutama generasi milenial, generasi Z, dan masyarakat berpenghasilan rendah (MBR)",
   "Mendirikan Badan Penerimaan negara dan meningkatkan rasio penerimaan negara terhadap produk domestik bruto (PDB) ke 23%",
  ],
 },
 { id: "14", value: "14", label: "20 Game Changer" },
 { id: "15", value: "15", label: "45 Indikator RPJPN" },
];
