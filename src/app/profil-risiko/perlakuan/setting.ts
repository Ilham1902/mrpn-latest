export type PerlakuanType = {
 id: number;
 peristiwa: string;
 kategori: string;
 penyebab: string;
 dampak: string[];
 lk: number;
 ld: number;
 br: number;
 level: string;
 prioritas: number;
 keputusan: string;
 deskripsi: string[];
 waktu: string;
 penanggungjawab: string;
 lkRRH: number;
 ldRRH: number;
 brRRH: number;
 levelRRH: string;
};

export const data: PerlakuanType[] = [
 {
  id: 1,
  peristiwa: "Rendahnya alokasi anggaran untuk pengelolaan sampah ",
  kategori: "Risiko Ekonomi",
  penyebab:
   "Komitmen kepala daerah berkaitan dengan anggaran yang rendah terhadap sektor pengelolaan persampahan (Jakstranas tidak dipatuhi oleh Pemda)",
  dampak: [
   "Anggaran dalam pengelolaan sampah di Pemda rata-rata dibawah 1%",
   "Pengelolaan sampah belum menjadi prioritas karena merupakan urusan wajib non layanan dasar",
   "penyelenggaraan pengelolaan sampah tidak optimal",
   "fasilitas pengelolaan sampah tidak optimal",
   "opsi teknologi pengelolaan sampah yang advance tidak bisa diimplmentasikan",
  ],
  lk: 5,
  ld: 4,
  br: 11,
  level: "Sangat Tinggi",
  prioritas: 1,
  keputusan: "Mengurangi kemungkinan terjadinya risiko ",
  deskripsi: [
   "Penyusunan regulasi untuk menjadikan persampahan sebagai SPM sehingga berpotensi mendapatkan pendanaan yang lebih besar, earmarking anggaran untuk persampahan",
   "earmarking anggaran untuk persampahan",
   "mewajibkan pemda melakukan implementasi Permendagri 7/2021",
   "membuka seluas-luasnya opsi kerjasama dan investasi untuk meningkatkan pendanaan pengelolaan sampah (blended finance)",
  ],
  waktu: "2025",
  penanggungjawab: "Kementerian Dalam Negeri, Kementerian PUPR dan KLHK",
  lkRRH: 5,
  ldRRH: 4,
  brRRH: 22,
  levelRRH: "Sangat Tinggi",
 },
 {
  id: 2,
  peristiwa:
   "Rendahnya pengawasan dan penegakan hukum terhadap penyelenggaraan pengelolaan sampah",
  kategori: "Risiko Tata Kelola",
  penyebab:
   "1. Belum adanya pihak yang bertanggungjawab dalam pengawasan, 2. belum optimalnya fungsi penegakan hukum di sektor persampahan",
  dampak: ["Perbaikan kebijakan tidak dapat dilakukan dengan optimal"],
  lk: 4,
  ld: 4,
  br: 18,
  level: "Tinggi",
  prioritas: 3,
  keputusan: "Mengurangi kemungkinan terjadinya risiko ",
  deskripsi: [
   "1. Pengusulan revisi peraturan berkaitan dengan: a. Pembagian tugas yang jelas dalam pengawasan dan penegakan hukum sektor persampahan, b. Penyusunan mekanisme alur penegakan hukum di sektor persampahan",
  ],
  waktu: "2025",
  penanggungjawab: "KLHK",
  lkRRH: 4,
  ldRRH: 4,
  brRRH: 19,
  levelRRH: "Tinggi",
 },
];

export const riskCategory = [
 "Risiko Lingkungan",
 "Risiko Sosial",
 "Risiko Geopolitik",
 "Risiko Ekonomi",
 "Risiko Teknologi",
];

export const listPeristiwaRisiko = [
 { id: "1", risk: "Potensi peningkatan suku bunga pinjaman" },
 {
  id: "2",
  risk:
   "Potensi keterlambatan Pembangunan 56 Sabo Dam di Merapi melebihi tahun 2026",
 },
 {
  id: "3",
  risk:
   "Pembiayaan APBN dan dukungan pemerintah pusat yang terbatas untuk proyek Sabo Dam di Merapi",
 },
 {
  id: "4",
  risk: "Potensi terjadinya inflasi dan kenaikan harga-harga barang",
 },
 {
  id: "5",
  risk:
   "Perbedaan arahan Presiden terpilih yang tidak ingin melanjutkan proyek Sabo Dam",
 },
 { id: "6", risk: "Sentimen terhadap Pembangunan proyek Sabo Dam Merapi" },
 { id: "7", risk: "Tanah sepanjang Kawasan lereng Merapi dan 3 DAS" },
];

export const listSasaran = [
 { id: "1", target: "Kesehatan untuk Semua" },
 {
  id: "2",
  target: "Meningkatnya kesehatan dan gizi masyarakat",
 },
 {
  id: "3",
  target:
   "Pengeluaran Wisatawan Mancanegara (average spending per arrival) USD 1.600 /kunjungan",
 },
 {
  id: "4",
  target:
   "Produktivitas Tenaga Kerja (di sektor akmamin) Rp 32.648 (Ribu/Orang/Tahun)",
 },
 {
  id: "5",
  target: "Peningkatan Ketersediaan Pangan Nasional",
 },
 {
  id: "6",
  target:
   "Ketahanan Sosial Budaya dan Ekologi (Berketahanan Energi, Air dan Pangan)",
 },
 {
  id: "7",
  target:
   "Ketahanan Sosial Budaya dan Ekologi (IE 15 Lingkungan Hidup Berkualitas) & Meningkatnya timbulan sampah terolah di fasilitas pengolahan sampah",
 },
 {
  id: "8",
  target:
   "Penanganan sampah rumah tangga dan sampah sejenis sampah rumah tangga (hilir) & Berkurangnya jumlah sampah yang diangkut ke Landfill",
 },
];

export const listPenanggungjawab = [
 { id: 1, label: "Kementerian Dalam Negeri" },
 { id: 2, label: "Kementerian PUPR" },
 { id: 3, label: "KLHK" },
];

export const listKeputusan = [
 { id: 1, label: "Mengurangi kemungkinan terjadinya risiko" },
 { id: 2, label: "Mengurangi dampak risiko" },
 { id: 3, label: "Transfer Risiko" },
 { id: 3, label: "Menghindari Risiko" },
 { id: 3, label: "Menerima Risiko" },
];
